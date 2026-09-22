import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { AlgorithmIdentifier } from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import compareAlgorithmIdentifier from "./compareAlgorithmIdentifier.mjs";

const OID = ObjectIdentifier.fromString("1.2.840.113549.1.1.1");

describe("compareAlgorithmIdentifier()", () => {
    it("returns false, not undefined, when only one side has parameters", () => {
        const a = new AlgorithmIdentifier(OID, new DERElement());
        const b = new AlgorithmIdentifier(OID);
        expect(compareAlgorithmIdentifier(a, b)).toBe(false);
        expect(compareAlgorithmIdentifier(b, a)).toBe(false);
    });
});
