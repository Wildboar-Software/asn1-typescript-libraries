/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RMState
 * @description
 * 
 * The RMState indicates the registration management state of the UE. RMState is
 * derived from the RmState type defined in TS 29.518 [22] clause 6.2.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * Indicates the UE in RM-REGISTERED state.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.67.
     */
    registered = 1,
    /**
     * @description
     *
     * Indicates the UE in RM-DEREGISTERED state.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.67.
     */
    deregistered = 2,
}

/**
 * @summary RMState
 * @description
 * 
 * The RMState indicates the registration management state of the UE. RMState is
 * derived from the RmState type defined in TS 29.518 [22] clause 6.2.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The RMState indicates the registration management state of the UE. RMState is
 * derived from the RmState type defined in TS 29.518 [22] clause 6.2.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * Indicates the UE in RM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 *
 * @constant
 * @type {number}
 */
export
const RMState_registered = RMState.registered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registered
 * @description
 *
 * Indicates the UE in RM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 *
 * @constant
 * @type {number}
 */
export
const registered = RMState.registered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RMState_deregistered
 * @description
 *
 * Indicates the UE in RM-DEREGISTERED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 *
 * @constant
 * @type {number}
 */
export
const RMState_deregistered = RMState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @description
 *
 * Indicates the UE in RM-DEREGISTERED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.67.
 *
 * @constant
 * @type {number}
 */
export
const deregistered = RMState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RMState: $.ASN1Decoder<RMState> = $._decodeEnumerated;
export const _encode_RMState: $.ASN1Encoder<RMState> = $._encodeEnumerated;


/* eslint-enable */
