/* eslint-disable */
import { id_qcs_pkixQCSyntax_v1 } from "../PKIXqualified97/id-qcs-pkixQCSyntax-v1.va.mjs";
import { QC_STATEMENT } from "../PKIXqualified97/QC-STATEMENT.oca.mjs";
import {
    SemanticsInformation,
    _decode_SemanticsInformation,
    _encode_SemanticsInformation,
} from "../PKIXqualified97/SemanticsInformation.ta.mjs";
export { id_qcs_pkixQCSyntax_v1 } from "../PKIXqualified97/id-qcs-pkixQCSyntax-v1.va.mjs";
export { QC_STATEMENT } from "../PKIXqualified97/QC-STATEMENT.oca.mjs";
export {
    SemanticsInformation,
    _decode_SemanticsInformation,
    _encode_SemanticsInformation,
} from "../PKIXqualified97/SemanticsInformation.ta.mjs";

/* START_OF_SYMBOL_DEFINITION qcStatement_1 */
/**
 * @summary qcStatement_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * qcStatement-1 QC-STATEMENT ::= { SYNTAX SemanticsInformation
 *     IDENTIFIED BY id-qcs-pkixQCSyntax-v1 }
 * ```
 *
 * @constant
 * @type {QC_STATEMENT<SemanticsInformation>}
 * @implements {QC_STATEMENT<SemanticsInformation>}
 */
export const qcStatement_1: QC_STATEMENT<SemanticsInformation> = {
    class: "QC-STATEMENT",
    decoderFor: {
        "&Type": _decode_SemanticsInformation,
    },
    encoderFor: {
        "&Type": _encode_SemanticsInformation,
    },
    "&id": id_qcs_pkixQCSyntax_v1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION qcStatement_1 */

/* eslint-enable */
