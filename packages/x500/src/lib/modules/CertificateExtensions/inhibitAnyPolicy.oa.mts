/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_inhibitAnyPolicy } from "../CertificateExtensions/id-ce-inhibitAnyPolicy.va.mjs";
import {
    SkipCerts,
    _decode_SkipCerts,
    _encode_SkipCerts,
} from "../CertificateExtensions/SkipCerts.ta.mjs";
/**
 * @summary inhibitAnyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * inhibitAnyPolicy EXTENSION ::= {
 *   SYNTAX         SkipCerts
 *   IDENTIFIED BY  id-ce-inhibitAnyPolicy }
 * ```
 *
 * @constant
 * @type {EXTENSION<SkipCerts>}
 * @implements {EXTENSION<SkipCerts>}
 */
export const inhibitAnyPolicy: EXTENSION<SkipCerts> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SkipCerts,
    },
    encoderFor: {
        "&ExtnType": _encode_SkipCerts,
    },
    "&id": id_ce_inhibitAnyPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
