/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSInformation_cNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-cNIPMulticastDistribution ::= ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSInformation_cNIPMulticastDistribution {
    nO_IP_MULTICAST = 0,
    iP_MULTICAST = 1,
}

/**
 * @summary MBMSInformation_cNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-cNIPMulticastDistribution ::= ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSInformation_cNIPMulticastDistribution = _enum_for_MBMSInformation_cNIPMulticastDistribution;

/**
 * @summary MBMSInformation_cNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-cNIPMulticastDistribution ::= ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSInformation_cNIPMulticastDistribution = _enum_for_MBMSInformation_cNIPMulticastDistribution;

/**
 * @summary MBMSInformation_cNIPMulticastDistribution_nO_IP_MULTICAST
 * @constant
 * @type {number}
 */
export
const MBMSInformation_cNIPMulticastDistribution_nO_IP_MULTICAST: MBMSInformation_cNIPMulticastDistribution = MBMSInformation_cNIPMulticastDistribution.nO_IP_MULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nO_IP_MULTICAST
 * @constant
 * @type {number}
 */
export
const nO_IP_MULTICAST: MBMSInformation_cNIPMulticastDistribution = MBMSInformation_cNIPMulticastDistribution.nO_IP_MULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSInformation_cNIPMulticastDistribution_iP_MULTICAST
 * @constant
 * @type {number}
 */
export
const MBMSInformation_cNIPMulticastDistribution_iP_MULTICAST: MBMSInformation_cNIPMulticastDistribution = MBMSInformation_cNIPMulticastDistribution.iP_MULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iP_MULTICAST
 * @constant
 * @type {number}
 */
export
const iP_MULTICAST: MBMSInformation_cNIPMulticastDistribution = MBMSInformation_cNIPMulticastDistribution.iP_MULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSInformation_cNIPMulticastDistribution: $.ASN1Decoder<MBMSInformation_cNIPMulticastDistribution> = $._decodeEnumerated;

export
const _encode_MBMSInformation_cNIPMulticastDistribution: $.ASN1Encoder<MBMSInformation_cNIPMulticastDistribution> = $._encodeEnumerated;

/* eslint-enable */
