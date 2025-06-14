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

/* START_OF_SYMBOL_DEFINITION UnitsType */
/**
 * @summary UnitsType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitsType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type UnitsType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION UnitsType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitsType */
let _cached_decoder_for_UnitsType: $.ASN1Decoder<UnitsType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitsType */

/* START_OF_SYMBOL_DEFINITION _decode_UnitsType */
/**
 * @summary Decodes an ASN.1 element into a(n) UnitsType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitsType} The decoded data structure.
 */
export function _decode_UnitsType(el: _Element) {
    if (!_cached_decoder_for_UnitsType) {
        _cached_decoder_for_UnitsType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_UnitsType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnitsType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitsType */
let _cached_encoder_for_UnitsType: $.ASN1Encoder<UnitsType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitsType */

/* START_OF_SYMBOL_DEFINITION _encode_UnitsType */
/**
 * @summary Encodes a(n) UnitsType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitsType, encoded as an ASN.1 Element.
 */
export function _encode_UnitsType(
    value: UnitsType,
    elGetter: $.ASN1Encoder<UnitsType>
) {
    if (!_cached_encoder_for_UnitsType) {
        _cached_encoder_for_UnitsType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_UnitsType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnitsType */

/* eslint-enable */
