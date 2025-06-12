/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
export {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
import {
    NumericMeasure_qualifiedValue,
    _decode_NumericMeasure_qualifiedValue,
    _encode_NumericMeasure_qualifiedValue,
} from '../SummarizationASN1Productions/NumericMeasure-qualifiedValue.ta.mjs';
export {
    NumericMeasure_qualifiedValue,
    _decode_NumericMeasure_qualifiedValue,
    _encode_NumericMeasure_qualifiedValue,
} from '../SummarizationASN1Productions/NumericMeasure-qualifiedValue.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NumericMeasure */
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
/* END_OF_SYMBOL_DEFINITION NumericMeasure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericMeasure */
let _cached_decoder_for_NumericMeasure: $.ASN1Decoder<NumericMeasure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericMeasure */

/* START_OF_SYMBOL_DEFINITION _decode_NumericMeasure */
/**
 * @summary Decodes an ASN.1 element into a(n) NumericMeasure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericMeasure} The decoded data structure.
 */
export function _decode_NumericMeasure(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_NumericMeasure */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericMeasure */
let _cached_encoder_for_NumericMeasure: $.ASN1Encoder<NumericMeasure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericMeasure */

/* START_OF_SYMBOL_DEFINITION _encode_NumericMeasure */
/**
 * @summary Encodes a(n) NumericMeasure into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericMeasure, encoded as an ASN.1 Element.
 */
export function _encode_NumericMeasure(
    value: NumericMeasure,
    elGetter: $.ASN1Encoder<NumericMeasure>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_NumericMeasure */

/* eslint-enable */
