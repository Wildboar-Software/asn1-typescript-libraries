/* eslint-disable */
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
const MDTConfiguration: typeof _enum_for_MDTConfiguration = _enum_for_MDTConfiguration;

/**
 * @summary MDTConfiguration_mDTConfigurationNR
 * @constant
 * @type {number}
 */
export
const MDTConfiguration_mDTConfigurationNR: _enum_for_MDTConfiguration.mDTConfigurationNR = MDTConfiguration.mDTConfigurationNR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mDTConfigurationNR
 * @constant
 * @type {number}
 */
export
const mDTConfigurationNR: _enum_for_MDTConfiguration.mDTConfigurationNR = MDTConfiguration.mDTConfigurationNR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTConfiguration_mDTConfigurationEUTRA
 * @constant
 * @type {number}
 */
export
const MDTConfiguration_mDTConfigurationEUTRA: _enum_for_MDTConfiguration.mDTConfigurationEUTRA = MDTConfiguration.mDTConfigurationEUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mDTConfigurationEUTRA
 * @constant
 * @type {number}
 */
export
const mDTConfigurationEUTRA: _enum_for_MDTConfiguration.mDTConfigurationEUTRA = MDTConfiguration.mDTConfigurationEUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MDTConfiguration: $.ASN1Decoder<MDTConfiguration> = $._decodeEnumerated;
export const _encode_MDTConfiguration: $.ASN1Encoder<MDTConfiguration> = $._encodeEnumerated;


/* eslint-enable */
