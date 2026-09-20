/* eslint-disable */
import { atsi_NotAllowed } from "../MAP-Errors/atsi-NotAllowed.oa.mjs";
import { bearerServiceNotProvisioned } from "../MAP-Errors/bearerServiceNotProvisioned.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { informationNotAvailable } from "../MAP-Errors/informationNotAvailable.oa.mjs";
import { ss_NotAvailable } from "../MAP-Errors/ss-NotAvailable.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { AnyTimeSubscriptionInterrogationArg, _decode_AnyTimeSubscriptionInterrogationArg, _encode_AnyTimeSubscriptionInterrogationArg } from "../MAP-MS-DataTypes/AnyTimeSubscriptionInterrogationArg.ta.mjs";
import { AnyTimeSubscriptionInterrogationRes, _decode_AnyTimeSubscriptionInterrogationRes, _encode_AnyTimeSubscriptionInterrogationRes } from "../MAP-MS-DataTypes/AnyTimeSubscriptionInterrogationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary anyTimeSubscriptionInterrogation
 * @description
 *
 * MAP_ANY_TIME_SUBSCRIPTION_INTERROGATION: gsmSCF requests subscription
 * information (e.g. call-forwarding SS data or CSI) from the HLR at any time.
 * In an IM CN, an IM-SSF may take the gsmSCF role. Typical path: gsmSCF→HLR.
 * Local opcode 62. Timer class `m` (15 s to 30 s). Distinctive error:
 * `atsi-NotAllowed`. (3GPP TS 29.002 V19.1.0 clauses 8.11.3.1, 17.1.2,
 * 17.3.2.47 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * anyTimeSubscriptionInterrogation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     AnyTimeSubscriptionInterrogationArg
 *     RESULT
 *     AnyTimeSubscriptionInterrogationRes
 *     ERRORS {
 *     atsi-NotAllowed |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     bearerServiceNotProvisioned |
 *     teleserviceNotProvisioned |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-NotAvailable |
 *     informationNotAvailable}
 *     CODE    local:62 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes>}
 * @implements {OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes>}
 */
export
const anyTimeSubscriptionInterrogation: OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AnyTimeSubscriptionInterrogationArg,
        "&ResultType": _decode_AnyTimeSubscriptionInterrogationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AnyTimeSubscriptionInterrogationArg,
        "&ResultType": _encode_AnyTimeSubscriptionInterrogationRes,
    },
    "&Errors": [ atsi_NotAllowed, dataMissing, unexpectedDataValue, unknownSubscriber, bearerServiceNotProvisioned, teleserviceNotProvisioned, callBarred, illegalSS_Operation, ss_NotAvailable, informationNotAvailable, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 62 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
