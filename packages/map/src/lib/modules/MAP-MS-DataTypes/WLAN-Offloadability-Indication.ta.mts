/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WLAN_Offloadability_Indication
 * @description
 *
 * Whether WLAN offload is allowed or not allowed for a RAT. Defined in 3GPP TS
 * 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.101 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_WLAN_Offloadability_Indication {
    notAllowed = 0,
    allowed = 1,
}

/**
 * @summary WLAN_Offloadability_Indication
 * @description
 *
 * Whether WLAN offload is allowed or not allowed for a RAT. Defined in 3GPP TS
 * 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.101 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
type WLAN_Offloadability_Indication = _enum_for_WLAN_Offloadability_Indication;

/**
 * @summary WLAN_Offloadability_Indication
 * @description
 *
 * Whether WLAN offload is allowed or not allowed for a RAT. Defined in 3GPP TS
 * 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.101 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
const WLAN_Offloadability_Indication = _enum_for_WLAN_Offloadability_Indication;

/**
 * @summary WLAN_Offloadability_Indication_notAllowed
 * @constant
 * @type {number}
 */
export
const WLAN_Offloadability_Indication_notAllowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.notAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.notAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WLAN_Offloadability_Indication_allowed
 * @constant
 * @type {number}
 */
export
const WLAN_Offloadability_Indication_allowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowed
 * @constant
 * @type {number}
 */
export
const allowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) WLAN_Offloadability_Indication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_WLAN_Offloadability_Indication = $._decodeEnumerated;

/**
 * @summary Encodes a(n) WLAN_Offloadability_Indication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WLAN_Offloadability_Indication, encoded as an ASN.1 Element.
 */
export const _encode_WLAN_Offloadability_Indication = $._encodeEnumerated;


/* eslint-enable */
