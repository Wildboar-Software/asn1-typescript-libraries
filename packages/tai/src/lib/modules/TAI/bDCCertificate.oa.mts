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
import { EXTENSION } from "@wildboar/x500/AuthenticationFramework";
/**
 * @summary bDCCertificate
 * @description
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
