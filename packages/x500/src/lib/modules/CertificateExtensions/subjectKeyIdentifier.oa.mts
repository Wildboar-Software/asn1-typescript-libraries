/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_subjectKeyIdentifier } from "../CertificateExtensions/id-ce-subjectKeyIdentifier.va.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta.mjs";
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

/* eslint-enable */
