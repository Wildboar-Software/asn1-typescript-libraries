import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Abort_PDU,
    _decode_Abort_PDU,
    _encode_Abort_PDU,
} from "./lib/modules/RFC1085-PS/Abort-PDU.ta.mjs";
import { Abort_reason_unspecified } from "./lib/modules/RFC1085-PS/Abort-reason.ta.mjs";
import {
    CL_UserData_PDU,
    _decode_CL_UserData_PDU,
    _encode_CL_UserData_PDU,
} from "./lib/modules/RFC1085-PS/CL-UserData-PDU.ta.mjs";
import {
    ConnectRequest_PDU,
    _decode_ConnectRequest_PDU,
    _encode_ConnectRequest_PDU,
} from "./lib/modules/RFC1085-PS/ConnectRequest-PDU.ta.mjs";
import { ConnectRequest_PDU_version_version_1 } from "./lib/modules/RFC1085-PS/ConnectRequest-PDU-version.ta.mjs";
import {
    PDUs,
    _decode_PDUs,
    _encode_PDUs,
} from "./lib/modules/RFC1085-PS/PDUs.ta.mjs";
import { SessionConnectionIdentifier } from "./lib/modules/RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import {
    _decode_UserData_PDU,
    _encode_UserData_PDU,
} from "./lib/modules/RFC1085-PS/UserData-PDU.ta.mjs";

/**
 * ROSE invoke from RFC 1085 Appendix B, without the outer UserData `[5]`.
 * ```
 * [0] { invokeID 1, operation-value 5, argument NULL }
 * ```
 */
function roseInvoke(): BERElement {
    const el = new BERElement();
    el.fromBytes(new Uint8Array([
        0xa0, 0x08,
        0x02, 0x01, 0x01,
        0x02, 0x01, 0x05,
        0x30, 0x00,
    ]));
    return el;
}

function sampleReference(additional?: Uint8Array): SessionConnectionIdentifier {
    return new SessionConnectionIdentifier(
        new Uint8Array([0x61, 0x62]),
        new Date(Date.UTC(1990, 0, 1, 0, 0, 0)),
        additional,
    );
}

describe("ConnectRequest-PDU", () => {
    test("round-trips a connect request with every component present", () => {
        const original = new ConnectRequest_PDU(
            ConnectRequest_PDU_version_version_1,
            sampleReference(new Uint8Array([0x63])),
            new Uint8Array([0x01, 0x02]),
            new Uint8Array([0x03]),
            ObjectIdentifier.fromParts([1, 2, 3]),
            roseInvoke(),
        );
        const encoded = _encode_ConnectRequest_PDU(original, $.BER);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(0);
        expect(encoded.construction).toBe(ASN1Construction.constructed);
        const components = encoded.sequence;
        expect(components).toHaveLength(6);
        expect(components[0].construction).toBe(ASN1Construction.primitive);
        expect(components[0].tagNumber).toBe(0);
        expect(components[1].tagNumber).toBe(0);
        expect(components[1].construction).toBe(ASN1Construction.constructed);
        expect(components[1].inner.tagClass).toBe(ASN1TagClass.universal);
        expect(components[1].inner.tagNumber).toBe(ASN1UniversalType.sequence);
        expect(components[2].tagNumber).toBe(1);
        expect(components[2].construction).toBe(ASN1Construction.primitive);
        expect(components[3].tagNumber).toBe(2);
        expect(components[3].construction).toBe(ASN1Construction.primitive);
        expect(components[4].tagNumber).toBe(3);
        expect(components[5].tagNumber).toBe(5);
        expect(components[5].inner.toBytes()).toEqual(roseInvoke().toBytes());

        const decoded = _decode_ConnectRequest_PDU(encoded);
        expect(decoded.version).toBe(original.version);
        expect(decoded.reference.callingSSUserReference).toEqual(original.reference.callingSSUserReference);
        expect(decoded.reference.commonReference.getTime()).toBe(original.reference.commonReference.getTime());
        expect(decoded.reference.additionalReferenceInformation).toEqual(new Uint8Array([0x63]));
        expect(decoded.calling).toEqual(original.calling);
        expect(decoded.called).toEqual(original.called);
        expect(decoded.asn.toString()).toBe("1.2.3");
        expect(decoded.user_data.toBytes()).toEqual(roseInvoke().toBytes());
        expect(_encode_ConnectRequest_PDU(decoded, $.BER).toBytes()).toEqual(encoded.toBytes());

        const choice: PDUs = { connectRequest: original };
        const decodedChoice = _decode_PDUs(_encode_PDUs(choice, $.BER));
        expect("connectRequest" in decodedChoice).toBe(true);
        if ("connectRequest" in decodedChoice) {
            expect(decodedChoice.connectRequest.asn.toString()).toBe("1.2.3");
            expect(decodedChoice.connectRequest.user_data.toBytes()).toEqual(roseInvoke().toBytes());
        }
    });

    test("round-trips a connect request with optional components absent", () => {
        const original = new ConnectRequest_PDU(
            ConnectRequest_PDU_version_version_1,
            sampleReference(undefined),
            undefined,
            undefined,
            ObjectIdentifier.fromParts([2, 1, 1]),
            roseInvoke(),
        );
        const decoded = _decode_ConnectRequest_PDU(_encode_ConnectRequest_PDU(original, $.BER));
        expect(decoded.reference.additionalReferenceInformation).toBeUndefined();
        expect(decoded.calling).toBeUndefined();
        expect(decoded.called).toBeUndefined();
        expect(decoded.asn.toString()).toBe("2.1.1");
        expect(decoded.version).toBe(0);
    });
});

describe("UserData-PDU", () => {
    test("matches the RFC 1085 Appendix B encoding", () => {
        const encoded = _encode_UserData_PDU(roseInvoke(), $.BER);
        expect(Array.from(encoded.toBytes())).toEqual([
            0xa5, 0x0a,
            0xa0, 0x08,
            0x02, 0x01, 0x01,
            0x02, 0x01, 0x05,
            0x30, 0x00,
        ]);
        const fromWire = new BERElement();
        fromWire.fromBytes(encoded.toBytes());
        expect(_decode_UserData_PDU(fromWire).toBytes()).toEqual(roseInvoke().toBytes());
    });
});

describe("Abort-PDU", () => {
    test("wraps an explicitly tagged SEQUENCE", () => {
        const original = new Abort_PDU(
            sampleReference(undefined),
            roseInvoke(),
            Abort_reason_unspecified,
        );
        const encoded = _encode_Abort_PDU(original, $.BER);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(4);
        expect(encoded.inner.tagClass).toBe(ASN1TagClass.universal);
        expect(encoded.inner.tagNumber).toBe(ASN1UniversalType.sequence);
        const decoded = _decode_Abort_PDU(encoded);
        expect(decoded.reason).toBe(Abort_reason_unspecified);
        expect(decoded.user_data?.toBytes()).toEqual(roseInvoke().toBytes());
        expect(decoded.reference?.callingSSUserReference).toEqual(new Uint8Array([0x61, 0x62]));
        expect(_encode_Abort_PDU(decoded, $.BER).toBytes()).toEqual(encoded.toBytes());
    });
});

describe("CL-UserData-PDU", () => {
    test("round-trips reference and explicitly tagged user data", () => {
        const original = new CL_UserData_PDU(sampleReference(undefined), roseInvoke());
        const encoded = _encode_CL_UserData_PDU(original, $.BER);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(6);
        expect(encoded.sequence).toHaveLength(2);
        expect(encoded.sequence[0].inner.tagNumber).toBe(ASN1UniversalType.sequence);
        expect(encoded.sequence[1].tagClass).toBe(ASN1TagClass.context);
        expect(encoded.sequence[1].tagNumber).toBe(0);
        expect(encoded.sequence[1].inner.toBytes()).toEqual(roseInvoke().toBytes());
        const decoded = _decode_CL_UserData_PDU(encoded);
        expect(decoded.reference.commonReference.getTime()).toBe(original.reference.commonReference.getTime());
        expect(decoded.user_data.toBytes()).toEqual(roseInvoke().toBytes());
        expect(_encode_CL_UserData_PDU(decoded, $.BER).toBytes()).toEqual(encoded.toBytes());
    });
});
