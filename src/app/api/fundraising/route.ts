import fs from "fs/promises";
import path from "path";

function clean(v: unknown) {
  return String(v ?? "").trim().slice(0, 300);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = {
      email: clean(body.email),
      network: clean(body.network),
      amount: clean(body.amount),
      wallet: clean(body.wallet),
      txHash: clean(body.txHash),
      createdAt: new Date().toISOString(),
    };

    if (!payload.network || !payload.amount || !payload.wallet) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "fundraising.json");
    await fs.mkdir(dir, { recursive: true });

    let arr: any[] = [];
    try {
      const raw = await fs.readFile(file, "utf8");
      arr = JSON.parse(raw);
      if (!Array.isArray(arr)) arr = [];
    } catch {}

    arr.push(payload);
    await fs.writeFile(file, JSON.stringify(arr, null, 2));

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
