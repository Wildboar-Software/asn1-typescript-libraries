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

/* START_OF_SYMBOL_DEFINITION Date */
/**
 * @summary Date
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  CHOICE {time               GeneralizedTime,
 *                  noSuchInformation  NULL
 * }
 * ```
 */
export type Date =
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { noSuchInformation: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Date */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */
let _cached_decoder_for_Date: $.ASN1Decoder<Date> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _decode_Date */
/**
 * @summary Decodes an ASN.1 element into a(n) Date
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date} The decoded data structure.
 */
export function _decode_Date(el: _Element) {
    if (!_cached_decoder_for_Date) {
        _cached_decoder_for_Date = $._decode_inextensible_choice<Date>({
            'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            'UNIVERSAL 5': ['noSuchInformation', $._decodeNull],
        });
    }
    return _cached_decoder_for_Date(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Date */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */
let _cached_encoder_for_Date: $.ASN1Encoder<Date> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _encode_Date */
/**
 * @summary Encodes a(n) Date into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date, encoded as an ASN.1 Element.
 */
export function _encode_Date(value: Date, elGetter: $.ASN1Encoder<Date>) {
    if (!_cached_encoder_for_Date) {
        _cached_encoder_for_Date = $._encode_choice<Date>(
            {
                time: $._encodeGeneralizedTime,
                noSuchInformation: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Date(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Date */

/* eslint-enable */
