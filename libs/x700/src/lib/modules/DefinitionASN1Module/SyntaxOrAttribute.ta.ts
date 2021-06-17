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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta';
export {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';

/* START_OF_SYMBOL_DEFINITION SyntaxOrAttribute */
/**
 * @summary SyntaxOrAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SyntaxOrAttribute  ::=  CHOICE {
 *   withSyntax  [0]  DefinedType,
 *   attribute   [1]  TemplateLabel
 * }
 * ```
 */
export type SyntaxOrAttribute =
    | { withSyntax: DefinedType } /* CHOICE_ALT_ROOT */
    | { attribute: TemplateLabel } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SyntaxOrAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxOrAttribute */
let _cached_decoder_for_SyntaxOrAttribute: $.ASN1Decoder<SyntaxOrAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxOrAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_SyntaxOrAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) SyntaxOrAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SyntaxOrAttribute} The decoded data structure.
 */
export function _decode_SyntaxOrAttribute(el: _Element) {
    if (!_cached_decoder_for_SyntaxOrAttribute) {
        _cached_decoder_for_SyntaxOrAttribute = $._decode_inextensible_choice<SyntaxOrAttribute>(
            {
                'CONTEXT 0': [
                    'withSyntax',
                    $._decode_implicit<DefinedType>(() => _decode_DefinedType),
                ],
                'CONTEXT 1': [
                    'attribute',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SyntaxOrAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SyntaxOrAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxOrAttribute */
let _cached_encoder_for_SyntaxOrAttribute: $.ASN1Encoder<SyntaxOrAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxOrAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_SyntaxOrAttribute */
/**
 * @summary Encodes a(n) SyntaxOrAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SyntaxOrAttribute, encoded as an ASN.1 Element.
 */
export function _encode_SyntaxOrAttribute(
    value: SyntaxOrAttribute,
    elGetter: $.ASN1Encoder<SyntaxOrAttribute>
) {
    if (!_cached_encoder_for_SyntaxOrAttribute) {
        _cached_encoder_for_SyntaxOrAttribute = $._encode_choice<SyntaxOrAttribute>(
            {
                withSyntax: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DefinedType,
                    $.BER
                ),
                attribute: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SyntaxOrAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SyntaxOrAttribute */

/* eslint-enable */
