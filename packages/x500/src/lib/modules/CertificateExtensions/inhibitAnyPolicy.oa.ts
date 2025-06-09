/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_inhibitAnyPolicy } from "../CertificateExtensions/id-ce-inhibitAnyPolicy.va.js";
import {
    SkipCerts,
    _decode_SkipCerts,
    _encode_SkipCerts,
} from "../CertificateExtensions/SkipCerts.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_inhibitAnyPolicy } from "../CertificateExtensions/id-ce-inhibitAnyPolicy.va.js";
export {
    SkipCerts,
    _decode_SkipCerts,
    _encode_SkipCerts,
} from "../CertificateExtensions/SkipCerts.ta.js";

/* START_OF_SYMBOL_DEFINITION inhibitAnyPolicy */
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
/* END_OF_SYMBOL_DEFINITION inhibitAnyPolicy */

/* eslint-enable */
