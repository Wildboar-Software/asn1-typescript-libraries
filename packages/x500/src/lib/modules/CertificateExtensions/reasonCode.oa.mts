/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
} from "../CertificateExtensions/CRLReason.ta.mjs";
import { id_ce_reasonCode } from "../CertificateExtensions/id-ce-reasonCode.va.mjs";
/**
 * @summary reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reasonCode EXTENSION ::= {
 *   SYNTAX         CRLReason
 *   IDENTIFIED BY  id-ce-reasonCode }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLReason>}
 * @implements {EXTENSION<CRLReason>}
 */
export const reasonCode: EXTENSION<CRLReason> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLReason,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLReason,
    },
    "&id": id_ce_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
