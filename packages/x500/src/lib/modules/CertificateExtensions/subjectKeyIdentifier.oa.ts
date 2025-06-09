/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_subjectKeyIdentifier } from "../CertificateExtensions/id-ce-subjectKeyIdentifier.va.js";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_subjectKeyIdentifier } from "../CertificateExtensions/id-ce-subjectKeyIdentifier.va.js";
export {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta.js";

/* START_OF_SYMBOL_DEFINITION subjectKeyIdentifier */
/**
 * @summary subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectKeyIdentifier EXTENSION ::= {
 *   SYNTAX         SubjectKeyIdentifier
 *   IDENTIFIED BY  id-ce-subjectKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<SubjectKeyIdentifier>}
 * @implements {EXTENSION<SubjectKeyIdentifier>}
 */
export const subjectKeyIdentifier: EXTENSION<SubjectKeyIdentifier> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectKeyIdentifier,
    },
    "&id": id_ce_subjectKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectKeyIdentifier */

/* eslint-enable */
