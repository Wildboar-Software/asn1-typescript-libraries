/* eslint-disable */
import {
    SET,
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ManagedObjectInstanceAliasList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagedObjectInstanceAliasList  ::=  SET OF GraphicString(SIZE (0..256))
 * ```
 */
export
type ManagedObjectInstanceAliasList = GraphicString[]; // SetOfType

let _cached_decoder_for_ManagedObjectInstanceAliasList: $.ASN1Decoder<ManagedObjectInstanceAliasList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectInstanceAliasList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManagedObjectInstanceAliasList (el: _Element): ManagedObjectInstanceAliasList {
    if (!_cached_decoder_for_ManagedObjectInstanceAliasList) { _cached_decoder_for_ManagedObjectInstanceAliasList = $._decodeSetOf<GraphicString>(() => $._decodeGraphicString); }
    const value = _cached_decoder_for_ManagedObjectInstanceAliasList(el);
    if (value.some((s) => s.length > 256)) {
        throw new ASN1SizeError("ManagedObjectInstanceAliasList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ManagedObjectInstanceAliasList: $.ASN1Encoder<ManagedObjectInstanceAliasList> | null = null;

/**
 * @summary Encodes a(n) ManagedObjectInstanceAliasList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectInstanceAliasList, encoded as an ASN.1 Element.
 */
export
function _encode_ManagedObjectInstanceAliasList (value: ManagedObjectInstanceAliasList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManagedObjectInstanceAliasList) { _cached_encoder_for_ManagedObjectInstanceAliasList = $._encodeSetOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_ManagedObjectInstanceAliasList(value, elGetter);
}


/* eslint-enable */
