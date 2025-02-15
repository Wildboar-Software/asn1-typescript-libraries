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

/* START_OF_SYMBOL_DEFINITION ProblemCause */
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
/* END_OF_SYMBOL_DEFINITION ProblemCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProblemCause */
let _cached_decoder_for_ProblemCause: $.ASN1Decoder<ProblemCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProblemCause */

/* START_OF_SYMBOL_DEFINITION _decode_ProblemCause */
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
/* END_OF_SYMBOL_DEFINITION _decode_ProblemCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProblemCause */
let _cached_encoder_for_ProblemCause: $.ASN1Encoder<ProblemCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProblemCause */

/* START_OF_SYMBOL_DEFINITION _encode_ProblemCause */
/**
 * @summary Encodes a(n) ProblemCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ProblemCause */

/* eslint-enable */
