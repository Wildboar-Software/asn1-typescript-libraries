/* eslint-disable */
import {
    GraphicString,
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
    ExplicitRelationship,
    _decode_ExplicitRelationship,
    _encode_ExplicitRelationship,
} from '../IPMSFileTransferBodyPartType/ExplicitRelationship.ta.mjs';
/**
 * @summary Relationship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Relationship  ::=  CHOICE {
 *   explicit-relationship     [0]  ExplicitRelationship,
 *   descriptive-relationship  [1]  GraphicString
 * }
 * ```
 */
export type Relationship =
    | { explicit_relationship: ExplicitRelationship } /* CHOICE_ALT_ROOT */
    | { descriptive_relationship: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Relationship: $.ASN1Decoder<Relationship> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Relationship
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Relationship} The decoded data structure.
 */
export function _decode_Relationship(el: _Element) {
    if (!_cached_decoder_for_Relationship) {
        _cached_decoder_for_Relationship = $._decode_inextensible_choice<Relationship>(
            {
                'CONTEXT 0': [
                    'explicit_relationship',
                    $._decode_implicit<ExplicitRelationship>(
                        () => _decode_ExplicitRelationship
                    ),
                ],
                'CONTEXT 1': [
                    'descriptive_relationship',
                    $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Relationship(el);
}

let _cached_encoder_for_Relationship: $.ASN1Encoder<Relationship> | null = null;

/**
 * @summary Encodes a(n) Relationship into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Relationship, encoded as an ASN.1 Element.
 */
export function _encode_Relationship(
    value: Relationship,
    elGetter: $.ASN1Encoder<Relationship>
) {
    if (!_cached_encoder_for_Relationship) {
        _cached_encoder_for_Relationship = $._encode_choice<Relationship>(
            {
                explicit_relationship: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitRelationship,
                    $.BER
                ),
                descriptive_relationship: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeGraphicString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Relationship(value, elGetter);
}


/* eslint-enable */
