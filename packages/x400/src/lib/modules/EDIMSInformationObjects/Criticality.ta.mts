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

/* START_OF_SYMBOL_DEFINITION Criticality */
/**
 * @summary Criticality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criticality  ::=  BOOLEAN
 * ```
 */
export type Criticality = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */
let _cached_decoder_for_Criticality: $.ASN1Decoder<Criticality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _decode_Criticality */
/**
 * @summary Decodes an ASN.1 element into a(n) Criticality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Criticality} The decoded data structure.
 */
export function _decode_Criticality(el: _Element) {
    if (!_cached_decoder_for_Criticality) {
        _cached_decoder_for_Criticality = $._decodeBoolean;
    }
    return _cached_decoder_for_Criticality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */
let _cached_encoder_for_Criticality: $.ASN1Encoder<Criticality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _encode_Criticality */
/**
 * @summary Encodes a(n) Criticality into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Criticality, encoded as an ASN.1 Element.
 */
export function _encode_Criticality(
    value: Criticality,
    elGetter: $.ASN1Encoder<Criticality>
) {
    if (!_cached_encoder_for_Criticality) {
        _cached_encoder_for_Criticality = $._encodeBoolean;
    }
    return _cached_encoder_for_Criticality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Criticality */

/* eslint-enable */
