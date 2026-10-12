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
export const _decode_MDTConfiguration: $.ASN1Decoder<MDTConfiguration> = $._decodeEnumerated;
export const _encode_MDTConfiguration: $.ASN1Encoder<MDTConfiguration> = $._encodeEnumerated;


/* eslint-enable */
