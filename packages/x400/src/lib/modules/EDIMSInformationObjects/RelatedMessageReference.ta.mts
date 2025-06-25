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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary RelatedMessageReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedMessageReference  ::=  CHOICE {
 *   edi-message-reference       [0]  EDIMIdentifier,
 *   external-message-reference  [1]  EXTERNAL-MESSAGE-REFERENCE.&id
 * }
 * ```
 */
export type RelatedMessageReference =
    | { edi_message_reference: EDIMIdentifier } /* CHOICE_ALT_ROOT */
    | { external_message_reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RelatedMessageReference: $.ASN1Decoder<RelatedMessageReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedMessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedMessageReference} The decoded data structure.
 */
export function _decode_RelatedMessageReference(el: _Element): RelatedMessageReference {
    if (!_cached_decoder_for_RelatedMessageReference) {
        _cached_decoder_for_RelatedMessageReference = $._decode_inextensible_choice<RelatedMessageReference>(
            {
                'CONTEXT 0': [
                    'edi_message_reference',
                    $._decode_implicit<EDIMIdentifier>(
                        () => _decode_EDIMIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'external_message_reference',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RelatedMessageReference(el);
}

let _cached_encoder_for_RelatedMessageReference: $.ASN1Encoder<RelatedMessageReference> | null = null;

/**
 * @summary Encodes a(n) RelatedMessageReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedMessageReference, encoded as an ASN.1 Element.
 */
export function _encode_RelatedMessageReference(
    value: RelatedMessageReference,
    elGetter: $.ASN1Encoder<RelatedMessageReference>
): _Element {
    if (!_cached_encoder_for_RelatedMessageReference) {
        _cached_encoder_for_RelatedMessageReference = $._encode_choice<RelatedMessageReference>(
            {
                edi_message_reference: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIMIdentifier,
                    $.BER
                ),
                external_message_reference: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelatedMessageReference(value, elGetter);
}


/* eslint-enable */
