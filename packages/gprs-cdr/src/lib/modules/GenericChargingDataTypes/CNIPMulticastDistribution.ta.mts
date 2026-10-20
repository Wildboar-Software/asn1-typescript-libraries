/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNIPMulticastDistribution  ::=  ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CNIPMulticastDistribution {
    nO_IP_MULTICAST = 0,
    iP_MULTICAST = 1,
}

/**
 * @summary CNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNIPMulticastDistribution  ::=  ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CNIPMulticastDistribution = _enum_for_CNIPMulticastDistribution;

/**
 * @summary CNIPMulticastDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNIPMulticastDistribution  ::=  ENUMERATED {
 *    nO-IP-MULTICAST    ( 0 ),
 *    iP-MULTICAST       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CNIPMulticastDistribution = _enum_for_CNIPMulticastDistribution;

/**
 * @summary CNIPMulticastDistribution_nO_IP_MULTICAST
 * @constant
 * @type {number}
 */
export
const CNIPMulticastDistribution_nO_IP_MULTICAST: CNIPMulticastDistribution = CNIPMulticastDistribution.nO_IP_MULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nO_IP_MULTICAST
 * @constant
 * @type {number}
 */
export
const nO_IP_MULTICAST: CNIPMulticastDistribution = CNIPMulticastDistribution.nO_IP_MULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CNIPMulticastDistribution_iP_MULTICAST
 * @constant
 * @type {number}
 */
export
const CNIPMulticastDistribution_iP_MULTICAST: CNIPMulticastDistribution = CNIPMulticastDistribution.iP_MULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iP_MULTICAST
 * @constant
 * @type {number}
 */
export
const iP_MULTICAST: CNIPMulticastDistribution = CNIPMulticastDistribution.iP_MULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CNIPMulticastDistribution: $.ASN1Decoder<CNIPMulticastDistribution> = $._decodeEnumerated;

export
const _encode_CNIPMulticastDistribution: $.ASN1Encoder<CNIPMulticastDistribution> = $._encodeEnumerated;

/* eslint-enable */
