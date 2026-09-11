/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PrivateDataVersionSelectionArgument
 * @description
 *
 * INTEGER version to use (ECMA-269 §29.2.2, ECMA-285 §27.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataVersionSelectionArgument  ::=  INTEGER
 * ```
 */
export
type PrivateDataVersionSelectionArgument = INTEGER;

let _cached_decoder_for_PrivateDataVersionSelectionArgument: $.ASN1Decoder<PrivateDataVersionSelectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDataVersionSelectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDataVersionSelectionArgument (el: _Element): PrivateDataVersionSelectionArgument {
    if (!_cached_decoder_for_PrivateDataVersionSelectionArgument) { _cached_decoder_for_PrivateDataVersionSelectionArgument = $._decodeInteger; }
    return _cached_decoder_for_PrivateDataVersionSelectionArgument(el);
}

let _cached_encoder_for_PrivateDataVersionSelectionArgument: $.ASN1Encoder<PrivateDataVersionSelectionArgument> | null = null;

/**
 * @summary Encodes a(n) PrivateDataVersionSelectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDataVersionSelectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDataVersionSelectionArgument (value: PrivateDataVersionSelectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDataVersionSelectionArgument) { _cached_encoder_for_PrivateDataVersionSelectionArgument = $._encodeInteger; }
    return _cached_encoder_for_PrivateDataVersionSelectionArgument(value, elGetter);
}


/* eslint-enable */
