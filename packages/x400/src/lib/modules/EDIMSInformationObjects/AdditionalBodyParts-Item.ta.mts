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
import * as $ from '@wildboar/asn1/functional';
import {
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.mjs';
import {
    BodyPartPlaceHolder,
    _decode_BodyPartPlaceHolder,
    _encode_BodyPartPlaceHolder,
} from '../EDIMSInformationObjects/BodyPartPlaceHolder.ta.mjs';
/**
 * @summary AdditionalBodyParts_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalBodyParts-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AdditionalBodyParts_Item =
    | { external_body_part: EDIM_ExtendedBodyPart } /* CHOICE_ALT_ROOT */
    | { place_holder: BodyPartPlaceHolder } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdditionalBodyParts_Item: $.ASN1Decoder<AdditionalBodyParts_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalBodyParts_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalBodyParts_Item} The decoded data structure.
 */
export function _decode_AdditionalBodyParts_Item(el: _Element) {
    if (!_cached_decoder_for_AdditionalBodyParts_Item) {
        _cached_decoder_for_AdditionalBodyParts_Item = $._decode_inextensible_choice<AdditionalBodyParts_Item>(
            {
                'CONTEXT 0': [
                    'external_body_part',
                    $._decode_implicit<EDIM_ExtendedBodyPart>(
                        () => _decode_EDIM_ExtendedBodyPart
                    ),
                ],
                'CONTEXT 1': [
                    'place_holder',
                    $._decode_implicit<BodyPartPlaceHolder>(
                        () => _decode_BodyPartPlaceHolder
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AdditionalBodyParts_Item(el);
}

let _cached_encoder_for_AdditionalBodyParts_Item: $.ASN1Encoder<AdditionalBodyParts_Item> | null = null;

/**
 * @summary Encodes a(n) AdditionalBodyParts_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalBodyParts_Item, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalBodyParts_Item(
    value: AdditionalBodyParts_Item,
    elGetter: $.ASN1Encoder<AdditionalBodyParts_Item>
) {
    if (!_cached_encoder_for_AdditionalBodyParts_Item) {
        _cached_encoder_for_AdditionalBodyParts_Item = $._encode_choice<AdditionalBodyParts_Item>(
            {
                external_body_part: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIM_ExtendedBodyPart,
                    $.BER
                ),
                place_holder: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_BodyPartPlaceHolder,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalBodyParts_Item(value, elGetter);
}


/* eslint-enable */
