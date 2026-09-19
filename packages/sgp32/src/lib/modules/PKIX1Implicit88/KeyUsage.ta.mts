/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyUsage  ::=  BIT STRING {
 *      digitalSignature        (0),
 *      nonRepudiation          (1),
 *      keyEncipherment         (2),
 *      dataEncipherment        (3),
 *      keyAgreement            (4),
 *      keyCertSign             (5),
 *      cRLSign                 (6),
 *      encipherOnly            (7),
 *      decipherOnly            (8) }
 * ```
 */
export
type KeyUsage = BIT_STRING;

/**
 * @summary KeyUsage_digitalSignature
 * @constant
 */
export
const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary digitalSignature
 * @constant
 */
export
const digitalSignature: number = KeyUsage_digitalSignature; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_nonRepudiation
 * @constant
 */
export
const KeyUsage_nonRepudiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nonRepudiation
 * @constant
 */
export
const nonRepudiation: number = KeyUsage_nonRepudiation; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyEncipherment
 * @constant
 */
export
const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary keyEncipherment
 * @constant
 */
export
const keyEncipherment: number = KeyUsage_keyEncipherment; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_dataEncipherment
 * @constant
 */
export
const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataEncipherment
 * @constant
 */
export
const dataEncipherment: number = KeyUsage_dataEncipherment; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyAgreement
 * @constant
 */
export
const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary keyAgreement
 * @constant
 */
export
const keyAgreement: number = KeyUsage_keyAgreement; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyCertSign
 * @constant
 */
export
const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary keyCertSign
 * @constant
 */
export
const keyCertSign: number = KeyUsage_keyCertSign; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_cRLSign
 * @constant
 */
export
const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary cRLSign
 * @constant
 */
export
const cRLSign: number = KeyUsage_cRLSign; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_encipherOnly
 * @constant
 */
export
const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary encipherOnly
 * @constant
 */
export
const encipherOnly: number = KeyUsage_encipherOnly; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_decipherOnly
 * @constant
 */
export
const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary decipherOnly
 * @constant
 */
export
const decipherOnly: number = KeyUsage_decipherOnly; /* SHORT_NAMED_BIT */

let _cached_decoder_for_KeyUsage: $.ASN1Decoder<KeyUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyUsage (el: _Element): KeyUsage {
    if (!_cached_decoder_for_KeyUsage) { _cached_decoder_for_KeyUsage = $._decodeBitString; }
    return _cached_decoder_for_KeyUsage(el);
}

let _cached_encoder_for_KeyUsage: $.ASN1Encoder<KeyUsage> | null = null;

/**
 * @summary Encodes a(n) KeyUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyUsage, encoded as an ASN.1 Element.
 */
export
function _encode_KeyUsage (value: KeyUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyUsage) { _cached_encoder_for_KeyUsage = $._encodeBitString; }
    return _cached_encoder_for_KeyUsage(value, elGetter);
}


/* eslint-enable */
