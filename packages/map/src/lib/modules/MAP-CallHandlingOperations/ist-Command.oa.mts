/* eslint-disable */
import { IST_CommandArg, _decode_IST_CommandArg, _encode_IST_CommandArg } from "../MAP-CH-DataTypes/IST-CommandArg.ta.mjs";
import { IST_CommandRes, _decode_IST_CommandRes, _encode_IST_CommandRes } from "../MAP-CH-DataTypes/IST-CommandRes.ta.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary ist_Command
 * @description
 *
 * MAP_IST_COMMAND: HLR instructs the VMSC or GMSC to terminate ongoing call
 * activities for a specific subscriber. Confirmed. Typical path: HLR→VMSC or
 * HLR→GMSC. Local opcode 88. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 10.14.1, 17.1.2, 17.3.2.45 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ist-Command  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     IST-CommandArg
 *     RESULT
 *     IST-CommandRes
 *     -- optional
 *     ERRORS {
 *     unexpectedDataValue |
 *     resourceLimitation |
 *     unknownSubscriber |
 *     systemFailure |
 *     facilityNotSupported}
 *     CODE    local:88 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IST_CommandArg, IST_CommandRes>}
 * @implements {OPERATION<IST_CommandArg, IST_CommandRes>}
 */
export
const ist_Command: OPERATION<IST_CommandArg, IST_CommandRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IST_CommandArg,
        "&ResultType": _decode_IST_CommandRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_IST_CommandArg,
        "&ResultType": _encode_IST_CommandRes,
    },
    "&Errors": [ unexpectedDataValue, resourceLimitation, unknownSubscriber, systemFailure, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 88 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
