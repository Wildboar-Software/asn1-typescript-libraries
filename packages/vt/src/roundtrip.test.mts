import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ASQcontent,
    _decode_ASQcontent,
    _encode_ASQcontent,
} from "./lib/modules/ISO9041-VTP/ASQcontent.ta.mjs";
import { ASQcontent_class_basic } from "./lib/modules/ISO9041-VTP/ASQcontent-class.ta.mjs";
import { a_mode } from "./lib/modules/ISO9041-VTP/ASQcontent-either.ta.mjs";
import { ImplementationIdent } from "./lib/modules/G/ImplementationIdent.ta.mjs";
import { Profile } from "./lib/modules/G/Profile.ta.mjs";
import {
    COupdate,
    _decode_COupdate,
    _encode_COupdate,
} from "./lib/modules/G/COupdate.ta.mjs";
import {
    type BasicVTPitem,
    _decode_BasicVTPitem,
    _encode_BasicVTPitem,
} from "./lib/modules/ISO9041-VTP/BasicVTPitem.ta.mjs";
import {
    ASQcontent as ASQcontentFromRoot,
    COupdate as COupdateFromRoot,
    vtp_b,
} from "./index.mjs";

describe("VT encode/decode round-trips", () => {
    test("round-trips ASQcontent with implementation, profile, and mode", () => {
        const original = new ASQcontent(
            ASQcontent_class_basic,
            new ImplementationIdent(
                ObjectIdentifier.fromParts([1, 3, 9999, 1]),
                "wildboar-vt",
                "1.0.0",
            ),
            new Uint8ClampedArray([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            new Profile(ObjectIdentifier.fromParts([1, 0, 9041, 1])),
            new Uint8ClampedArray([1]),
            a_mode,
        );
        const decoded = _decode_ASQcontent(_encode_ASQcontent(original, $.BER));
        expect(decoded.class_).toBe(original.class_);
        expect(decoded.implementation?.implementationName).toBe("wildboar-vt");
        expect(decoded.implementation?.implementationVersion).toBe("1.0.0");
        expect(decoded.implementation?.implementationIdentifier?.toString()).toBe(
            "1.3.9999.1",
        );
        expect(decoded.functional_units).toEqual(original.functional_units);
        expect(decoded.profile?.name?.toString()).toBe("1.0.9041.1");
        expect(decoded.protocol_version).toEqual(original.protocol_version);
        expect(decoded.either).toBe(a_mode);
    });

    test("round-trips COupdate integerUpdate choice", () => {
        const original = new COupdate("status", { integerUpdate: 42 });
        const decoded = _decode_COupdate(_encode_COupdate(original, $.BER));
        expect(decoded.coName).toBe("status");
        expect(decoded.objectUpdate).toEqual({ integerUpdate: 42 });
    });

    test("round-trips BasicVTPitem wrapping ASQcontent and COupdate", () => {
        const asq = new ASQcontent(
            ASQcontent_class_basic,
            new ImplementationIdent(undefined, "tester"),
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const asqPdu: BasicVTPitem = { asq_pdu: asq };
        const asqDecoded = _decode_BasicVTPitem(
            _encode_BasicVTPitem(asqPdu, $.BER),
        );
        expect("asq_pdu" in asqDecoded).toBe(true);
        if ("asq_pdu" in asqDecoded) {
            expect(asqDecoded.asq_pdu.class_).toBe(ASQcontent_class_basic);
            expect(asqDecoded.asq_pdu.implementation?.implementationName).toBe(
                "tester",
            );
        }

        const udq: BasicVTPitem = {
            udq_pdu: new COupdate("cursor", { symbolicUpdate: 3 }),
        };
        const udqDecoded = _decode_BasicVTPitem(
            _encode_BasicVTPitem(udq, $.BER),
        );
        expect("udq_pdu" in udqDecoded).toBe(true);
        if ("udq_pdu" in udqDecoded) {
            expect(udqDecoded.udq_pdu.coName).toBe("cursor");
            expect(udqDecoded.udq_pdu.objectUpdate).toEqual({
                symbolicUpdate: 3,
            });
        }
    });

    test("re-exports protocol types and the vtp-b OID from the package root", () => {
        expect(ASQcontentFromRoot).toBe(ASQcontent);
        expect(COupdateFromRoot).toBe(COupdate);
        expect(vtp_b.toString()).toBe("1.0.9041");
    });
});
