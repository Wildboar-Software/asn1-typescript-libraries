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
import { certificate_request /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { CertificateRequest, _decode_CertificateRequest, _encode_CertificateRequest } from "../TSM/CertificateRequest.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary certificateRequest
 * @description
 *
 * `HANDSHAKE` object: `CertificateRequest` identified by
 * `certificate-request` (13). ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateRequest    HANDSHAKE ::= {
 * CertificateRequest     IDENTIFIED-BY certificate-request
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<CertificateRequest>}
 * @implements {HANDSHAKE<CertificateRequest>}
 */
export
const certificateRequest: HANDSHAKE<CertificateRequest> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_CertificateRequest,
    },
    encoderFor: {
        "&Type": _encode_CertificateRequest,
    },
    "&id": certificate_request /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
