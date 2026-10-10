/* eslint-disable */
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unauthorizedRequestingNetwork } from "../MAP-Errors/unauthorizedRequestingNetwork.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { RoutingInfoForLCS_Arg, _decode_RoutingInfoForLCS_Arg, _encode_RoutingInfoForLCS_Arg } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Arg.ta.mjs";
import { RoutingInfoForLCS_Res, _decode_RoutingInfoForLCS_Res, _encode_RoutingInfoForLCS_Res } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary sendRoutingInfoForLCS
 * @description
 *
 * MAP_SEND_ROUTING_INFO_FOR_LCS: GMLC retrieves routing information from the
 * HLR to route a location-service request to the serving VMSC, SGSN, MME or
 * 3GPP AAA server. Confirmed. Typical path: GMLC→HLR. Local opcode 85. Timer
 * class `m` (15 s to 30 s). Distinctive error: `unauthorizedRequestingNetwork`.
 * (3GPP TS 29.002 V19.1.0 clauses 13A.1.1, 17.1.2, 17.3.2.39 and 17.6.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendRoutingInfoForLCS  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RoutingInfoForLCS-Arg
 *     RESULT
 *     RoutingInfoForLCS-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unknownSubscriber |
 *     absentSubscriber |
 *     unauthorizedRequestingNetwork }
 *     CODE    local:85 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res>}
 * @implements {OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res>}
 */
export
const sendRoutingInfoForLCS: OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RoutingInfoForLCS_Arg,
        "&ResultType": _decode_RoutingInfoForLCS_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_RoutingInfoForLCS_Arg,
        "&ResultType": _encode_RoutingInfoForLCS_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unknownSubscriber, absentSubscriber, unauthorizedRequestingNetwork, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 85 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
