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
    RecipientRedirection,
    _decode_RecipientRedirection,
    _encode_RecipientRedirection,
} from '../MTSAbstractService/RecipientRedirection.ta.mjs';
/**
 * @summary Redirections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Redirections  ::=  SEQUENCE SIZE (1..ub-redirections) OF RecipientRedirection
 * ```
 */
export type Redirections = RecipientRedirection[]; // SequenceOfType

let _cached_decoder_for_Redirections: $.ASN1Decoder<Redirections> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Redirections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Redirections} The decoded data structure.
 */
export function _decode_Redirections(el: _Element): Redirections {
    if (!_cached_decoder_for_Redirections) {
        _cached_decoder_for_Redirections = $._decodeSequenceOf<RecipientRedirection>(
            () => _decode_RecipientRedirection
        );
    }
    return _cached_decoder_for_Redirections(el);
}

let _cached_encoder_for_Redirections: $.ASN1Encoder<Redirections> | null = null;

/**
 * @summary Encodes a(n) Redirections into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Redirections, encoded as an ASN.1 Element.
 */
export function _encode_Redirections(
    value: Redirections,
    elGetter: $.ASN1Encoder<Redirections>
): _Element {
    if (!_cached_encoder_for_Redirections) {
        _cached_encoder_for_Redirections = $._encodeSequenceOf<RecipientRedirection>(
            () => _encode_RecipientRedirection,
            $.BER
        );
    }
    return _cached_encoder_for_Redirections(value, elGetter);
}


/* eslint-enable */
