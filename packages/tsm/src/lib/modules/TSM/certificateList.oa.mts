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
import { certificate_list /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../TSM/CertificateList.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary certificateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateList        HANDSHAKE ::= {
 * CertificateList    IDENTIFIED-BY certificate-list
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<CertificateList>}
 * @implements {HANDSHAKE<CertificateList>}
 */
export
const certificateList: HANDSHAKE<CertificateList> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&id": certificate_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
