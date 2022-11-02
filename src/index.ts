import fastifyAuth from "@fastify/auth";
import { fastify } from "fastify";

const server = fastify({});

server.register(fastifyAuth);

server.listen({ port: 3000 });
