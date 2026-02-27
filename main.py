from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]
@app.get("/")
def read_root():
    return {"Ping": "Pong"}
def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        graph[source].append(target)
    visited = set()
    recursion_stack = set()
    def dfs(node):
        if node in recursion_stack:
            return False
        if node in visited:
            return True
        visited.add(node)
        recursion_stack.add(node)
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        recursion_stack.remove(node)
        return True
    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False
    return True
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_status = is_dag(nodes, edges)
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_status,
    }