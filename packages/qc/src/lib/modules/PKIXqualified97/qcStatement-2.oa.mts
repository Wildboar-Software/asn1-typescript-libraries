/* eslint-disable */
import { id_qcs_pkixQCSyntax_v2 } from "../PKIXqualified97/id-qcs-pkixQCSyntax-v2.va.mjs";
import { type QC_STATEMENT } from "../PKIXqualified97/QC-STATEMENT.oca.mjs";
import {
    SemanticsInformation,
    _decode_SemanticsInformation,
    _encode_SemanticsInformation,
} from "../PKIXqualified97/SemanticsInformation.ta.mjs";

/**
 * @summary qcStatement_2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * qcStatement-2 QC-STATEMENT ::= { SYNTAX SemanticsInformation
 *     IDENTIFIED BY id-qcs-pkixQCSyntax-v2 }
 * ```
 *
 * @constant
 * @type {QC_STATEMENT<SemanticsInformation>}
 * @implements {QC_STATEMENT<SemanticsInformation>}
 */
export const qcStatement_2: QC_STATEMENT<SemanticsInformation> = {
    class: "QC-STATEMENT",
    decoderFor: {
        "&Type": _decode_SemanticsInformation,
    },
    encoderFor: {
        "&Type": _encode_SemanticsInformation,
    },
    "&id": id_qcs_pkixQCSyntax_v2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
