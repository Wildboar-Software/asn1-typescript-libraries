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

/* START_OF_SYMBOL_DEFINITION ResourceProblem */
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
/* END_OF_SYMBOL_DEFINITION ResourceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceProblem */
let _cached_decoder_for_ResourceProblem: $.ASN1Decoder<ResourceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceProblem */
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
/* END_OF_SYMBOL_DEFINITION _decode_ResourceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceProblem */
let _cached_encoder_for_ResourceProblem: $.ASN1Encoder<ResourceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceProblem */
/**
 * @summary Encodes a(n) ResourceProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ResourceProblem */

/* eslint-enable */
