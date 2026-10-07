/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "./InternationalString.ta.mjs";


/**
 * @summary ElementSetName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElementSetName ::= [103] IMPLICIT InternationalString
 * ```
 */
export
type ElementSetName = InternationalString;


let _cached_decoder_for_ElementSetName: $.ASN1Decoder<ElementSetName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementSetName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementSetName (el: _Element): ElementSetName {
    if (!_cached_decoder_for_ElementSetName) { _cached_decoder_for_ElementSetName = $._decode_implicit<ElementSetName>(() => _decode_InternationalString); }
    return _cached_decoder_for_ElementSetName(el);
}

let _cached_encoder_for_ElementSetName: $.ASN1Encoder<ElementSetName> | null = null;

/**
 * @summary Encodes a(n) ElementSetName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementSetName, encoded as an ASN.1 Element.
 */
export
function _encode_ElementSetName (value: ElementSetName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementSetName) { _cached_encoder_for_ElementSetName = $._encode_implicit(_TagClass.context, 103, () => _encode_InternationalString, $.BER); }
    return _cached_encoder_for_ElementSetName(value, elGetter);
}

/* eslint-enable */
