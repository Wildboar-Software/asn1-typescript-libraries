/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { NameArg, _decode_NameArg, _encode_NameArg } from "../Name-Operations-asn1-97/NameArg.ta.mjs";

/**
 * @summary callingName
 * @description
 *
 * Calling name, offered to the called user (SS-CNIP). The Originating PINX
 * sends it to the Terminating PINX (ECMA-164 §7.4.1.1; ECMA-163 §6.1.1).
 * Unconfirmed. ROSE local code 0. No errors.
 *
 * If the name is available it shall be sent in SETUP: `namePresentationAllowed`
 * when presentation is allowed, and `namePresentationRestricted` when it is
 * restricted. If the name is not available, the invoke may be sent with
 * `nameNotAvailable`. The Terminating PINX delivers the name only when
 * presentation is allowed, unless the called user can override restriction;
 * otherwise it delivers only the presentation indicator (ECMA-164 §7.4.2.1).
 *
 * On interworking, a restricted indication without a name uses
 * `namePresentationRestrictedNull` (ECMA-164 §7.5.1). A name longer than 50
 * characters is truncated. A public network may deliver the name after SETUP;
 * the Incoming Gateway PINX may then send this invoke in a FACILITY after the
 * first backward end-to-end message.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callingName OPERATION ::= {
 *     ARGUMENT NameArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 0
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NameArg>}
 * @implements {OPERATION<NameArg>}
 */
export
const callingName: OPERATION<NameArg> = {
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
    "&operationCode": { local: 0 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
