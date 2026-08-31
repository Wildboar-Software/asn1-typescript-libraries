import { describe, expect, it } from "vitest";
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type ALGORITHM } from "./ALGORITHM.oca.mjs";
import { absent } from "./ParamOptions.ta.mjs";

describe("ALGORITHM", () => {
    it("describes a generic algorithm information object", () => {
        const id = _OID.fromString("1.2.840.10045.2.1");
        const alg: ALGORITHM = {
            class: "ALGORITHM",
            decoderFor: {},
            encoderFor: {},
            "&id": id,
            "&Params": undefined as never,
            "&paramPresence": absent,
        };
        expect(alg.class).toBe("ALGORITHM");
        expect(alg["&id"]!.toString()).toBe("1.2.840.10045.2.1");
        expect(alg["&paramPresence"]).toBe(absent);
    });
});
