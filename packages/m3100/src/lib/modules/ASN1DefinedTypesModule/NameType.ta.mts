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

/* START_OF_SYMBOL_DEFINITION NameType */
/**
 * @summary NameType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameType  ::=  CHOICE {numericName  INTEGER,
 *                      pString      GraphicString
 * }
 * ```
 */
export type NameType =
    | { numericName: INTEGER } /* CHOICE_ALT_ROOT */
    | { pString: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION NameType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameType */
let _cached_decoder_for_NameType: $.ASN1Decoder<NameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameType */

/* START_OF_SYMBOL_DEFINITION _decode_NameType */
/**
 * @summary Decodes an ASN.1 element into a(n) NameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameType} The decoded data structure.
 */
export function _decode_NameType(el: _Element) {
    if (!_cached_decoder_for_NameType) {
        _cached_decoder_for_NameType = $._decode_inextensible_choice<NameType>({
            'UNIVERSAL 2': ['numericName', $._decodeInteger],
            'UNIVERSAL 25': ['pString', $._decodeGraphicString],
        });
    }
    return _cached_decoder_for_NameType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameType */
let _cached_encoder_for_NameType: $.ASN1Encoder<NameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameType */

/* START_OF_SYMBOL_DEFINITION _encode_NameType */
/**
 * @summary Encodes a(n) NameType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameType, encoded as an ASN.1 Element.
 */
export function _encode_NameType(
    value: NameType,
    elGetter: $.ASN1Encoder<NameType>
) {
    if (!_cached_encoder_for_NameType) {
        _cached_encoder_for_NameType = $._encode_choice<NameType>(
            {
                numericName: $._encodeInteger,
                pString: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NameType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameType */

/* eslint-enable */
