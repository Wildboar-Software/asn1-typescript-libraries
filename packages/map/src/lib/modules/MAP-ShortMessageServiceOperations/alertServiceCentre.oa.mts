/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { AlertServiceCentreArg, _decode_AlertServiceCentreArg, _encode_AlertServiceCentreArg } from "../MAP-SM-DataTypes/AlertServiceCentreArg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary alertServiceCentre
 * @description
 *
 * MAP_ALERT_SERVICE_CENTRE: HLR notifies the IWMSC that a subscriber whose
 * MSISDN is in the Message Waiting Data file is active or has memory available.
 * Also MME (via IWF), SGSN or MSC (Deployment Option 2) to SMS-GMSC (possibly
 * via SMS Router) when the MS is available for MT SMS or has moved serving node
 * (3GPP TS 23.040). Confirmed (empty result). Typical path: HLR→IWMSC. Local
 * opcode 64. Timer class `s` (3 s to 10 s). (3GPP TS 29.002 V19.1.0 clauses
 * 12.5.1, 17.1.2, 17.3.2.24 and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertServiceCentre  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     AlertServiceCentreArg
 *     RETURN RESULT TRUE
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue}
 *     CODE    local:64 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AlertServiceCentreArg>}
 * @implements {OPERATION<AlertServiceCentreArg>}
 */
export
const alertServiceCentre: OPERATION<AlertServiceCentreArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AlertServiceCentreArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AlertServiceCentreArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 64 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
