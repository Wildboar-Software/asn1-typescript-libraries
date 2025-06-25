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
    TONotCreated_reason,
    _enum_for_TONotCreated_reason,
    _decode_TONotCreated_reason,
    _encode_TONotCreated_reason,
} from '../Test-ASN1Module/TONotCreated-reason.ta.mjs';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.mjs';
/**
 * @summary TONotCreated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated  ::=  CHOICE {
 *   reason
 *     ENUMERATED {invalidTOclass(0), duplicateTOInstance(1), invalidMORTClass(2),
 *                 invalidAssociatedObjectClass(3), mORTNotAvailable(4),
 *                 associatedObjectNotAvailable(5)},
 *   inappropriateAttributeValue  AttributeList
 * }
 * ```
 */
export type TONotCreated =
    | { reason: TONotCreated_reason } /* CHOICE_ALT_ROOT */
    | { inappropriateAttributeValue: AttributeList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TONotCreated: $.ASN1Decoder<TONotCreated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TONotCreated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TONotCreated} The decoded data structure.
 */
export function _decode_TONotCreated(el: _Element): TONotCreated {
    if (!_cached_decoder_for_TONotCreated) {
        _cached_decoder_for_TONotCreated = $._decode_inextensible_choice<TONotCreated>(
            {
                'UNIVERSAL 10': ['reason', _decode_TONotCreated_reason],
                'UNIVERSAL 17': [
                    'inappropriateAttributeValue',
                    _decode_AttributeList,
                ],
            }
        );
    }
    return _cached_decoder_for_TONotCreated(el);
}

let _cached_encoder_for_TONotCreated: $.ASN1Encoder<TONotCreated> | null = null;

/**
 * @summary Encodes a(n) TONotCreated into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TONotCreated, encoded as an ASN.1 Element.
 */
export function _encode_TONotCreated(
    value: TONotCreated,
    elGetter: $.ASN1Encoder<TONotCreated>
): _Element {
    if (!_cached_encoder_for_TONotCreated) {
        _cached_encoder_for_TONotCreated = $._encode_choice<TONotCreated>(
            {
                reason: _encode_TONotCreated_reason,
                inappropriateAttributeValue: _encode_AttributeList,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TONotCreated(value, elGetter);
}


/* eslint-enable */
