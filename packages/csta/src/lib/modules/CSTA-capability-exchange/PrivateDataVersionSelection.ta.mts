/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PrivateDataVersionSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataVersionSelection  ::=  BIT STRING
 * {     privateDataInAck             ( 0) }
 * ```
 */
export
type PrivateDataVersionSelection = BIT_STRING;

/**
 * @summary PrivateDataVersionSelection_privateDataInAck
 * @constant
 */
export
const PrivateDataVersionSelection_privateDataInAck: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = PrivateDataVersionSelection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PrivateDataVersionSelection: $.ASN1Decoder<PrivateDataVersionSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDataVersionSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDataVersionSelection (el: _Element): PrivateDataVersionSelection {
    if (!_cached_decoder_for_PrivateDataVersionSelection) { _cached_decoder_for_PrivateDataVersionSelection = $._decodeBitString; }
    return _cached_decoder_for_PrivateDataVersionSelection(el);
}

let _cached_encoder_for_PrivateDataVersionSelection: $.ASN1Encoder<PrivateDataVersionSelection> | null = null;

/**
 * @summary Encodes a(n) PrivateDataVersionSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDataVersionSelection, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDataVersionSelection (value: PrivateDataVersionSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDataVersionSelection) { _cached_encoder_for_PrivateDataVersionSelection = $._encodeBitString; }
    return _cached_encoder_for_PrivateDataVersionSelection(value, elGetter);
}


/* eslint-enable */
