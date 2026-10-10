/* eslint-disable */
import { InformServiceCentreArg, _decode_InformServiceCentreArg, _encode_InformServiceCentreArg } from "../MAP-SM-DataTypes/InformServiceCentreArg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary informServiceCentre
 * @description
 *
 * MAP_INFORM_SERVICE_CENTRE: HLR informs the GMSC (transiting an SMS Router, if
 * present) which MSISDN is stored in the Message Waiting Data file (included if
 * it differs from the one in MAP-SEND-ROUTING-INFO-FOR-SM), plus
 * MCEF/MNRF/MNRG/MNR5G/MNR5GN3G status and SC-address presence in the MWD list,
 * and stored MNRR values. Non-confirmed (argument only). Typical path:
 * HLR→GMSC. Local opcode 63. Timer class `s` (3 s to 10 s). (3GPP TS 29.002
 * V19.1.0 clauses 12.6.1, 17.1.2, 17.3.2.21 and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * informServiceCentre  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     InformServiceCentreArg
 *     CODE    local:63 }
 * ```
 * 
 * @constant
 * @type {OPERATION<InformServiceCentreArg>}
 * @implements {OPERATION<InformServiceCentreArg>}
 */
export
const informServiceCentre: OPERATION<InformServiceCentreArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InformServiceCentreArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InformServiceCentreArg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 63 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
