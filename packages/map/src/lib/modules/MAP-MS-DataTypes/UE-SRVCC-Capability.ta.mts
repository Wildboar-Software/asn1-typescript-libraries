/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_UE_SRVCC_Capability {
    ue_srvcc_not_supported = 0,
    ue_srvcc_supported = 1,
}

/**
 * @summary UE_SRVCC_Capability
 * @description
 *
 * Whether the UE supports SRVCC. Present in Update GPRS Location when known.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.99 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UE-SRVCC-Capability ::=  ENUMERATED {
 *     ue-srvcc-not-supported  (0),
 *     ue-srvcc-supported  (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type UE_SRVCC_Capability = _enum_for_UE_SRVCC_Capability | ENUMERATED;

/**
 * @summary UE_SRVCC_Capability_ue_srvcc_not_supported
 * @constant
 * @type {number}
 */
export
const UE_SRVCC_Capability_ue_srvcc_not_supported: UE_SRVCC_Capability = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue_srvcc_not_supported
 * @constant
 * @type {number}
 */
export
const ue_srvcc_not_supported: UE_SRVCC_Capability = UE_SRVCC_Capability_ue_srvcc_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UE_SRVCC_Capability_ue_srvcc_supported
 * @constant
 * @type {number}
 */
export
const UE_SRVCC_Capability_ue_srvcc_supported: UE_SRVCC_Capability = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue_srvcc_supported
 * @constant
 * @type {number}
 */
export
const ue_srvcc_supported: UE_SRVCC_Capability = UE_SRVCC_Capability_ue_srvcc_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UE_SRVCC_Capability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UE_SRVCC_Capability = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UE_SRVCC_Capability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UE_SRVCC_Capability, encoded as an ASN.1 Element.
 */
export const _encode_UE_SRVCC_Capability = $._encodeEnumerated;


/* eslint-enable */
