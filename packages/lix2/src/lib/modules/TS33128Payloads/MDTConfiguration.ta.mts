/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MDTConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTConfiguration  ::=  ENUMERATED
 * {
 *     mDTConfigurationNR(1),
 *     mDTConfigurationEUTRA(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MDTConfiguration {
    mDTConfigurationNR = 1,
    mDTConfigurationEUTRA = 2,
}

/**
 * @summary MDTConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTConfiguration  ::=  ENUMERATED
 * {
 *     mDTConfigurationNR(1),
 *     mDTConfigurationEUTRA(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MDTConfiguration = _enum_for_MDTConfiguration;

/**
 * @summary MDTConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTConfiguration  ::=  ENUMERATED
 * {
 *     mDTConfigurationNR(1),
 *     mDTConfigurationEUTRA(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MDTConfiguration = _enum_for_MDTConfiguration;

/**
 * @summary MDTConfiguration_mDTConfigurationNR
 * @constant
 * @type {number}
 */
export
const MDTConfiguration_mDTConfigurationNR: MDTConfiguration = MDTConfiguration.mDTConfigurationNR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mDTConfigurationNR
 * @constant
 * @type {number}
 */
export
const mDTConfigurationNR: MDTConfiguration = MDTConfiguration.mDTConfigurationNR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTConfiguration_mDTConfigurationEUTRA
 * @constant
 * @type {number}
 */
export
const MDTConfiguration_mDTConfigurationEUTRA: MDTConfiguration = MDTConfiguration.mDTConfigurationEUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mDTConfigurationEUTRA
 * @constant
 * @type {number}
 */
export
const mDTConfigurationEUTRA: MDTConfiguration = MDTConfiguration.mDTConfigurationEUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MDTConfiguration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MDTConfiguration = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MDTConfiguration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDTConfiguration, encoded as an ASN.1 Element.
 */
export const _encode_MDTConfiguration = $._encodeEnumerated;


/* eslint-enable */
