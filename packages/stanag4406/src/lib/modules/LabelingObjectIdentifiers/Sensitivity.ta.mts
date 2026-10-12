/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sensitivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sensitivity  ::=  BIT STRING {
 *     atomal (0),
 *     crypto (1),
 *     exclusive (2),
 *     intelligence (3),
 *     logistics (4),
 *     operations (5),
 *     us-siop (6),
 *     us-siop-esi (7)
 * }
 * ```
 */
export
type Sensitivity = BIT_STRING;

/**
 * @summary Sensitivity_atomal
 * @constant
 */
export
const Sensitivity_atomal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary atomal
 * @constant
 */
export
const atomal: number = Sensitivity_atomal; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_crypto
 * @constant
 */
export
const Sensitivity_crypto: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary crypto
 * @constant
 */
export
const crypto: number = Sensitivity_crypto; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_exclusive
 * @constant
 */
export
const Sensitivity_exclusive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary exclusive
 * @constant
 */
export
const exclusive: number = Sensitivity_exclusive; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_intelligence
 * @constant
 */
export
const Sensitivity_intelligence: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary intelligence
 * @constant
 */
export
const intelligence: number = Sensitivity_intelligence; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_logistics
 * @constant
 */
export
const Sensitivity_logistics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary logistics
 * @constant
 */
export
const logistics: number = Sensitivity_logistics; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_operations
 * @constant
 */
export
const Sensitivity_operations: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary operations
 * @constant
 */
export
const operations: number = Sensitivity_operations; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop
 * @constant
 */
export
const Sensitivity_us_siop: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary us_siop
 * @constant
 */
export
const us_siop: number = Sensitivity_us_siop; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop_esi
 * @constant
 */
export
const Sensitivity_us_siop_esi: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary us_siop_esi
 * @constant
 */
export
const us_siop_esi: number = Sensitivity_us_siop_esi; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Sensitivity: $.ASN1Decoder<Sensitivity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sensitivity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Sensitivity (el: _Element): Sensitivity {
    if (!_cached_decoder_for_Sensitivity) { _cached_decoder_for_Sensitivity = $._decodeBitString; }
    return _cached_decoder_for_Sensitivity(el);
}

let _cached_encoder_for_Sensitivity: $.ASN1Encoder<Sensitivity> | null = null;

/**
 * @summary Encodes a(n) Sensitivity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sensitivity, encoded as an ASN.1 Element.
 */
export
function _encode_Sensitivity (value: Sensitivity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Sensitivity) { _cached_encoder_for_Sensitivity = $._encodeBitString; }
    return _cached_encoder_for_Sensitivity(value, elGetter);
}


/* eslint-enable */
