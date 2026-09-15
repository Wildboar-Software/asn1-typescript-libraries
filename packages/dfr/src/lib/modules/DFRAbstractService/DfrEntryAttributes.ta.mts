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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary DfrEntryAttributes
 * @description
 *
 * SET OF Directory `Attribute` values describing a DFR-Entry. ISO/IEC
 * 10166-1:1991 §6.3, §8.1.1. Attribute types are ISO/IEC 9594-2 as used by
 * DFR.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntryAttributes  ::=  SET OF Attribute
 * ```
 */
export
type DfrEntryAttributes = Attribute[]; // SetOfType

let _cached_decoder_for_DfrEntryAttributes: $.ASN1Decoder<DfrEntryAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntryAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntryAttributes (el: _Element): DfrEntryAttributes {
    if (!_cached_decoder_for_DfrEntryAttributes) { _cached_decoder_for_DfrEntryAttributes = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_DfrEntryAttributes(el);
}

let _cached_encoder_for_DfrEntryAttributes: $.ASN1Encoder<DfrEntryAttributes> | null = null;

/**
 * @summary Encodes a(n) DfrEntryAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntryAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntryAttributes (value: DfrEntryAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntryAttributes) { _cached_encoder_for_DfrEntryAttributes = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_DfrEntryAttributes(value, elGetter);
}


/* eslint-enable */
