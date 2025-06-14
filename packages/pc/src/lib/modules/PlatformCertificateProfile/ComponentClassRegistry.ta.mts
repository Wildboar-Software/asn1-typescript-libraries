/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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



/* START_OF_SYMBOL_DEFINITION ComponentClassRegistry */
/**
 * @summary ComponentClassRegistry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentClassRegistry  ::=  OBJECT IDENTIFIER (
 *     tcg-registry-componentClass-tcg
 *     | tcg-registry-componentClass-ietf
 *     | tcg-registry-componentClass-dmtf )
 * ```
 */
export
type ComponentClassRegistry = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ComponentClassRegistry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentClassRegistry */
let _cached_decoder_for_ComponentClassRegistry: $.ASN1Decoder<ComponentClassRegistry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentClassRegistry */

/* START_OF_SYMBOL_DEFINITION _decode_ComponentClassRegistry */
/**
 * @summary Decodes an ASN.1 element into a(n) ComponentClassRegistry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentClassRegistry} The decoded data structure.
 */
export
function _decode_ComponentClassRegistry (el: _Element) {
    if (!_cached_decoder_for_ComponentClassRegistry) { _cached_decoder_for_ComponentClassRegistry = $._decodeObjectIdentifier; }
    return _cached_decoder_for_ComponentClassRegistry(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComponentClassRegistry */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentClassRegistry */
let _cached_encoder_for_ComponentClassRegistry: $.ASN1Encoder<ComponentClassRegistry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentClassRegistry */

/* START_OF_SYMBOL_DEFINITION _encode_ComponentClassRegistry */
/**
 * @summary Encodes a(n) ComponentClassRegistry into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentClassRegistry, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentClassRegistry (value: ComponentClassRegistry, elGetter: $.ASN1Encoder<ComponentClassRegistry>) {
    if (!_cached_encoder_for_ComponentClassRegistry) { _cached_encoder_for_ComponentClassRegistry = $._encodeObjectIdentifier; }
    return _cached_encoder_for_ComponentClassRegistry(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComponentClassRegistry */

/* eslint-enable */
