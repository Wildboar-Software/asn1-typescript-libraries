import * as $ from "@wildboar/asn1/functional";
import {
    ProtocolVersion,
    _encode_ProtocolVersion,
    _decode_ProtocolVersion,
} from "./lib/modules/TSM/ProtocolVersion.ta.mjs";
import {
    Handshake,
    _encode_Handshake,
    _decode_Handshake,
} from "./lib/modules/TSM/Handshake.ta.mjs";
import {
    HandshakeType_hello_request,
} from "./lib/modules/TSM/HandshakeType.ta.mjs";
import {
    HelloRequest,
    _encode_HelloRequest,
} from "./lib/modules/TSM/HelloRequest.ta.mjs";
import {
    SignedData,
    _encode_SignedData,
    _decode_SignedData,
} from "./lib/modules/X9-84-CMS/SignedData.ta.mjs";
import {
    CMSVersion_v84,
} from "./lib/modules/X9-84-CMS/CMSVersion.ta.mjs";
import {
    EncapsulatedContentInfo,
} from "./lib/modules/X9-84-CMS/EncapsulatedContentInfo.ta.mjs";
import { id_data } from "./lib/modules/X9-84-CMS/X9-84-Identifiers.va.mjs";
import { SignerInfo } from "./lib/modules/X9-84-CMS/SignerInfo.ta.mjs";
import { SignerIdentifier } from "./lib/modules/X9-84-CMS/SignerIdentifier.ta.mjs";
import { AlgorithmIdentifier } from "./lib/modules/X9-84-CMS/AlgorithmIdentifier.ta.mjs";
import { id_sha1, sha1WithRSAEncryption } from "./lib/modules/X9-84-CMS/X9-84-Identifiers.va.mjs";

describe("TSM ProtocolVersion", () => {
    test("round-trips a protocol version", () => {
        const original = new ProtocolVersion(3, 1);
        const el = _encode_ProtocolVersion(original, $.BER);
        const decoded = _decode_ProtocolVersion(el);
        expect(decoded).toEqual(original);
        expect(decoded.major).toBe(3);
        expect(decoded.minor).toBe(1);
    });
});

describe("TSM Handshake", () => {
    test("round-trips a hello-request handshake", () => {
        const hello: HelloRequest = null;
        const value = _encode_HelloRequest(hello, $.BER);
        const original = new Handshake(HandshakeType_hello_request, value);
        const el = _encode_Handshake(original, $.BER);
        const decoded = _decode_Handshake(el);
        expect(decoded.type_).toBe(HandshakeType_hello_request);
        expect(decoded.value.toBytes()).toEqual(original.value.toBytes());
    });
});

describe("X9-84-CMS SignedData", () => {
    test("round-trips SignedData", () => {
        const digestAlg = new AlgorithmIdentifier(id_sha1);
        const sigAlg = new AlgorithmIdentifier(sha1WithRSAEncryption);
        const sid = { certHash: { ietf: new Uint8Array(20) } } satisfies SignerIdentifier;
        const signer = new SignerInfo(
            CMSVersion_v84,
            sid,
            digestAlg,
            sigAlg,
            new Uint8Array([1, 2, 3])
        );
        const original = new SignedData(
            CMSVersion_v84,
            [digestAlg],
            new EncapsulatedContentInfo(id_data),
            undefined,
            undefined,
            [signer]
        );
        const el = _encode_SignedData(original, $.BER);
        const decoded = _decode_SignedData(el);
        expect(decoded.version).toBe(CMSVersion_v84);
        expect(decoded.digestAlgorithms).toHaveLength(1);
        expect(decoded.signerInfos).toHaveLength(1);
        expect(decoded.encapContentInfo.eContentType.toString()).toBe(id_data.toString());
    });
});
