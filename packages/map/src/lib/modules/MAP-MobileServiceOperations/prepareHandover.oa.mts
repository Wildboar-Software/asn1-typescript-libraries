/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { noHandoverNumberAvailable } from "../MAP-Errors/noHandoverNumberAvailable.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { targetCellOutsideGroupCallArea } from "../MAP-Errors/targetCellOutsideGroupCallArea.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { PrepareHO_Arg, _decode_PrepareHO_Arg, _encode_PrepareHO_Arg } from "../MAP-MS-DataTypes/PrepareHO-Arg.ta.mjs";
import { PrepareHO_Res, _decode_PrepareHO_Res, _encode_PrepareHO_Res } from "../MAP-MS-DataTypes/PrepareHO-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary prepareHandover
 * @description
 *
 * MAP_PREPARE_HANDOVER: MSC-A asks MSC-B (E-interface) to prepare when a call
 * is to be handed over or relocated from MSC-A to MSC-B. Confirmed. Typical
 * path: MSC-A→MSC-B. Local opcode 68. Timer class `m` (15 s to 30 s).
 * Distinctive errors: `noHandoverNumberAvailable`,
 * `targetCellOutsideGroupCallArea`. (3GPP TS 29.002 V19.1.0 clauses 8.4.1.1,
 * 17.1.2, 17.3.2.12 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prepareHandover  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     PrepareHO-Arg
 *     RESULT
 *     PrepareHO-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     noHandoverNumberAvailable |
 *     targetCellOutsideGroupCallArea }
 *     CODE    local:68 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PrepareHO_Arg, PrepareHO_Res>}
 * @implements {OPERATION<PrepareHO_Arg, PrepareHO_Res>}
 */
export
const prepareHandover: OPERATION<PrepareHO_Arg, PrepareHO_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PrepareHO_Arg,
        "&ResultType": _decode_PrepareHO_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_PrepareHO_Arg,
        "&ResultType": _encode_PrepareHO_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, noHandoverNumberAvailable, targetCellOutsideGroupCallArea, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 68 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
