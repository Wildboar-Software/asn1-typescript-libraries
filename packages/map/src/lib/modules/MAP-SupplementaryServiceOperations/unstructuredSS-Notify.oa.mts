/* eslint-disable */
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { illegalEquipment } from "../MAP-Errors/illegalEquipment.oa.mjs";
import { illegalSubscriber } from "../MAP-Errors/illegalSubscriber.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownAlphabet } from "../MAP-Errors/unknownAlphabet.oa.mjs";
import { ussd_Busy } from "../MAP-Errors/ussd-Busy.oa.mjs";
import { USSD_Arg, _decode_USSD_Arg, _encode_USSD_Arg } from "../MAP-SS-DataTypes/USSD-Arg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary unstructuredSS_Notify
 * @description
 *
 * MAP_UNSTRUCTURED_SS_NOTIFY: invoking entity requires a notification to be
 * sent to the mobile user for unstructured SS handling. Used gsmSCF↔HLR,
 * HLR↔VLR and VLR↔MSC. Confirmed (result empty; errors present). Local opcode
 * 61. Timer class `ml` (1 min to 10 min). Distinctive errors:
 * `unknownAlphabet`, `ussd-Busy`. (3GPP TS 29.002 V19.1.0 clauses 11.11.1,
 * 17.1.2, 17.3.2.20 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unstructuredSS-Notify  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     USSD-Arg
 *     RETURN RESULT TRUE
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     absentSubscriber |
 *     illegalSubscriber |
 *     illegalEquipment |
 *     unknownAlphabet |
 *     ussd-Busy}
 *     CODE    local:61 }
 * ```
 * 
 * @constant
 * @type {OPERATION<USSD_Arg>}
 * @implements {OPERATION<USSD_Arg>}
 */
export
const unstructuredSS_Notify: OPERATION<USSD_Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_USSD_Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_USSD_Arg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, absentSubscriber, illegalSubscriber, illegalEquipment, unknownAlphabet, ussd_Busy, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 61 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
