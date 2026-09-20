/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { subsequentHandoverFailure } from "../MAP-Errors/subsequentHandoverFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownMSC } from "../MAP-Errors/unknownMSC.oa.mjs";
import { PrepareSubsequentHO_Arg, _decode_PrepareSubsequentHO_Arg, _encode_PrepareSubsequentHO_Arg } from "../MAP-MS-DataTypes/PrepareSubsequentHO-Arg.ta.mjs";
import { PrepareSubsequentHO_Res, _decode_PrepareSubsequentHO_Res, _encode_PrepareSubsequentHO_Res } from "../MAP-MS-DataTypes/PrepareSubsequentHO-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary prepareSubsequentHandover
 * @description
 *
 * MAP_PREPARE_SUBSEQUENT_HANDOVER: MSC-B informs MSC-A (E-interface) that
 * handover or relocation to MSC-A or a third MSC (MSC-B') is required.
 * Confirmed. Typical path: MSC-B→MSC-A. Local opcode 69. Timer class `m` (15 s
 * to 30 s). Distinctive errors: `unknownMSC`, `subsequentHandoverFailure`.
 * (3GPP TS 29.002 V19.1.0 clauses 8.4.5.1, 17.1.2, 17.3.2.12 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prepareSubsequentHandover  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     PrepareSubsequentHO-Arg
 *     RESULT
 *     PrepareSubsequentHO-Res
 *     ERRORS {
 *     unexpectedDataValue |
 *     dataMissing |
 *     unknownMSC |
 *     subsequentHandoverFailure}
 *     CODE    local:69 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PrepareSubsequentHO_Arg, PrepareSubsequentHO_Res>}
 * @implements {OPERATION<PrepareSubsequentHO_Arg, PrepareSubsequentHO_Res>}
 */
export
const prepareSubsequentHandover: OPERATION<PrepareSubsequentHO_Arg, PrepareSubsequentHO_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PrepareSubsequentHO_Arg,
        "&ResultType": _decode_PrepareSubsequentHO_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_PrepareSubsequentHO_Arg,
        "&ResultType": _encode_PrepareSubsequentHO_Res,
    },
    "&Errors": [ unexpectedDataValue, dataMissing, unknownMSC, subsequentHandoverFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 69 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
