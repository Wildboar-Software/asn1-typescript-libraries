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
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module';
import {
    NumericMeasure_qualifiedValue,
    _decode_NumericMeasure_qualifiedValue,
    _encode_NumericMeasure_qualifiedValue,
} from '../SummarizationASN1Productions/NumericMeasure-qualifiedValue.ta.mjs';
/**
 * @summary NumericMeasure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericMeasure  ::=  CHOICE {
 *   missingData     NULL,
 *   valueOnly       ObservedValue,
 *   qualifiedValue
 *     SEQUENCE {value        ObservedValue,
 *               timeStamp    TimePeriod OPTIONAL,
 *               -- time offset forward from scan initiation time in report.
 *               -- This CHOICE type required if timeStampReportMode attribute is present with value = 2
 *               suspectFlag  BOOLEAN DEFAULT FALSE
 *               -- at least one of timeStamp or suspectFlag shall be present
 *   }
 * }
 * ```
 */
export type NumericMeasure =
    | { missingData: NULL } /* CHOICE_ALT_ROOT */
    | { valueOnly: ObservedValue } /* CHOICE_ALT_ROOT */
    | { qualifiedValue: NumericMeasure_qualifiedValue } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NumericMeasure: $.ASN1Decoder<NumericMeasure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumericMeasure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericMeasure} The decoded data structure.
 */
export function _decode_NumericMeasure(el: _Element): NumericMeasure {
    if (!_cached_decoder_for_NumericMeasure) {
        _cached_decoder_for_NumericMeasure = $._decode_inextensible_choice<NumericMeasure>(
            {
                'UNIVERSAL 5': ['missingData', $._decodeNull],
                'UNIVERSAL 2': ['valueOnly', _decode_ObservedValue],
                'UNIVERSAL 9': ['valueOnly', _decode_ObservedValue],
                'UNIVERSAL 16': [
                    'qualifiedValue',
                    _decode_NumericMeasure_qualifiedValue,
                ],
            }
        );
    }
    return _cached_decoder_for_NumericMeasure(el);
}

let _cached_encoder_for_NumericMeasure: $.ASN1Encoder<NumericMeasure> | null = null;

/**
 * @summary Encodes a(n) NumericMeasure into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericMeasure, encoded as an ASN.1 Element.
 */
export function _encode_NumericMeasure(
    value: NumericMeasure,
    elGetter: $.ASN1Encoder<NumericMeasure>
): _Element {
    if (!_cached_encoder_for_NumericMeasure) {
        _cached_encoder_for_NumericMeasure = $._encode_choice<NumericMeasure>(
            {
                missingData: $._encodeNull,
                valueOnly: _encode_ObservedValue,
                qualifiedValue: _encode_NumericMeasure_qualifiedValue,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NumericMeasure(value, elGetter);
}


/* eslint-enable */
