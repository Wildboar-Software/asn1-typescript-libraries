/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_pe_subjectInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-subjectInfoAccess.va.js";
import {
    SubjectInfoAccessSyntax,
    _decode_SubjectInfoAccessSyntax,
    _encode_SubjectInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/SubjectInfoAccessSyntax.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_pe_subjectInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-subjectInfoAccess.va.js";
export {
    SubjectInfoAccessSyntax,
    _decode_SubjectInfoAccessSyntax,
    _encode_SubjectInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/SubjectInfoAccessSyntax.ta.js";

/* START_OF_SYMBOL_DEFINITION subjectInfoAccess */
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
/* END_OF_SYMBOL_DEFINITION subjectInfoAccess */

/* eslint-enable */
