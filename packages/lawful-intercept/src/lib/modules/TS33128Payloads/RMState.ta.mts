/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RMState {
    registered = 1,
    deregistered = 2,
}

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RMState = _enum_for_RMState;

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RMState = _enum_for_RMState;

/**
 * @summary RMState_registered
 * @constant
 * @type {number}
 */
export
const RMState_registered: RMState = RMState.registered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registered
 * @constant
 * @type {number}
 */
export
const registered: RMState = RMState.registered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RMState_deregistered
 * @constant
 * @type {number}
 */
export
const RMState_deregistered: RMState = RMState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered: RMState = RMState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RMState: $.ASN1Decoder<RMState> = $._decodeEnumerated;
export const _encode_RMState: $.ASN1Encoder<RMState> = $._encodeEnumerated;


/* eslint-enable */
