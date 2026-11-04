import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { AlgorithmIdentifier } from "./AlgorithmIdentifier.ta.mjs";

const sha256 = ObjectIdentifier.fromString("2.16.840.1.101.3.4.2.1");
const sha1 = ObjectIdentifier.fromString("1.3.14.3.2.26");

function nullElement(): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
    );
}

describe("AlgorithmIdentifier.isEqualTo()", () => {
    it("matches the same algorithm with no parameters", () => {
        expect(new AlgorithmIdentifier(sha256).isEqualTo(new AlgorithmIdentifier(sha256)))
            .toBe(true);
    });

    it("matches the same algorithm and parameters", () => {
        const a = new AlgorithmIdentifier(sha256, nullElement());
        const b = new AlgorithmIdentifier(sha256, nullElement());
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a different algorithm or a missing parameter", () => {
        const withNull = new AlgorithmIdentifier(sha256, nullElement());
        expect(new AlgorithmIdentifier(sha256).isEqualTo(new AlgorithmIdentifier(sha1)))
            .toBe(false);
        expect(withNull.isEqualTo(new AlgorithmIdentifier(sha256))).toBe(false);
        expect(new AlgorithmIdentifier(sha256).isEqualTo(withNull)).toBe(false);
    });
});
