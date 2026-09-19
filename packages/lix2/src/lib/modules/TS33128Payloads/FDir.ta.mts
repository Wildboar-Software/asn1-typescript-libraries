/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FDir {
    downlink = 1,
}

/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FDir = _enum_for_FDir;

/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FDir = _enum_for_FDir;

/**
 * @summary FDir_downlink
 * @constant
 * @type {number}
 */
export
const FDir_downlink: FDir = FDir.downlink; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlink
 * @constant
 * @type {number}
 */
export
const downlink: FDir = FDir.downlink; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FDir: $.ASN1Decoder<FDir> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDir
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDir (el: _Element): FDir {
    if (!_cached_decoder_for_FDir) { _cached_decoder_for_FDir = $._decodeEnumerated; }
    return _cached_decoder_for_FDir(el);
}

let _cached_encoder_for_FDir: $.ASN1Encoder<FDir> | null = null;

/**
 * @summary Encodes a(n) FDir into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDir, encoded as an ASN.1 Element.
 */
export
function _encode_FDir (value: FDir, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDir) { _cached_encoder_for_FDir = $._encodeEnumerated; }
    return _cached_encoder_for_FDir(value, elGetter);
}


/* eslint-enable */
