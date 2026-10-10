import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    ObjectIdentifier,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContextFlags_delegFlag,
    ContextFlags_integFlag,
    ContextFlags_mutualFlag,
} from "./lib/modules/Spnego/ContextFlags.ta.mjs";
import {
    HeaderFlags_is_dns_name,
    HeaderFlags_kdc_required,
} from "./lib/modules/Spnego/HeaderFlags.ta.mjs";
import {
    IAKERB_HEADER,
    _decode_IAKERB_HEADER,
    _encode_IAKERB_HEADER,
} from "./lib/modules/Spnego/IAKERB-HEADER.ta.mjs";
import {
    NegHints,
} from "./lib/modules/Spnego/NegHints.ta.mjs";
import {
    NegTokenInit2,
    _decode_NegTokenInit2,
    _encode_NegTokenInit2,
} from "./lib/modules/Spnego/NegTokenInit2.ta.mjs";
import {
    NegotiationToken,
    _decode_NegotiationToken,
    _encode_NegotiationToken,
} from "./lib/modules/Spnego/NegotiationToken.ta.mjs";
import {
    NegTokenTarg,
} from "./lib/modules/Spnego/NegTokenTarg.ta.mjs";
import {
    NegTokenTarg_negResult_accept_incomplete,
} from "./lib/modules/Spnego/NegTokenTarg-negResult.ta.mjs";

const kerberos = ObjectIdentifier.fromString("1.2.840.113554.1.2.2");
const ntlm = ObjectIdentifier.fromString("1.3.6.1.4.1.311.2.2.10");
const spnego = ObjectIdentifier.fromString("1.3.6.1.5.5.2");

function contextFlags(): Uint8ClampedArray {
    const flags = new Uint8ClampedArray(7);
    flags[ContextFlags_delegFlag] = TRUE_BIT;
    flags[ContextFlags_mutualFlag] = TRUE_BIT;
    flags[ContextFlags_integFlag] = TRUE_BIT;
    return flags;
}

describe("NegTokenInit2", () => {
    test("round-trips a fully populated MS-SPNG negTokenInit2", () => {
        const original = new NegTokenInit2(
            [kerberos, ntlm],
            contextFlags(),
            new Uint8Array([0x01, 0x02, 0x03, 0x04]),
            new NegHints(
                "kdc.example.com",
                new Uint8Array([192, 0, 2, 10])
            ),
            new Uint8Array([0x0a, 0x0b, 0x0c])
        );
        const el = _encode_NegTokenInit2(original, $.BER);
        const decoded = _decode_NegTokenInit2(el);
        expect(decoded.mechTypes?.map((mech) => mech.toString())).toEqual([
            kerberos.toString(),
            ntlm.toString(),
        ]);
        expect(decoded.reqFlags).toEqual(original.reqFlags);
        expect(decoded.mechToken).toEqual(original.mechToken);
        expect(decoded.negHints?.hintName).toBe("kdc.example.com");
        expect(decoded.negHints?.hintAddress).toEqual(original.negHints?.hintAddress);
        expect(decoded.mechListMIC).toEqual(original.mechListMIC);
        expect(decoded).toEqual(original);
    });
});

describe("NegotiationToken", () => {
    test("round-trips negTokenTarg with explicit context tags", () => {
        const original: NegotiationToken = {
            negTokenTarg: new NegTokenTarg(
                NegTokenTarg_negResult_accept_incomplete,
                kerberos,
                new Uint8Array([0x04, 0x05, 0x06]),
                new Uint8Array([0x07, 0x08]),
                [spnego, kerberos]
            ),
        };
        const el = _encode_NegotiationToken(original, $.BER);
        expect(el.tagClass).toBe(ASN1TagClass.context);
        expect(el.tagNumber).toBe(1);
        expect(el.construction).toBe(ASN1Construction.constructed);
        const inner = el.sequence[0];
        expect(inner).toBeDefined();
        expect(inner?.tagClass).toBe(ASN1TagClass.universal);
        expect(inner?.tagNumber).toBe(ASN1UniversalType.sequence);
        const decoded = _decode_NegotiationToken(el);
        expect("negTokenTarg" in decoded).toBe(true);
        if (!("negTokenTarg" in decoded)) {
            return;
        }
        expect(decoded.negTokenTarg.negResult).toBe(NegTokenTarg_negResult_accept_incomplete);
        expect(decoded.negTokenTarg.supportedMech?.toString()).toBe(kerberos.toString());
        expect(decoded.negTokenTarg.responseToken).toEqual(original.negTokenTarg.responseToken);
        expect(decoded.negTokenTarg.mechListMIC).toEqual(original.negTokenTarg.mechListMIC);
        expect(decoded.negTokenTarg.mechTypes?.map((mech) => mech.toString())).toEqual([
            spnego.toString(),
            kerberos.toString(),
        ]);
    });
});

describe("IAKERB_HEADER", () => {
    test("round-trips a header and preserves an unrecognized extension", () => {
        const flags = new Uint8ClampedArray(32);
        flags[HeaderFlags_kdc_required] = TRUE_BIT;
        flags[HeaderFlags_is_dns_name] = TRUE_BIT;
        const extension = $._encodeUTF8String("extra", $.BER);
        extension.tagClass = ASN1TagClass.context;
        extension.tagNumber = 4;
        const original = new IAKERB_HEADER(
            "EXAMPLE.COM",
            new Uint8Array([0x11, 0x22]),
            flags,
            [extension]
        );
        const el = _encode_IAKERB_HEADER(original, $.BER);
        const decoded = _decode_IAKERB_HEADER(el);
        expect(decoded.target_realm).toBe("EXAMPLE.COM");
        expect(decoded.cookie).toEqual(original.cookie);
        expect(decoded.header_flags).toEqual(original.header_flags);
        expect(decoded._unrecognizedExtensionsList).toHaveLength(1);
        const ext = decoded._unrecognizedExtensionsList[0];
        expect(ext?.tagClass).toBe(ASN1TagClass.context);
        expect(ext?.tagNumber).toBe(4);
        expect($._decodeUTF8String(ext!)).toBe("extra");
    });
});
