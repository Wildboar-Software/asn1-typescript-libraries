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
    OriginatorAndDLExpansion,
    _decode_OriginatorAndDLExpansion,
    _encode_OriginatorAndDLExpansion,
} from '../MTSAbstractService/OriginatorAndDLExpansion.ta.mjs';
/**
 * @summary OriginatorAndDLExpansionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorAndDLExpansionHistory  ::=
 *   SEQUENCE SIZE (2..ub-orig-and-dl-expansions) OF OriginatorAndDLExpansion
 * ```
 */
export type OriginatorAndDLExpansionHistory = OriginatorAndDLExpansion[]; // SequenceOfType

let _cached_decoder_for_OriginatorAndDLExpansionHistory: $.ASN1Decoder<OriginatorAndDLExpansionHistory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorAndDLExpansionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorAndDLExpansionHistory} The decoded data structure.
 */
export function _decode_OriginatorAndDLExpansionHistory(el: _Element): OriginatorAndDLExpansionHistory {
    if (!_cached_decoder_for_OriginatorAndDLExpansionHistory) {
        _cached_decoder_for_OriginatorAndDLExpansionHistory = $._decodeSequenceOf<OriginatorAndDLExpansion>(
            () => _decode_OriginatorAndDLExpansion
        );
    }
    return _cached_decoder_for_OriginatorAndDLExpansionHistory(el);
}

let _cached_encoder_for_OriginatorAndDLExpansionHistory: $.ASN1Encoder<OriginatorAndDLExpansionHistory> | null = null;

/**
 * @summary Encodes a(n) OriginatorAndDLExpansionHistory into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorAndDLExpansionHistory, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorAndDLExpansionHistory(
    value: OriginatorAndDLExpansionHistory,
    elGetter: $.ASN1Encoder<OriginatorAndDLExpansionHistory>
): _Element {
    if (!_cached_encoder_for_OriginatorAndDLExpansionHistory) {
        _cached_encoder_for_OriginatorAndDLExpansionHistory = $._encodeSequenceOf<OriginatorAndDLExpansion>(
            () => _encode_OriginatorAndDLExpansion,
            $.BER
        );
    }
    return _cached_encoder_for_OriginatorAndDLExpansionHistory(value, elGetter);
}


/* eslint-enable */
