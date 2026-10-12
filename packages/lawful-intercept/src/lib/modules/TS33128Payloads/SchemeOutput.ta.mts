/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SchemeOutput
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeOutput  ::=  OCTET STRING
 * ```
 */
export
type SchemeOutput = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SchemeOutput: $.ASN1Decoder<SchemeOutput> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeOutput
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemeOutput (el: _Element): SchemeOutput {
    if (!_cached_decoder_for_SchemeOutput) { _cached_decoder_for_SchemeOutput = $._decodeOctetString; }
    return _cached_decoder_for_SchemeOutput(el);
}

let _cached_encoder_for_SchemeOutput: $.ASN1Encoder<SchemeOutput> | null = null;

/**
 * @summary Encodes a(n) SchemeOutput into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeOutput, encoded as an ASN.1 Element.
 */
export
function _encode_SchemeOutput (value: SchemeOutput, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemeOutput) { _cached_encoder_for_SchemeOutput = $._encodeOctetString; }
    return _cached_encoder_for_SchemeOutput(value, elGetter);
}


/* eslint-enable */
