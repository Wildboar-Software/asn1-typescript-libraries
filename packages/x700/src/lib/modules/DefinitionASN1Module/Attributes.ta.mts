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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Attributes_Item,
    _decode_Attributes_Item,
    _encode_Attributes_Item,
} from '../DefinitionASN1Module/Attributes-Item.ta.mjs';

/**
 * @summary Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attributes  ::=
 *   SET OF
 *     SEQUENCE {attributeLabel  TemplateLabel,
 *               property        PropertyList,
 *               parameterLabel  TemplateList OPTIONAL}
 * ```
 */
export type Attributes = Attributes_Item[]; // SetOfType


let _cached_decoder_for_Attributes: $.ASN1Decoder<Attributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attributes} The decoded data structure.
 */
export function _decode_Attributes(el: _Element): Attributes {
    if (!_cached_decoder_for_Attributes) {
        _cached_decoder_for_Attributes = $._decodeSetOf<Attributes_Item>(
            () => _decode_Attributes_Item
        );
    }
    return _cached_decoder_for_Attributes(el);
}


let _cached_encoder_for_Attributes: $.ASN1Encoder<Attributes> | null = null;


/**
 * @summary Encodes a(n) Attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Attributes(
    value: Attributes,
    elGetter: $.ASN1Encoder<Attributes>
): _Element {
    if (!_cached_encoder_for_Attributes) {
        _cached_encoder_for_Attributes = $._encodeSetOf<Attributes_Item>(
            () => _encode_Attributes_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}


/* eslint-enable */
