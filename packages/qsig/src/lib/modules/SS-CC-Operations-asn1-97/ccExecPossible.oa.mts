/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type CcOptionalArg, _decode_CcOptionalArg, _encode_CcOptionalArg } from "../SS-CC-Operations-asn1-97/CcOptionalArg.ta.mjs";

/**
 * @summary ccExecPossible
 * @description
 *
 * User B is not busy (ECMA-186 §6.5.3.1.4). The Terminating PINX
 * sends this to the Originating PINX and enters
 * CC-Await-Call-Completion. For SS-CCNR that is after a period of
 * activity following invocation (§6.5.3.1.2). No result. Local code
 * 29.
 *
 * On a retained signalling connection the argument is `extArg` in
 * FACILITY, and the Originating PINX ignores any basic call
 * information (§6.5.2.1.4). After the connection was released, the
 * argument is `fullArg` in a new SETUP and is matched against the
 * stored request. Subaddresses and High or Low layer compatibility
 * may be absent from that comparison.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccExecPossible OPERATION ::= {
 *     ARGUMENT CcOptionalArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 29
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcOptionalArg>}
 * @implements {OPERATION<CcOptionalArg>}
 */
export
const ccExecPossible: OPERATION<CcOptionalArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcOptionalArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcOptionalArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 29 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
