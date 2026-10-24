/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";

/**
 * @summary ccSuspend
 * @description
 *
 * Postpones SS-CC because User A is busy (ECMA-186 §6.5.2.1.7,
 * §6.5.2.1.8, §6.5.2.1.9). The Originating PINX sends it. No result.
 * Local code 32.
 *
 * Without path reservation: FACILITY on a retained signalling
 * connection, or CONNECT when the connection-release method was in
 * use. That CONNECT switches the request to connection retention.
 * Before a path exists, the invoke is optional, in RELEASE or
 * FACILITY. After a path has been reserved, it is in the DISCONNECT
 * that releases the path.
 *
 * The Terminating PINX enters CC-Suspended-User-B. If the invoke
 * arrives in DISCONNECT during CC-Path-Complete, it releases the
 * path and returns to CC-Await-Call-Completion (§6.5.3.1.7). §6.5
 * does not say whether the argument is `fullArg` or `extArg`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccSuspend OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 32
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension>}
 * @implements {OPERATION<CcExtension>}
 */
export
const ccSuspend: OPERATION<CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 32 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
