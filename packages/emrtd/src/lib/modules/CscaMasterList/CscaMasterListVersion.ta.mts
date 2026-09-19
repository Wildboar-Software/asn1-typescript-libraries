/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CscaMasterListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CscaMasterListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type CscaMasterListVersion = INTEGER;

/**
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const CscaMasterListVersion_v0: CscaMasterListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: CscaMasterListVersion = CscaMasterListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CscaMasterListVersion: $.ASN1Decoder<CscaMasterListVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CscaMasterListVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CscaMasterListVersion (el: _Element): CscaMasterListVersion {
    if (!_cached_decoder_for_CscaMasterListVersion) { _cached_decoder_for_CscaMasterListVersion = $._decodeInteger; }
    return _cached_decoder_for_CscaMasterListVersion(el);
}

let _cached_encoder_for_CscaMasterListVersion: $.ASN1Encoder<CscaMasterListVersion> | null = null;

/**
 * @summary Encodes a(n) CscaMasterListVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CscaMasterListVersion, encoded as an ASN.1 Element.
 */
export
function _encode_CscaMasterListVersion (value: CscaMasterListVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CscaMasterListVersion) { _cached_encoder_for_CscaMasterListVersion = $._encodeInteger; }
    return _cached_encoder_for_CscaMasterListVersion(value, elGetter);
}


/* eslint-enable */
