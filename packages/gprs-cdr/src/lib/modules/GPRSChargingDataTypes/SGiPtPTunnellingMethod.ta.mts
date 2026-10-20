/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SGiPtPTunnellingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGiPtPTunnellingMethod  ::=  ENUMERATED {
 *    uDPIPbased    ( 0 ),
 *    others        ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SGiPtPTunnellingMethod {
    uDPIPbased = 0,
    others = 1,
}

/**
 * @summary SGiPtPTunnellingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGiPtPTunnellingMethod  ::=  ENUMERATED {
 *    uDPIPbased    ( 0 ),
 *    others        ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SGiPtPTunnellingMethod = _enum_for_SGiPtPTunnellingMethod;

/**
 * @summary SGiPtPTunnellingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGiPtPTunnellingMethod  ::=  ENUMERATED {
 *    uDPIPbased    ( 0 ),
 *    others        ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SGiPtPTunnellingMethod = _enum_for_SGiPtPTunnellingMethod;

/**
 * @summary SGiPtPTunnellingMethod_uDPIPbased
 * @constant
 * @type {number}
 */
export
const SGiPtPTunnellingMethod_uDPIPbased: SGiPtPTunnellingMethod = SGiPtPTunnellingMethod.uDPIPbased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPIPbased
 * @constant
 * @type {number}
 */
export
const uDPIPbased: SGiPtPTunnellingMethod = SGiPtPTunnellingMethod.uDPIPbased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGiPtPTunnellingMethod_others
 * @constant
 * @type {number}
 */
export
const SGiPtPTunnellingMethod_others: SGiPtPTunnellingMethod = SGiPtPTunnellingMethod.others; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary others
 * @constant
 * @type {number}
 */
export
const others: SGiPtPTunnellingMethod = SGiPtPTunnellingMethod.others; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SGiPtPTunnellingMethod: $.ASN1Decoder<SGiPtPTunnellingMethod> = $._decodeEnumerated;

export
const _encode_SGiPtPTunnellingMethod: $.ASN1Encoder<SGiPtPTunnellingMethod> = $._encodeEnumerated;

/* eslint-enable */
