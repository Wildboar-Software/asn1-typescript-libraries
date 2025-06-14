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

/* START_OF_SYMBOL_DEFINITION TerminationReason */
/**
 * @summary TerminationReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminationReason  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TerminationReason = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION TerminationReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminationReason */
let _cached_decoder_for_TerminationReason: $.ASN1Decoder<TerminationReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _decode_TerminationReason */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminationReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminationReason} The decoded data structure.
 */
export function _decode_TerminationReason(el: _Element) {
    if (!_cached_decoder_for_TerminationReason) {
        _cached_decoder_for_TerminationReason = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_TerminationReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminationReason */
let _cached_encoder_for_TerminationReason: $.ASN1Encoder<TerminationReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _encode_TerminationReason */
/**
 * @summary Encodes a(n) TerminationReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationReason, encoded as an ASN.1 Element.
 */
export function _encode_TerminationReason(
    value: TerminationReason,
    elGetter: $.ASN1Encoder<TerminationReason>
) {
    if (!_cached_encoder_for_TerminationReason) {
        _cached_encoder_for_TerminationReason = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_TerminationReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminationReason */

/* eslint-enable */
