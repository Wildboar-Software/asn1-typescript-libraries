/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";

/**
 * @summary connectedName
 * @description
 *
 * Name of the user who answers (SS-CONP). The Terminating PINX sends it to the
 * Originating PINX in CONNECT (ECMA-164 §8.4.1.1; ECMA-163 §7.1.1).
 * Unconfirmed. ROSE local code 2. No errors. It shall be sent when the name is
 * available, whether presentation is allowed or restricted, and may be sent
 * with `nameNotAvailable` when the name is not available.
 *
 * The Originating PINX delivers an allowed name, including the presentation
 * indicator, to the calling user if that user is able and authorized. A
 * restricted name yields only the presentation indicator unless the calling
 * user can override the restriction. If the invoke is missing, or the name is
 * not available, the indicator is "name not available" (ECMA-164 §8.4.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * connectedName OPERATION ::= {
 *     ARGUMENT NameArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 2
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NameArg>}
 * @implements {OPERATION<NameArg>}
 */
export
const connectedName: OPERATION<NameArg> = {
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
    "&operationCode": { local: 2 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
