/* eslint-disable */
import { ProvideRoamingNumberArg, _decode_ProvideRoamingNumberArg, _encode_ProvideRoamingNumberArg } from "../MAP-CH-DataTypes/ProvideRoamingNumberArg.ta.mjs";
import { ProvideRoamingNumberRes, _decode_ProvideRoamingNumberRes, _encode_ProvideRoamingNumberRes } from "../MAP-CH-DataTypes/ProvideRoamingNumberRes.ta.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { noRoamingNumberAvailable } from "../MAP-Errors/noRoamingNumberAvailable.oa.mjs";
import { or_NotAllowed } from "../MAP-Errors/or-NotAllowed.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary provideRoamingNumber
 * @description
 *
 * MAP_PROVIDE_ROAMING_NUMBER: HLR requests a roaming number from the VLR so the
 * GMSC can route an incoming call to the called MS. Also used old VLR→new VLR
 * during MT Roaming Forwarding. Confirmed. Typical path: HLR→VLR. Local opcode
 * 4. Timer class `m` (15 s to 30 s); set to the upper limit of the range if the
 * HLR supports pre-paging. Distinctive error: `noRoamingNumberAvailable`. (3GPP
 * TS 29.002 V19.1.0 clauses 10.2.1, 17.1.2, 17.3.2.4 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideRoamingNumber  OPERATION ::= {    --Timer m
 * -- The timer is set to the upper limit of the range if the HLR supports pre-paging.
 *     ARGUMENT
 *     ProvideRoamingNumberArg
 *     RESULT
 *     ProvideRoamingNumberRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     or-NotAllowed |
 *     absentSubscriber |
 *     noRoamingNumberAvailable}
 *     CODE    local:4 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes>}
 * @implements {OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes>}
 */
export
const provideRoamingNumber: OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProvideRoamingNumberArg,
        "&ResultType": _decode_ProvideRoamingNumberRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProvideRoamingNumberArg,
        "&ResultType": _encode_ProvideRoamingNumberRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, or_NotAllowed, absentSubscriber, noRoamingNumberAvailable, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 4 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
