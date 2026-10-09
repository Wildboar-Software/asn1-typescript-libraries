/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Usage_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Usage_type = INTEGER;

/**
 * @summary Usage_type_redistributable
 * @constant
 * @type {number}
 */
export
const Usage_type_redistributable: Usage_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_redistributable
 * @constant
 * @type {number}
 */
export
const redistributable: Usage_type = Usage_type_redistributable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @constant
 * @type {number}
 */
export
const Usage_type_restricted: Usage_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @constant
 * @type {number}
 */
export
const restricted: Usage_type = Usage_type_restricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @constant
 * @type {number}
 */
export
const Usage_type_licensePointer: Usage_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @constant
 * @type {number}
 */
export
const licensePointer: Usage_type = Usage_type_licensePointer; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Usage_type: $.ASN1Decoder<Usage_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Usage_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Usage_type (el: _Element): Usage_type {
    if (!_cached_decoder_for_Usage_type) { _cached_decoder_for_Usage_type = $._decodeInteger; }
    return _cached_decoder_for_Usage_type(el);
}

let _cached_encoder_for_Usage_type: $.ASN1Encoder<Usage_type> | null = null;

/**
 * @summary Encodes a(n) Usage_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage_type, encoded as an ASN.1 Element.
 */
export
function _encode_Usage_type (value: Usage_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Usage_type) { _cached_encoder_for_Usage_type = $._encodeInteger; }
    return _cached_encoder_for_Usage_type(value, elGetter);
}


/* eslint-enable */
