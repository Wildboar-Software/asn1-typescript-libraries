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
import { BDCCertificateReferer, _decode_BDCCertificateReferer, _encode_BDCCertificateReferer } from "../TAI/BDCCertificateReferer.ta.mjs";
import { id_tai_ce_bDCCertificate } from "../TAI/id-tai-ce-bDCCertificate.va.mjs";
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary bDCCertificate
 * @description
 *
 * BPC extension indexing particular BDCs so the identity
 * verifier can evaluate the underlying biometric processing and
 * verify devices included with the BPC. Other indexed BDCs may
 * be used by the TAI application itself. ITU-T Rec. X.1089
 * (05/2008)
 * [§11.6](https://www.itu.int/rec/T-REC-X.1089-200805-I).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bDCCertificate EXTENSION ::= {
 *   SYNTAX         BDCCertificateReferer
 *   IDENTIFIED BY  id-tai-ce-bDCCertificate
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<BDCCertificateReferer>}
 * @implements {EXTENSION<BDCCertificateReferer>}
 */
export
const bDCCertificate: EXTENSION<BDCCertificateReferer> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BDCCertificateReferer,
    },
    encoderFor: {
        "&ExtnType": _encode_BDCCertificateReferer,
    },
    "&id": id_tai_ce_bDCCertificate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
