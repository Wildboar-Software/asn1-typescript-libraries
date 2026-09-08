/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { certificate_verify /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { CertificateVerify, _decode_CertificateVerify, _encode_CertificateVerify } from "../TSM/CertificateVerify.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary certificateVerify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateVerify    HANDSHAKE ::= {
 * CertificateVerify    IDENTIFIED-BY certificate-verify
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<CertificateVerify>}
 * @implements {HANDSHAKE<CertificateVerify>}
 */
export
const certificateVerify: HANDSHAKE<CertificateVerify> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_CertificateVerify,
    },
    encoderFor: {
        "&Type": _encode_CertificateVerify,
    },
    "&id": certificate_verify /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
