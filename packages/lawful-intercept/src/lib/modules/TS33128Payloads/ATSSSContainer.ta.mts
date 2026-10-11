/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ATSSSContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATSSSContainer  ::=  OCTET STRING
 * ```
 */
export
type ATSSSContainer = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ATSSSContainer: $.ASN1Decoder<ATSSSContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ATSSSContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ATSSSContainer (el: _Element): ATSSSContainer {
    if (!_cached_decoder_for_ATSSSContainer) { _cached_decoder_for_ATSSSContainer = $._decodeOctetString; }
    return _cached_decoder_for_ATSSSContainer(el);
}

let _cached_encoder_for_ATSSSContainer: $.ASN1Encoder<ATSSSContainer> | null = null;

/**
 * @summary Encodes a(n) ATSSSContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATSSSContainer, encoded as an ASN.1 Element.
 */
export
function _encode_ATSSSContainer (value: ATSSSContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ATSSSContainer) { _cached_encoder_for_ATSSSContainer = $._encodeOctetString; }
    return _cached_encoder_for_ATSSSContainer(value, elGetter);
}


/* eslint-enable */
