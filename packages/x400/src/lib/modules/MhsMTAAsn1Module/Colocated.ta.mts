/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION Colocated */
/**
 * @summary Colocated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Colocated  ::=  BOOLEAN
 * ```
 */
export type Colocated = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Colocated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Colocated */
let _cached_decoder_for_Colocated: $.ASN1Decoder<Colocated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Colocated */

/* START_OF_SYMBOL_DEFINITION _decode_Colocated */
/**
 * @summary Decodes an ASN.1 element into a(n) Colocated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Colocated} The decoded data structure.
 */
export function _decode_Colocated(el: _Element) {
    if (!_cached_decoder_for_Colocated) {
        _cached_decoder_for_Colocated = $._decodeBoolean;
    }
    return _cached_decoder_for_Colocated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Colocated */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Colocated */
let _cached_encoder_for_Colocated: $.ASN1Encoder<Colocated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Colocated */

/* START_OF_SYMBOL_DEFINITION _encode_Colocated */
/**
 * @summary Encodes a(n) Colocated into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Colocated, encoded as an ASN.1 Element.
 */
export function _encode_Colocated(
    value: Colocated,
    elGetter: $.ASN1Encoder<Colocated>
) {
    if (!_cached_encoder_for_Colocated) {
        _cached_encoder_for_Colocated = $._encodeBoolean;
    }
    return _cached_encoder_for_Colocated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Colocated */

/* eslint-enable */
