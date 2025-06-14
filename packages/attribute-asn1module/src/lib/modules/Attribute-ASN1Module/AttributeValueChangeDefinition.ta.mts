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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AttributeValueChangeDefinition_Item, _decode_AttributeValueChangeDefinition_Item, _encode_AttributeValueChangeDefinition_Item } from "../Attribute-ASN1Module/AttributeValueChangeDefinition-Item.ta.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeValueChangeDefinition */
/**
 * @summary AttributeValueChangeDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValueChangeDefinition  ::= 
 *   SET OF
 *     SEQUENCE {attributeId        CMIP-ATTRIBUTE.&id({AttributeSet}),
 *               oldAttributeValue
 *                 [1]  CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId})
 *                   OPTIONAL,
 *               newAttributeValue
 *                 [2]  CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId})
 *     }
 * ```
 */
export
type AttributeValueChangeDefinition = AttributeValueChangeDefinition_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeValueChangeDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueChangeDefinition */
let _cached_decoder_for_AttributeValueChangeDefinition: $.ASN1Decoder<AttributeValueChangeDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueChangeDefinition */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueChangeDefinition */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueChangeDefinition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueChangeDefinition} The decoded data structure.
 */
export
function _decode_AttributeValueChangeDefinition (el: _Element) {
    if (!_cached_decoder_for_AttributeValueChangeDefinition) { _cached_decoder_for_AttributeValueChangeDefinition = $._decodeSetOf<AttributeValueChangeDefinition_Item>(() => _decode_AttributeValueChangeDefinition_Item); }
    return _cached_decoder_for_AttributeValueChangeDefinition(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueChangeDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueChangeDefinition */
let _cached_encoder_for_AttributeValueChangeDefinition: $.ASN1Encoder<AttributeValueChangeDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueChangeDefinition */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueChangeDefinition */
/**
 * @summary Encodes a(n) AttributeValueChangeDefinition into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueChangeDefinition, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueChangeDefinition (value: AttributeValueChangeDefinition, elGetter: $.ASN1Encoder<AttributeValueChangeDefinition>) {
    if (!_cached_encoder_for_AttributeValueChangeDefinition) { _cached_encoder_for_AttributeValueChangeDefinition = $._encodeSetOf<AttributeValueChangeDefinition_Item>(() => _encode_AttributeValueChangeDefinition_Item, $.BER); }
    return _cached_encoder_for_AttributeValueChangeDefinition(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueChangeDefinition */

/* eslint-enable */
