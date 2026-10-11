/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EncryptionType {
    none = 1,
    national_option = 2,
    aES_192_CBC = 3,
    aES_256_CBC = 4,
    blowfish_192_CBC = 5,
    blowfish_256_CBC = 6,
    threedes_cbc = 7,
}

/**
 * @summary EncryptionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptionType  ::=  ENUMERATED
 * {
 *     none(1),
 *         -- No encryption is applied.
 *     national-option(2),
 *         -- Use this option when an encryption scheme is negotiated on a national level
 *     aES-192-CBC(3),
 *         -- The Advanced Encryption Standard using a 192 bit key in CBC mode
 *     aES-256-CBC(4),
 *         -- The Advanced Encryption Standard using a 256 bit key in CBC mode
 *     blowfish-192-CBC(5),
 *         -- Blowfish (www.schneier.com/blowfish.html) using a 192 bit key in CBC mode
 *     blowfish-256-CBC(6),
 *         -- Blowfish using a 256 bit key in CBC mode
 *     threedes-cbc(7),
 *         -- Triple-DES using a 192 bit key in CBC mode
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EncryptionType = _enum_for_EncryptionType | ENUMERATED;

/**
 * @summary EncryptionType_none
 * @constant
 * @type {number}
 */
export
const EncryptionType_none: EncryptionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: EncryptionType = EncryptionType_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_national_option
 * @constant
 * @type {number}
 */
export
const EncryptionType_national_option: EncryptionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary national_option
 * @constant
 * @type {number}
 */
export
const national_option: EncryptionType = EncryptionType_national_option; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_aES_192_CBC
 * @constant
 * @type {number}
 */
export
const EncryptionType_aES_192_CBC: EncryptionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aES_192_CBC
 * @constant
 * @type {number}
 */
export
const aES_192_CBC: EncryptionType = EncryptionType_aES_192_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_aES_256_CBC
 * @constant
 * @type {number}
 */
export
const EncryptionType_aES_256_CBC: EncryptionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aES_256_CBC
 * @constant
 * @type {number}
 */
export
const aES_256_CBC: EncryptionType = EncryptionType_aES_256_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_blowfish_192_CBC
 * @constant
 * @type {number}
 */
export
const EncryptionType_blowfish_192_CBC: EncryptionType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blowfish_192_CBC
 * @constant
 * @type {number}
 */
export
const blowfish_192_CBC: EncryptionType = EncryptionType_blowfish_192_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_blowfish_256_CBC
 * @constant
 * @type {number}
 */
export
const EncryptionType_blowfish_256_CBC: EncryptionType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blowfish_256_CBC
 * @constant
 * @type {number}
 */
export
const blowfish_256_CBC: EncryptionType = EncryptionType_blowfish_256_CBC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncryptionType_threedes_cbc
 * @constant
 * @type {number}
 */
export
const EncryptionType_threedes_cbc: EncryptionType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threedes_cbc
 * @constant
 * @type {number}
 */
export
const threedes_cbc: EncryptionType = EncryptionType_threedes_cbc; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EncryptionType: $.ASN1Decoder<EncryptionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptionType (el: _Element): EncryptionType {
    if (!_cached_decoder_for_EncryptionType) { _cached_decoder_for_EncryptionType = $._decodeEnumerated; }
    return _cached_decoder_for_EncryptionType(el);
}

let _cached_encoder_for_EncryptionType: $.ASN1Encoder<EncryptionType> | null = null;

/**
 * @summary Encodes a(n) EncryptionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionType, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptionType (value: EncryptionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptionType) { _cached_encoder_for_EncryptionType = $._encodeEnumerated; }
    return _cached_encoder_for_EncryptionType(value, elGetter);
}


/* eslint-enable */
