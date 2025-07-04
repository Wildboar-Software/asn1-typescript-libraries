/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    CRLDistPointsSyntax,
    _decode_CRLDistPointsSyntax,
    _encode_CRLDistPointsSyntax,
} from "../CertificateExtensions/CRLDistPointsSyntax.ta.mjs";
import { id_ce_freshestCRL } from "../CertificateExtensions/id-ce-freshestCRL.va.mjs";
/**
 * @summary freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * freshestCRL EXTENSION ::= {
 *   SYNTAX         CRLDistPointsSyntax
 *   IDENTIFIED BY  id-ce-freshestCRL }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLDistPointsSyntax>}
 * @implements {EXTENSION<CRLDistPointsSyntax>}
 */
export const freshestCRL: EXTENSION<CRLDistPointsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLDistPointsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLDistPointsSyntax,
    },
    "&id": id_ce_freshestCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
