/* eslint-disable */
import {
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
import {
    PossibleError,
    _decode_PossibleError,
    _encode_PossibleError,
} from '../UsageMeteringFunction/PossibleError.ta.mjs';
/**
 * @summary DataErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataErrors  ::=  CHOICE {
 *   possibleErrors  SET OF PossibleError,
 *   noProblem       NULL
 * }
 * ```
 */
export type DataErrors =
    | { possibleErrors: PossibleError[] } /* CHOICE_ALT_ROOT */
    | { noProblem: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DataErrors: $.ASN1Decoder<DataErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataErrors} The decoded data structure.
 */
export function _decode_DataErrors(el: _Element): DataErrors {
    if (!_cached_decoder_for_DataErrors) {
        _cached_decoder_for_DataErrors = $._decode_inextensible_choice<DataErrors>(
            {
                'UNIVERSAL 17': [
                    'possibleErrors',
                    $._decodeSetOf<PossibleError>(() => _decode_PossibleError),
                ],
                'UNIVERSAL 5': ['noProblem', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_DataErrors(el);
}

let _cached_encoder_for_DataErrors: $.ASN1Encoder<DataErrors> | null = null;

/**
 * @summary Encodes a(n) DataErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataErrors, encoded as an ASN.1 Element.
 */
export function _encode_DataErrors(
    value: DataErrors,
    elGetter: $.ASN1Encoder<DataErrors>
): _Element {
    if (!_cached_encoder_for_DataErrors) {
        _cached_encoder_for_DataErrors = $._encode_choice<DataErrors>(
            {
                possibleErrors: $._encodeSetOf<PossibleError>(
                    () => _encode_PossibleError,
                    $.BER
                ),
                noProblem: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataErrors(value, elGetter);
}


/* eslint-enable */
