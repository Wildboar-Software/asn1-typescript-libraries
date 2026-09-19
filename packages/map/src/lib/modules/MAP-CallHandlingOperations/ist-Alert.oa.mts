/* eslint-disable */
import { IST_AlertArg, _decode_IST_AlertArg, _encode_IST_AlertArg } from "../MAP-CH-DataTypes/IST-AlertArg.ta.mjs";
import { IST_AlertRes, _decode_IST_AlertRes, _encode_IST_AlertRes } from "../MAP-CH-DataTypes/IST-AlertRes.ta.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary ist_Alert
 * @description
 *
 * MAP_IST_ALERT: VMSC or GMSC reports to the HLR that the IST timer running for
 * a call for the subscriber has expired. Confirmed. Typical path: VMSC→HLR or
 * GMSC→HLR. Local opcode 87. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 10.13.1, 17.1.2, 17.3.2.44 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ist-Alert  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     IST-AlertArg
 *     RESULT
 *     IST-AlertRes
 *     -- optional
 *     ERRORS {
 *     unexpectedDataValue |
 *     resourceLimitation |
 *     unknownSubscriber |
 *     systemFailure |
 *     facilityNotSupported}
 *     CODE    local:87 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IST_AlertArg, IST_AlertRes>}
 * @implements {OPERATION<IST_AlertArg, IST_AlertRes>}
 */
export
const ist_Alert: OPERATION<IST_AlertArg, IST_AlertRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IST_AlertArg,
        "&ResultType": _decode_IST_AlertRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_IST_AlertArg,
        "&ResultType": _encode_IST_AlertRes,
    },
    "&Errors": [ unexpectedDataValue, resourceLimitation, unknownSubscriber, systemFailure, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 87 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
