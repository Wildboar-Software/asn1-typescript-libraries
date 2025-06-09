/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_subjectAltPublicKeyInfo } from "../CertificateExtensions/id-ce-subjectAltPublicKeyInfo.va.js";
import {
    SubjectAltPublicKeyInfo,
    _decode_SubjectAltPublicKeyInfo,
    _encode_SubjectAltPublicKeyInfo,
} from "../CertificateExtensions/SubjectAltPublicKeyInfo.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_subjectAltPublicKeyInfo } from "../CertificateExtensions/id-ce-subjectAltPublicKeyInfo.va.js";
export {
    SubjectAltPublicKeyInfo,
    _decode_SubjectAltPublicKeyInfo,
    _encode_SubjectAltPublicKeyInfo,
} from "../CertificateExtensions/SubjectAltPublicKeyInfo.ta.js";

/* START_OF_SYMBOL_DEFINITION subjectAltPublicKeyInfo */
/**
 * @summary subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectAltPublicKeyInfo EXTENSION ::= {
 *   SYNTAX           SubjectAltPublicKeyInfo
 *   IDENTIFIED BY    id-ce-subjectAltPublicKeyInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION<SubjectAltPublicKeyInfo>}
 * @implements {EXTENSION<SubjectAltPublicKeyInfo>}
 */
export const subjectAltPublicKeyInfo: EXTENSION<SubjectAltPublicKeyInfo> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectAltPublicKeyInfo,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectAltPublicKeyInfo,
    },
    "&id": id_ce_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectAltPublicKeyInfo */

/* eslint-enable */
