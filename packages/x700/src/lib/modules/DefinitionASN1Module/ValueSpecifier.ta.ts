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
    DefinedValue,
    _decode_DefinedValue,
    _encode_DefinedValue,
} from '../DefinitionASN1Module/DefinedValue.ta.js';
export {
    DefinedValue,
    _decode_DefinedValue,
    _encode_DefinedValue,
} from '../DefinitionASN1Module/DefinedValue.ta.js';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.js';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.js';

/* START_OF_SYMBOL_DEFINITION ValueSpecifier */
/**
 * @summary ValueSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValueSpecifier  ::=  CHOICE {
 *   valueReference  [0]  DefinedValue,
 *   derivationRule  [1]  TemplateLabel
 * }
 * ```
 */
export type ValueSpecifier =
    | { valueReference: DefinedValue } /* CHOICE_ALT_ROOT */
    | { derivationRule: TemplateLabel } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ValueSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValueSpecifier */
let _cached_decoder_for_ValueSpecifier: $.ASN1Decoder<ValueSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValueSpecifier */

/* START_OF_SYMBOL_DEFINITION _decode_ValueSpecifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ValueSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValueSpecifier} The decoded data structure.
 */
export function _decode_ValueSpecifier(el: _Element) {
    if (!_cached_decoder_for_ValueSpecifier) {
        _cached_decoder_for_ValueSpecifier = $._decode_inextensible_choice<ValueSpecifier>(
            {
                'CONTEXT 0': [
                    'valueReference',
                    $._decode_implicit<DefinedValue>(
                        () => _decode_DefinedValue
                    ),
                ],
                'CONTEXT 1': [
                    'derivationRule',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ValueSpecifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValueSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValueSpecifier */
let _cached_encoder_for_ValueSpecifier: $.ASN1Encoder<ValueSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValueSpecifier */

/* START_OF_SYMBOL_DEFINITION _encode_ValueSpecifier */
/**
 * @summary Encodes a(n) ValueSpecifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_ValueSpecifier(
    value: ValueSpecifier,
    elGetter: $.ASN1Encoder<ValueSpecifier>
) {
    if (!_cached_encoder_for_ValueSpecifier) {
        _cached_encoder_for_ValueSpecifier = $._encode_choice<ValueSpecifier>(
            {
                valueReference: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DefinedValue,
                    $.BER
                ),
                derivationRule: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ValueSpecifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValueSpecifier */

/* eslint-enable */
