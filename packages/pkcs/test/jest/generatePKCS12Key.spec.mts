import * as asn1 from "@wildboar/asn1";
import generatePKCS12Key from "@wildboar/pkcs/src/lib/generatePKCS12Key";
import * as crypto from "crypto";
import * as forge from "node-forge";

test("the password processing in generatePKCS12Key() produces the same results as the node-forge equivalent", () => {
    const password = crypto.randomBytes(24).toString("base64");
    const passBuf = forge.util.createBuffer();
    for (let l = 0; l < password.length; l++) {
        passBuf.putInt16(password.charCodeAt(l));
    }
    passBuf.putInt16(0);
    const forgePassword = Buffer.from(passBuf.getBytes(), "binary");
    const pkcsPassword = Buffer.from((() => {
        const el = new asn1.DERElement();
        el.bmpString = (password + "\0");
        return el.value;
    })());
    expect(forgePassword).toEqual(pkcsPassword);
});

test("generatePKCS12Key() produces the same results as the node-forge equivalent for small inputs", () => {
    for (let i = 0; i < 50; i++) {
        const password = crypto.randomBytes(24).toString("base64");
        const salt = crypto.randomBytes(24);
        const iterations = crypto.randomBytes(1)[0];
        const n = crypto.randomBytes(1)[0];
        const md = forge.md.sha256.create();
        const forgeKeyBuffer = forge.pkcs12.generateKey(password, forge.util.createBuffer(salt.toString("binary")), 1, iterations, n, md);
        const forgeKey = Buffer.from(forgeKeyBuffer.getBytes(), "binary");
        const pkcsKey = generatePKCS12Key(password, new Uint8Array(salt), 1, iterations, n, "SHA256", 64, 32);
        expect(forgeKey.length).toBe(pkcsKey.length);
        expect(forgeKey).toEqual(pkcsKey);
    }
});

test("generatePKCS12Key() produces the same results as the node-forge equivalent for medium-sized inputs", () => {
    for (let i = 0; i < 10; i++) {
        const password = crypto.randomBytes(24).toString("base64");
        const salt = crypto.randomBytes(24);
        const iterations = crypto.randomBytes(1)[0];
        const n = crypto.randomBytes(1)[0] * crypto.randomBytes(1)[0];
        const md = forge.md.sha256.create();
        const forgeKeyBuffer = forge.pkcs12.generateKey(password, forge.util.createBuffer(salt.toString("binary")), 1, iterations, n, md);
        const forgeKey = Buffer.from(forgeKeyBuffer.getBytes(), "binary");
        const pkcsKey = generatePKCS12Key(password, new Uint8Array(salt), 1, iterations, n, "SHA256", 64, 32);
        expect(forgeKey.length).toBe(pkcsKey.length);
        expect(forgeKey).toEqual(pkcsKey);
    }
});
