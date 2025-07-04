/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_pe_subjectInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-subjectInfoAccess.va.mjs";
import {
    SubjectInfoAccessSyntax,
    _decode_SubjectInfoAccessSyntax,
    _encode_SubjectInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/SubjectInfoAccessSyntax.ta.mjs";
/**
 * @summary subjectInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectInfoAccess EXTENSION ::= {
 *   SYNTAX         SubjectInfoAccessSyntax
 *   IDENTIFIED BY  id-pe-subjectInfoAccess }
 * ```
 *
 * @constant
 * @type {EXTENSION<SubjectInfoAccessSyntax>}
 * @implements {EXTENSION<SubjectInfoAccessSyntax>}
 */
export const subjectInfoAccess: EXTENSION<SubjectInfoAccessSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectInfoAccessSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectInfoAccessSyntax,
    },
    "&id": id_pe_subjectInfoAccess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
