/* eslint-disable */
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { illegalEquipment } from "../MAP-Errors/illegalEquipment.oa.mjs";
import { illegalSubscriber } from "../MAP-Errors/illegalSubscriber.oa.mjs";
import { positionMethodFailure } from "../MAP-Errors/positionMethodFailure.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unauthorizedLCSClient } from "../MAP-Errors/unauthorizedLCSClient.oa.mjs";
import { unauthorizedRequestingNetwork } from "../MAP-Errors/unauthorizedRequestingNetwork.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { ProvideSubscriberLocation_Arg, _decode_ProvideSubscriberLocation_Arg, _encode_ProvideSubscriberLocation_Arg } from "../MAP-LCS-DataTypes/ProvideSubscriberLocation-Arg.ta.mjs";
import { ProvideSubscriberLocation_Res, _decode_ProvideSubscriberLocation_Res, _encode_ProvideSubscriberLocation_Res } from "../MAP-LCS-DataTypes/ProvideSubscriberLocation-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary provideSubscriberLocation
 * @description
 *
 * MAP_PROVIDE_SUBSCRIBER_LOCATION: GMLC requests the location of a target MS
 * from the visited MSC or SGSN at any time. Confirmed. Typical path: GMLC→MSC
 * or GMLC→SGSN. Local opcode 83. Timer class `ml` (1 min to 10 min).
 * Distinctive errors: `unauthorizedLCSClient`, `positionMethodFailure`. (3GPP
 * TS 29.002 V19.1.0 clauses 13A.2.1, 17.1.2, 17.3.2.40 and 17.6.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideSubscriberLocation  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     ProvideSubscriberLocation-Arg
 *     RESULT
 *     ProvideSubscriberLocation-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unidentifiedSubscriber |
 *     illegalSubscriber |
 *     illegalEquipment |
 *     absentSubscriber |
 *     unauthorizedRequestingNetwork |
 *     unauthorizedLCSClient |
 *     positionMethodFailure }
 *     CODE    local:83 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProvideSubscriberLocation_Arg, ProvideSubscriberLocation_Res>}
 * @implements {OPERATION<ProvideSubscriberLocation_Arg, ProvideSubscriberLocation_Res>}
 */
export
const provideSubscriberLocation: OPERATION<ProvideSubscriberLocation_Arg, ProvideSubscriberLocation_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProvideSubscriberLocation_Arg,
        "&ResultType": _decode_ProvideSubscriberLocation_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProvideSubscriberLocation_Arg,
        "&ResultType": _encode_ProvideSubscriberLocation_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unidentifiedSubscriber, illegalSubscriber, illegalEquipment, absentSubscriber, unauthorizedRequestingNetwork, unauthorizedLCSClient, positionMethodFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 83 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
