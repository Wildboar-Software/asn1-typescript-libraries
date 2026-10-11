/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_to_IRI_Correlation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-to-IRI-Correlation  ::=  OCTET STRING
 * ```
 */
export
type IRI_to_IRI_Correlation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IRI_to_IRI_Correlation: $.ASN1Decoder<IRI_to_IRI_Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_to_IRI_Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_to_IRI_Correlation (el: _Element): IRI_to_IRI_Correlation {
    if (!_cached_decoder_for_IRI_to_IRI_Correlation) { _cached_decoder_for_IRI_to_IRI_Correlation = $._decodeOctetString; }
    return _cached_decoder_for_IRI_to_IRI_Correlation(el);
}

let _cached_encoder_for_IRI_to_IRI_Correlation: $.ASN1Encoder<IRI_to_IRI_Correlation> | null = null;

/**
 * @summary Encodes a(n) IRI_to_IRI_Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_to_IRI_Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_to_IRI_Correlation (value: IRI_to_IRI_Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_to_IRI_Correlation) { _cached_encoder_for_IRI_to_IRI_Correlation = $._encodeOctetString; }
    return _cached_encoder_for_IRI_to_IRI_Correlation(value, elGetter);
}


/* eslint-enable */
