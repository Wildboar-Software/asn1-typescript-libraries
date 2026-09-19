/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUERadioCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUERadioCapability  ::=  OCTET STRING
 * ```
 */
export
type EPSUERadioCapability = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSUERadioCapability: $.ASN1Decoder<EPSUERadioCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSUERadioCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSUERadioCapability (el: _Element): EPSUERadioCapability {
    if (!_cached_decoder_for_EPSUERadioCapability) { _cached_decoder_for_EPSUERadioCapability = $._decodeOctetString; }
    return _cached_decoder_for_EPSUERadioCapability(el);
}

let _cached_encoder_for_EPSUERadioCapability: $.ASN1Encoder<EPSUERadioCapability> | null = null;

/**
 * @summary Encodes a(n) EPSUERadioCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSUERadioCapability, encoded as an ASN.1 Element.
 */
export
function _encode_EPSUERadioCapability (value: EPSUERadioCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSUERadioCapability) { _cached_encoder_for_EPSUERadioCapability = $._encodeOctetString; }
    return _cached_encoder_for_EPSUERadioCapability(value, elGetter);
}


/* eslint-enable */
