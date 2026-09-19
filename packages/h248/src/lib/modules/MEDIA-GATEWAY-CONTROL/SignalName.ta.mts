/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SignalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalName  ::=  OCTET STRING
 * ```
 */
export
type SignalName = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SignalName: $.ASN1Decoder<SignalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalName (el: _Element): SignalName {
    if (!_cached_decoder_for_SignalName) { _cached_decoder_for_SignalName = $._decodeOctetString; }
    return _cached_decoder_for_SignalName(el);
}

let _cached_encoder_for_SignalName: $.ASN1Encoder<SignalName> | null = null;

/**
 * @summary Encodes a(n) SignalName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalName, encoded as an ASN.1 Element.
 */
export
function _encode_SignalName (value: SignalName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalName) { _cached_encoder_for_SignalName = $._encodeOctetString; }
    return _cached_encoder_for_SignalName(value, elGetter);
}


/* eslint-enable */
