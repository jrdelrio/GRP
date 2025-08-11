import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY_CHILISITES);

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const comany = formData.get("company")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const projectType = formData.get("project")?.toString() || "";
        const message = formData.get("message")?.toString() || "";

        if (!name || !email) {
            return new Response(
                JSON.stringify({ error: "Faltan campos obligatorios" }),
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Chilisites Services <contacto@chilisites.com>",
            //   to: "contacto@grpingenieria.cl",
            to: "jrdelriodom@gmail.com",
            subject: "Tienes un nuevo Contacto Web",
            html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Compañia:</strong> ${comany}</p>
             <p><strong>Telefono:</strong> ${phone}</p>
             <p><strong>Tipo de Proyecto:</strong> ${projectType}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Error interno" }), {
            status: 500,
        });
    }
};
