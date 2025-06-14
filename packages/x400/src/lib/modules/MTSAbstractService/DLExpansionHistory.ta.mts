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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DLExpansion,
    _decode_DLExpansion,
    _encode_DLExpansion,
} from '../MTSAbstractService/DLExpansion.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DLExpansionHistory */
/**
 * @summary DLExpansionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionHistory  ::=  SEQUENCE SIZE (1..ub-dl-expansions) OF DLExpansion
 * ```
 */
export type DLExpansionHistory = DLExpansion[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionHistory */
let _cached_decoder_for_DLExpansionHistory: $.ASN1Decoder<DLExpansionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansionHistory */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansionHistory} The decoded data structure.
 */
export function _decode_DLExpansionHistory(el: _Element) {
    if (!_cached_decoder_for_DLExpansionHistory) {
        _cached_decoder_for_DLExpansionHistory = $._decodeSequenceOf<DLExpansion>(
            () => _decode_DLExpansion
        );
    }
    return _cached_decoder_for_DLExpansionHistory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionHistory */
let _cached_encoder_for_DLExpansionHistory: $.ASN1Encoder<DLExpansionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansionHistory */
/**
 * @summary Encodes a(n) DLExpansionHistory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansionHistory, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansionHistory(
    value: DLExpansionHistory,
    elGetter: $.ASN1Encoder<DLExpansionHistory>
) {
    if (!_cached_encoder_for_DLExpansionHistory) {
        _cached_encoder_for_DLExpansionHistory = $._encodeSequenceOf<DLExpansion>(
            () => _encode_DLExpansion,
            $.BER
        );
    }
    return _cached_encoder_for_DLExpansionHistory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansionHistory */

/* eslint-enable */
