/* eslint-disable */
import {
    SET,
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAliasList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAliasList  ::=  SET OF GraphicString(SIZE (0..64))
 * ```
 */
export
type ServiceAliasList = GraphicString[]; // SetOfType

let _cached_decoder_for_ServiceAliasList: $.ASN1Decoder<ServiceAliasList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAliasList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAliasList (el: _Element): ServiceAliasList {
    if (!_cached_decoder_for_ServiceAliasList) { _cached_decoder_for_ServiceAliasList = $._decodeSetOf<GraphicString>(() => $._decodeGraphicString); }
    const value = _cached_decoder_for_ServiceAliasList(el);
    if (value.some((s) => s.length > 64)) {
        throw new ASN1SizeError("ServiceAliasList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ServiceAliasList: $.ASN1Encoder<ServiceAliasList> | null = null;

/**
 * @summary Encodes a(n) ServiceAliasList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAliasList, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAliasList (value: ServiceAliasList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAliasList) { _cached_encoder_for_ServiceAliasList = $._encodeSetOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_ServiceAliasList(value, elGetter);
}


/* eslint-enable */
