/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";

/**
 * @summary calledName
 * @description
 *
 * Optional name of the alerting user (SS-CONP). The Terminating PINX may send
 * it to the Originating PINX in ALERTING when alerting starts (ECMA-164
 * §8.4.1.1; ECMA-163 §7.1.1). Unconfirmed. ROSE local code 1. No errors.
 *
 * Use `namePresentationAllowed`, `namePresentationRestricted`, or
 * `nameNotAvailable` as for `callingName`. The Originating PINX may deliver an
 * allowed name to the calling user. A restricted name yields only the
 * presentation indicator, unless the calling user can override the restriction
 * (ECMA-164 §8.4.2.1). If the invoke is absent, or the name is not available,
 * only "name not available" may be given.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * calledName OPERATION ::= {
 *     ARGUMENT NameArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 1
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NameArg>}
 * @implements {OPERATION<NameArg>}
 */
export
const calledName: OPERATION<NameArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NameArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_NameArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
