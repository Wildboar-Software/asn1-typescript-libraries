/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    ExpiredCertsOnCRL,
    _decode_ExpiredCertsOnCRL,
    _encode_ExpiredCertsOnCRL,
} from "../CertificateExtensions/ExpiredCertsOnCRL.ta.mjs";
import { id_ce_expiredCertsOnCRL } from "../CertificateExtensions/id-ce-expiredCertsOnCRL.va.mjs";
/**
 * @summary expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * expiredCertsOnCRL EXTENSION ::= {
 *   SYNTAX         ExpiredCertsOnCRL
 *   IDENTIFIED BY  id-ce-expiredCertsOnCRL }
 * ```
 *
 * @constant
 * @type {EXTENSION<ExpiredCertsOnCRL>}
 * @implements {EXTENSION<ExpiredCertsOnCRL>}
 */
export const expiredCertsOnCRL: EXTENSION<ExpiredCertsOnCRL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ExpiredCertsOnCRL,
    },
    encoderFor: {
        "&ExtnType": _encode_ExpiredCertsOnCRL,
    },
    "&id": id_ce_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
