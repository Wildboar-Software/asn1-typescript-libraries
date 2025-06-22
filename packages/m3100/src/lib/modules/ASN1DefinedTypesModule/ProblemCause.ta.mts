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
 * @summary ProblemCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProblemCause  ::=  CHOICE {unknown       NULL,
 *                          integerValue  INTEGER
 * }
 * ```
 */
export type ProblemCause =
    | { unknown: NULL } /* CHOICE_ALT_ROOT */
    | { integerValue: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ProblemCause: $.ASN1Decoder<ProblemCause> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProblemCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProblemCause} The decoded data structure.
 */
export function _decode_ProblemCause(el: _Element) {
    if (!_cached_decoder_for_ProblemCause) {
        _cached_decoder_for_ProblemCause = $._decode_inextensible_choice<ProblemCause>(
            {
                'UNIVERSAL 5': ['unknown', $._decodeNull],
                'UNIVERSAL 2': ['integerValue', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_ProblemCause(el);
}


let _cached_encoder_for_ProblemCause: $.ASN1Encoder<ProblemCause> | null = null;


/**
 * @summary Encodes a(n) ProblemCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProblemCause, encoded as an ASN.1 Element.
 */
export function _encode_ProblemCause(
    value: ProblemCause,
    elGetter: $.ASN1Encoder<ProblemCause>
) {
    if (!_cached_encoder_for_ProblemCause) {
        _cached_encoder_for_ProblemCause = $._encode_choice<ProblemCause>(
            {
                unknown: $._encodeNull,
                integerValue: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProblemCause(value, elGetter);
}


/* eslint-enable */
