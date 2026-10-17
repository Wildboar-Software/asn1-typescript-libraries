/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CMState
 * @description
 * 
 * The CMState indicates the connection management state of the UE. CMState is
 * derived from the CmState type defined in TS 29.518 [22] clause 6.2.6.3.10.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CMState {
    /**
     * @description
     *
     * Indicates the UE is in CM-IDLE state.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.68.
     */
    idle = 1,
    /**
     * @description
     *
     * Indicates the UE is in CM-CONNECTED state.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.68.
     */
    connected = 2,
}

/**
 * @summary CMState
 * @description
 * 
 * The CMState indicates the connection management state of the UE. CMState is
 * derived from the CmState type defined in TS 29.518 [22] clause 6.2.6.3.10.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CMState = _enum_for_CMState;

/**
 * @summary CMState
 * @description
 * 
 * The CMState indicates the connection management state of the UE. CMState is
 * derived from the CmState type defined in TS 29.518 [22] clause 6.2.6.3.10.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CMState = _enum_for_CMState;

/**
 * @summary CMState_idle
 * @description
 *
 * Indicates the UE is in CM-IDLE state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 *
 * @constant
 * @type {number}
 */
export
const CMState_idle: CMState = CMState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @description
 *
 * Indicates the UE is in CM-IDLE state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 *
 * @constant
 * @type {number}
 */
export
const idle: CMState = CMState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CMState_connected
 * @description
 *
 * Indicates the UE is in CM-CONNECTED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 *
 * @constant
 * @type {number}
 */
export
const CMState_connected: CMState = CMState.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @description
 *
 * Indicates the UE is in CM-CONNECTED state.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.68.
 *
 * @constant
 * @type {number}
 */
export
const connected: CMState = CMState.connected; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CMState: $.ASN1Decoder<CMState> = $._decodeEnumerated;
export const _encode_CMState: $.ASN1Encoder<CMState> = $._encodeEnumerated;


/* eslint-enable */
