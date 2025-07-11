/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/x500/InformationFramework";
/**
 * @summary AttributesSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}
 * ```
 */
export
type AttributesSyntax = Attribute[]; // SequenceOfType

let _cached_decoder_for_AttributesSyntax: $.ASN1Decoder<AttributesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributesSyntax} The decoded data structure.
 */
export
function _decode_AttributesSyntax (el: _Element): AttributesSyntax {
    if (!_cached_decoder_for_AttributesSyntax) { _cached_decoder_for_AttributesSyntax = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_AttributesSyntax(el);
}

let _cached_encoder_for_AttributesSyntax: $.ASN1Encoder<AttributesSyntax> | null = null;

/**
 * @summary Encodes a(n) AttributesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributesSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_AttributesSyntax (value: AttributesSyntax, elGetter: $.ASN1Encoder<AttributesSyntax>): _Element {
    if (!_cached_encoder_for_AttributesSyntax) { _cached_encoder_for_AttributesSyntax = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_AttributesSyntax(value, elGetter);
}


/* eslint-enable */
