/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TADIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TADIdentifier {
    cS = 0,
    pS = 1,
}

/**
 * @summary TADIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TADIdentifier = _enum_for_TADIdentifier;

/**
 * @summary TADIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TADIdentifier  ::=  ENUMERATED {
 *    cS          ( 0 ),
 *    pS          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TADIdentifier = _enum_for_TADIdentifier;

/**
 * @summary TADIdentifier_cS
 * @constant
 * @type {number}
 */
export
const TADIdentifier_cS: TADIdentifier = TADIdentifier.cS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cS
 * @constant
 * @type {number}
 */
export
const cS: TADIdentifier = TADIdentifier.cS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TADIdentifier_pS
 * @constant
 * @type {number}
 */
export
const TADIdentifier_pS: TADIdentifier = TADIdentifier.pS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pS
 * @constant
 * @type {number}
 */
export
const pS: TADIdentifier = TADIdentifier.pS; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TADIdentifier: $.ASN1Decoder<TADIdentifier> = $._decodeEnumerated;

export
const _encode_TADIdentifier: $.ASN1Encoder<TADIdentifier> = $._encodeEnumerated;

/* eslint-enable */
