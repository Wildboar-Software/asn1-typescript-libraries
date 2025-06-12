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
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.js';
export {
    DefinedType,
    _decode_DefinedType,
    _encode_DefinedType,
} from '../DefinitionASN1Module/DefinedType.ta.js';

/* START_OF_SYMBOL_DEFINITION WithSyntax */
/**
 * @summary WithSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WithSyntax  ::=  CHOICE {present  DefinedType,
 *                        absent   NULL
 * }
 * ```
 */
export type WithSyntax =
    | { present: DefinedType } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION WithSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WithSyntax */
let _cached_decoder_for_WithSyntax: $.ASN1Decoder<WithSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WithSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_WithSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) WithSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WithSyntax} The decoded data structure.
 */
export function _decode_WithSyntax(el: _Element) {
    if (!_cached_decoder_for_WithSyntax) {
        _cached_decoder_for_WithSyntax = $._decode_inextensible_choice<WithSyntax>(
            {
                'UNIVERSAL 16': ['present', _decode_DefinedType],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_WithSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WithSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WithSyntax */
let _cached_encoder_for_WithSyntax: $.ASN1Encoder<WithSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WithSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_WithSyntax */
/**
 * @summary Encodes a(n) WithSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WithSyntax, encoded as an ASN.1 Element.
 */
export function _encode_WithSyntax(
    value: WithSyntax,
    elGetter: $.ASN1Encoder<WithSyntax>
) {
    if (!_cached_encoder_for_WithSyntax) {
        _cached_encoder_for_WithSyntax = $._encode_choice<WithSyntax>(
            {
                present: _encode_DefinedType,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_WithSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WithSyntax */

/* eslint-enable */
