import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  difficulty: z.enum(["Básico", "Intermedio", "Avanzado"]),
  tags: z.array(z.string()).default([]),
});

const linux = defineCollection({ type: "content", schema: baseSchema });
const redes = defineCollection({ type: "content", schema: baseSchema });
const virtualizacion = defineCollection({ type: "content", schema: baseSchema });
const seguridad = defineCollection({ type: "content", schema: baseSchema });
const proyectos = defineCollection({ type: "content", schema: baseSchema });

export const collections = { linux, redes, virtualizacion, seguridad, proyectos };
