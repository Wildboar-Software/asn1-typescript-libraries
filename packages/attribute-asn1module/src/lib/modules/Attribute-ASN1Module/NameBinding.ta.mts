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



/* START_OF_SYMBOL_DEFINITION NameBinding */
/**
 * @summary NameBinding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameBinding  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type NameBinding = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION NameBinding */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameBinding */
let _cached_decoder_for_NameBinding: $.ASN1Decoder<NameBinding> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameBinding */

/* START_OF_SYMBOL_DEFINITION _decode_NameBinding */
/**
 * @summary Decodes an ASN.1 element into a(n) NameBinding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameBinding} The decoded data structure.
 */
export
function _decode_NameBinding (el: _Element) {
    if (!_cached_decoder_for_NameBinding) { _cached_decoder_for_NameBinding = $._decodeObjectIdentifier; }
    return _cached_decoder_for_NameBinding(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameBinding */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameBinding */
let _cached_encoder_for_NameBinding: $.ASN1Encoder<NameBinding> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameBinding */

/* START_OF_SYMBOL_DEFINITION _encode_NameBinding */
/**
 * @summary Encodes a(n) NameBinding into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameBinding, encoded as an ASN.1 Element.
 */
export
function _encode_NameBinding (value: NameBinding, elGetter: $.ASN1Encoder<NameBinding>) {
    if (!_cached_encoder_for_NameBinding) { _cached_encoder_for_NameBinding = $._encodeObjectIdentifier; }
    return _cached_encoder_for_NameBinding(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameBinding */

/* eslint-enable */
