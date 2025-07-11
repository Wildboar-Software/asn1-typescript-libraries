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
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta.mjs';
/**
 * @summary RedirectionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionHistory  ::=  SEQUENCE SIZE (1..ub-redirections) OF Redirection
 * ```
 */
export type RedirectionHistory = Redirection[]; // SequenceOfType

let _cached_decoder_for_RedirectionHistory: $.ASN1Decoder<RedirectionHistory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionHistory} The decoded data structure.
 */
export function _decode_RedirectionHistory(el: _Element): RedirectionHistory {
    if (!_cached_decoder_for_RedirectionHistory) {
        _cached_decoder_for_RedirectionHistory = $._decodeSequenceOf<Redirection>(
            () => _decode_Redirection
        );
    }
    return _cached_decoder_for_RedirectionHistory(el);
}

let _cached_encoder_for_RedirectionHistory: $.ASN1Encoder<RedirectionHistory> | null = null;

/**
 * @summary Encodes a(n) RedirectionHistory into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionHistory, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionHistory(
    value: RedirectionHistory,
    elGetter: $.ASN1Encoder<RedirectionHistory>
): _Element {
    if (!_cached_encoder_for_RedirectionHistory) {
        _cached_encoder_for_RedirectionHistory = $._encodeSequenceOf<Redirection>(
            () => _encode_Redirection,
            $.BER
        );
    }
    return _cached_encoder_for_RedirectionHistory(value, elGetter);
}


/* eslint-enable */
