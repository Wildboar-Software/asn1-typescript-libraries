/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkFunctionality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFunctionality  ::=  ENUMERATED {
 *    cHF         ( 0 ),
 *    sMF         ( 1 ),
 *    aMF         ( 2 ),
 *    sMSF        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NetworkFunctionality {
    cHF = 0,
    sMF = 1,
    aMF = 2,
    sMSF = 3,
}

/**
 * @summary NetworkFunctionality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFunctionality  ::=  ENUMERATED {
 *    cHF         ( 0 ),
 *    sMF         ( 1 ),
 *    aMF         ( 2 ),
 *    sMSF        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type NetworkFunctionality = _enum_for_NetworkFunctionality;

/**
 * @summary NetworkFunctionality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFunctionality  ::=  ENUMERATED {
 *    cHF         ( 0 ),
 *    sMF         ( 1 ),
 *    aMF         ( 2 ),
 *    sMSF        ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const NetworkFunctionality = _enum_for_NetworkFunctionality;

/**
 * @summary NetworkFunctionality_cHF
 * @constant
 * @type {number}
 */
export
const NetworkFunctionality_cHF: NetworkFunctionality = NetworkFunctionality.cHF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cHF
 * @constant
 * @type {number}
 */
export
const cHF: NetworkFunctionality = NetworkFunctionality.cHF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkFunctionality_sMF
 * @constant
 * @type {number}
 */
export
const NetworkFunctionality_sMF: NetworkFunctionality = NetworkFunctionality.sMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMF
 * @constant
 * @type {number}
 */
export
const sMF: NetworkFunctionality = NetworkFunctionality.sMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkFunctionality_aMF
 * @constant
 * @type {number}
 */
export
const NetworkFunctionality_aMF: NetworkFunctionality = NetworkFunctionality.aMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMF
 * @constant
 * @type {number}
 */
export
const aMF: NetworkFunctionality = NetworkFunctionality.aMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkFunctionality_sMSF
 * @constant
 * @type {number}
 */
export
const NetworkFunctionality_sMSF: NetworkFunctionality = NetworkFunctionality.sMSF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSF
 * @constant
 * @type {number}
 */
export
const sMSF: NetworkFunctionality = NetworkFunctionality.sMSF; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NetworkFunctionality: $.ASN1Decoder<NetworkFunctionality> = $._decodeEnumerated;

export
const _encode_NetworkFunctionality: $.ASN1Encoder<NetworkFunctionality> = $._encodeEnumerated;

/* eslint-enable */
