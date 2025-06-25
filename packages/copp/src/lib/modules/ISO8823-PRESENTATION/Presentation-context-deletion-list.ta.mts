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
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta.mjs';

/**
 * @summary Presentation_context_deletion_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-deletion-list  ::=
 *   SEQUENCE SIZE (0..7, ..., 8..MAX) OF Presentation-context-identifier
 * ```
 */
export type Presentation_context_deletion_list = Presentation_context_identifier[]; // SequenceOfType


let _cached_decoder_for_Presentation_context_deletion_list: $.ASN1Decoder<Presentation_context_deletion_list> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_deletion_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_deletion_list} The decoded data structure.
 */
export function _decode_Presentation_context_deletion_list(el: _Element): Presentation_context_deletion_list {
    if (!_cached_decoder_for_Presentation_context_deletion_list) {
        _cached_decoder_for_Presentation_context_deletion_list = $._decodeSequenceOf<Presentation_context_identifier>(
            () => _decode_Presentation_context_identifier
        );
    }
    return _cached_decoder_for_Presentation_context_deletion_list(el);
}


let _cached_encoder_for_Presentation_context_deletion_list: $.ASN1Encoder<Presentation_context_deletion_list> | null = null;


/**
 * @summary Encodes a(n) Presentation_context_deletion_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_deletion_list, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_deletion_list(
    value: Presentation_context_deletion_list,
    elGetter: $.ASN1Encoder<Presentation_context_deletion_list>
): _Element {
    if (!_cached_encoder_for_Presentation_context_deletion_list) {
        _cached_encoder_for_Presentation_context_deletion_list = $._encodeSequenceOf<Presentation_context_identifier>(
            () => _encode_Presentation_context_identifier,
            $.BER
        );
    }
    return _cached_encoder_for_Presentation_context_deletion_list(
        value,
        elGetter
    );
}


/* eslint-enable */
