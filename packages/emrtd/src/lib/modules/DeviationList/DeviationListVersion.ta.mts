/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeviationListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviationListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type DeviationListVersion = INTEGER;

/**
 * @summary DeviationListVersion_v0
 * @constant
 * @type {number}
 */
export
const DeviationListVersion_v0: DeviationListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeviationListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: DeviationListVersion = DeviationListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeviationListVersion: $.ASN1Decoder<DeviationListVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviationListVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviationListVersion (el: _Element): DeviationListVersion {
    if (!_cached_decoder_for_DeviationListVersion) { _cached_decoder_for_DeviationListVersion = $._decodeInteger; }
    return _cached_decoder_for_DeviationListVersion(el);
}

let _cached_encoder_for_DeviationListVersion: $.ASN1Encoder<DeviationListVersion> | null = null;

/**
 * @summary Encodes a(n) DeviationListVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviationListVersion, encoded as an ASN.1 Element.
 */
export
function _encode_DeviationListVersion (value: DeviationListVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviationListVersion) { _cached_encoder_for_DeviationListVersion = $._encodeInteger; }
    return _cached_encoder_for_DeviationListVersion(value, elGetter);
}


/* eslint-enable */
