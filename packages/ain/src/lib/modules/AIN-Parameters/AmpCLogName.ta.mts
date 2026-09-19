/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AmpCLogName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCLogName  ::=  OCTET STRING(SIZE(1..10))
 * ```
 */
export
type AmpCLogName = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AmpCLogName: $.ASN1Decoder<AmpCLogName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpCLogName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpCLogName (el: _Element): AmpCLogName {
    if (!_cached_decoder_for_AmpCLogName) { _cached_decoder_for_AmpCLogName = $._decodeOctetString; }
    return _cached_decoder_for_AmpCLogName(el);
}

let _cached_encoder_for_AmpCLogName: $.ASN1Encoder<AmpCLogName> | null = null;

/**
 * @summary Encodes a(n) AmpCLogName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpCLogName, encoded as an ASN.1 Element.
 */
export
function _encode_AmpCLogName (value: AmpCLogName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpCLogName) { _cached_encoder_for_AmpCLogName = $._encodeOctetString; }
    return _cached_encoder_for_AmpCLogName(value, elGetter);
}


/* eslint-enable */
