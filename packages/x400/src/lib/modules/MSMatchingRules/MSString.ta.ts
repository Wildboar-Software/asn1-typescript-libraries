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

/* START_OF_SYMBOL_DEFINITION MSString */
/**
 * @summary MSString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSString{INTEGER:maxSize}  ::=  CHOICE {
 *   printable  PrintableString(SIZE (1..maxSize)),
 *   teletex    TeletexString(SIZE (1..maxSize)),
 *   general    GeneralString(SIZE (1..maxSize)),
 *   universal  UniversalString(SIZE (1..maxSize)),
 *   bmp        BMPString(SIZE (1..maxSize))
 * }
 * ```
 */
export type MSString =
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */
    | { teletex: TeletexString } /* CHOICE_ALT_ROOT */
    | { general: GeneralString } /* CHOICE_ALT_ROOT */
    | { universal: UniversalString } /* CHOICE_ALT_ROOT */
    | { bmp: BMPString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MSString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSString */
let _cached_decoder_for_MSString: $.ASN1Decoder<MSString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSString */

/* START_OF_SYMBOL_DEFINITION _decode_MSString */
/**
 * @summary Decodes an ASN.1 element into a(n) MSString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSString} The decoded data structure.
 */
export function _decode_MSString(el: _Element) {
    if (!_cached_decoder_for_MSString) {
        _cached_decoder_for_MSString = $._decode_inextensible_choice<MSString>({
            'UNIVERSAL 19': ['printable', $._decodePrintableString],
            'UNIVERSAL 20': ['teletex', $._decodeTeletexString],
            'UNIVERSAL 27': ['general', $._decodeGeneralString],
            'UNIVERSAL 28': ['universal', $._decodeUniversalString],
            'UNIVERSAL 30': ['bmp', $._decodeBMPString],
        });
    }
    return _cached_decoder_for_MSString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSString */
let _cached_encoder_for_MSString: $.ASN1Encoder<MSString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSString */

/* START_OF_SYMBOL_DEFINITION _encode_MSString */
/**
 * @summary Encodes a(n) MSString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSString, encoded as an ASN.1 Element.
 */
export function _encode_MSString(
    value: MSString,
    elGetter: $.ASN1Encoder<MSString>
) {
    if (!_cached_encoder_for_MSString) {
        _cached_encoder_for_MSString = $._encode_choice<MSString>(
            {
                printable: $._encodePrintableString,
                teletex: $._encodeTeletexString,
                general: $._encodeGeneralString,
                universal: $._encodeUniversalString,
                bmp: $._encodeBMPString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSString */

/* eslint-enable */
