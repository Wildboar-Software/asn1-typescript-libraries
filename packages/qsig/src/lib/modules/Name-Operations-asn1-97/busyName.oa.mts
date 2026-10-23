/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";

/**
 * @summary busyName
 * @description
 *
 * Optional name of a called user who cannot be reached because of busy
 * (SS-CONP). The Terminating PINX may send it to the Originating PINX in the
 * message that indicates the busy condition (ECMA-164 §8.4.1.1; ECMA-163
 * §7.1.1). Unconfirmed. ROSE local code 3. No errors. §8.4.1.1 does not name
 * that message. The receiving procedure, for `nameNotAvailable` only, also
 * refers to DISCONNECT (§8.4.2.1).
 *
 * Presentation allowed, restricted, or not available is chosen as for
 * `connectedName`. Delivery to the calling user is optional (ECMA-164
 * §8.4.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * busyName OPERATION ::= {
 *     ARGUMENT NameArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 3
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NameArg>}
 * @implements {OPERATION<NameArg>}
 */
export
const busyName: OPERATION<NameArg> = {
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
    "&operationCode": { local: 3 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
