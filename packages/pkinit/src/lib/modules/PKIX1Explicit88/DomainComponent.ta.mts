/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainComponent  ::=      IA5String
 * ```
 */
export
type DomainComponent = IA5String; // IA5String

let _cached_decoder_for_DomainComponent: $.ASN1Decoder<DomainComponent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainComponent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainComponent (el: _Element): DomainComponent {
    if (!_cached_decoder_for_DomainComponent) { _cached_decoder_for_DomainComponent = $._decodeIA5String; }
    return _cached_decoder_for_DomainComponent(el);
}

let _cached_encoder_for_DomainComponent: $.ASN1Encoder<DomainComponent> | null = null;

/**
 * @summary Encodes a(n) DomainComponent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainComponent, encoded as an ASN.1 Element.
 */
export
function _encode_DomainComponent (value: DomainComponent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainComponent) { _cached_encoder_for_DomainComponent = $._encodeIA5String; }
    return _cached_encoder_for_DomainComponent(value, elGetter);
}


/* eslint-enable */
