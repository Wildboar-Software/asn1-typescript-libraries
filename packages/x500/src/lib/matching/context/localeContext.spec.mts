import { ObjectIdentifier, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import { evaluateLocaleContext } from "./localeContext.mjs";

describe("evaluateLocaleContext", () => {
    it("matches localeID1 OIDs", () => {
        const oid = ObjectIdentifier.fromParts([ 1, 2, 3 ]);
        const el = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            oid,
        );
        expect(evaluateLocaleContext(el, el)).toBe(true);
    });

    it("matches unrecognized locale alternatives by encoding", () => {
        const el = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            3,
            new Uint8Array([ 1, 2, 3 ]),
        );
        const other = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            3,
            new Uint8Array([ 4, 5, 6 ]),
        );
        expect(evaluateLocaleContext(el, el)).toBe(true);
        expect(evaluateLocaleContext(el, other)).toBe(false);
    });
});
