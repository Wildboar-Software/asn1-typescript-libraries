/* eslint-disable */
import {
    NULL,
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

/**
 * @summary InformationSelection_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationSelection-attributes ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type InformationSelection_attributes =
    | { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { select: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_InformationSelection_attributes: $.ASN1Decoder<InformationSelection_attributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InformationSelection_attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationSelection_attributes} The decoded data structure.
 */
export function _decode_InformationSelection_attributes(el: _Element): InformationSelection_attributes {
    if (!_cached_decoder_for_InformationSelection_attributes) {
        _cached_decoder_for_InformationSelection_attributes = $._decode_extensible_choice<InformationSelection_attributes>(
            {
                'CONTEXT 0': [
                    'allAttributes',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'select',
                    $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_InformationSelection_attributes(el);
}


let _cached_encoder_for_InformationSelection_attributes: $.ASN1Encoder<InformationSelection_attributes> | null = null;


/**
 * @summary Encodes a(n) InformationSelection_attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationSelection_attributes, encoded as an ASN.1 Element.
 */
export function _encode_InformationSelection_attributes(
    value: InformationSelection_attributes,
    elGetter: $.ASN1Encoder<InformationSelection_attributes>
): _Element {
    if (!_cached_encoder_for_InformationSelection_attributes) {
        _cached_encoder_for_InformationSelection_attributes = $._encode_choice<InformationSelection_attributes>(
            {
                allAttributes: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                select: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InformationSelection_attributes(value, elGetter);
}


/* eslint-enable */
