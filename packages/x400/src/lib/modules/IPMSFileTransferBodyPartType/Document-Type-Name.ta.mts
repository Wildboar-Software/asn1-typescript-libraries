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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Document_Type_Name */
/**
 * @summary Document_Type_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-Type-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Document_Type_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_Type_Name */
let _cached_decoder_for_Document_Type_Name: $.ASN1Decoder<Document_Type_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Document_Type_Name */
/**
 * @summary Decodes an ASN.1 element into a(n) Document_Type_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Document_Type_Name} The decoded data structure.
 */
export function _decode_Document_Type_Name(el: _Element) {
    if (!_cached_decoder_for_Document_Type_Name) {
        _cached_decoder_for_Document_Type_Name = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Document_Type_Name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_Type_Name */
let _cached_encoder_for_Document_Type_Name: $.ASN1Encoder<Document_Type_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Document_Type_Name */
/**
 * @summary Encodes a(n) Document_Type_Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Document_Type_Name, encoded as an ASN.1 Element.
 */
export function _encode_Document_Type_Name(
    value: Document_Type_Name,
    elGetter: $.ASN1Encoder<Document_Type_Name>
) {
    if (!_cached_encoder_for_Document_Type_Name) {
        _cached_encoder_for_Document_Type_Name = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Document_Type_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Document_Type_Name */

/* eslint-enable */
