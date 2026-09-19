/* eslint-disable */
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary sendIMSI
 * @description
 *
 * MAP_SEND_IMSI: VLR fetches the IMSI from the HLR for an O&M procedure in the
 * VPLMN when only the MSISDN is known. Confirmed. Typical path: VLR→HLR. Local
 * opcode 58. Timer class `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses
 * 9.2.1.1, 17.1.2, 17.3.2.13 and 17.6.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendIMSI  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ISDN-AddressString
 *     RESULT
 *     IMSI
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:58 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ISDN_AddressString, IMSI>}
 * @implements {OPERATION<ISDN_AddressString, IMSI>}
 */
export
const sendIMSI: OPERATION<ISDN_AddressString, IMSI> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ISDN_AddressString,
        "&ResultType": _decode_IMSI,
    },
    encoderFor: {
        "&ArgumentType": _encode_ISDN_AddressString,
        "&ResultType": _encode_IMSI,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 58 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
