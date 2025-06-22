/* eslint-disable */
import {
    INTEGER,
    NULL,
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
 * @summary ResourceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceProblem  ::=  CHOICE {unknown       NULL,
 *                             integerValue  INTEGER
 * }
 * ```
 */
export type ResourceProblem =
    | { unknown: NULL } /* CHOICE_ALT_ROOT */
    | { integerValue: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ResourceProblem: $.ASN1Decoder<ResourceProblem> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResourceProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceProblem} The decoded data structure.
 */
export function _decode_ResourceProblem(el: _Element) {
    if (!_cached_decoder_for_ResourceProblem) {
        _cached_decoder_for_ResourceProblem = $._decode_inextensible_choice<ResourceProblem>(
            {
                'UNIVERSAL 5': ['unknown', $._decodeNull],
                'UNIVERSAL 2': ['integerValue', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_ResourceProblem(el);
}


let _cached_encoder_for_ResourceProblem: $.ASN1Encoder<ResourceProblem> | null = null;


/**
 * @summary Encodes a(n) ResourceProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceProblem, encoded as an ASN.1 Element.
 */
export function _encode_ResourceProblem(
    value: ResourceProblem,
    elGetter: $.ASN1Encoder<ResourceProblem>
) {
    if (!_cached_encoder_for_ResourceProblem) {
        _cached_encoder_for_ResourceProblem = $._encode_choice<ResourceProblem>(
            {
                unknown: $._encodeNull,
                integerValue: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResourceProblem(value, elGetter);
}


/* eslint-enable */
