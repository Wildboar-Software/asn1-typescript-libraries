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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
import {
    PDUReception,
    _decode_PDUReception,
    _encode_PDUReception,
} from '../TestCategories-ASN1Module/PDUReception.ta.mjs';
export {
    PDUReception,
    _decode_PDUReception,
    _encode_PDUReception,
} from '../TestCategories-ASN1Module/PDUReception.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ContCond */
/**
 * @summary ContCond
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContCond  ::=  CHOICE {intervalTime  Timespec,
 *                      pDUReception  PDUReception
 * }
 * ```
 */
export type ContCond =
    | { intervalTime: Timespec } /* CHOICE_ALT_ROOT */
    | { pDUReception: PDUReception } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ContCond */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContCond */
let _cached_decoder_for_ContCond: $.ASN1Decoder<ContCond> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContCond */

/* START_OF_SYMBOL_DEFINITION _decode_ContCond */
/**
 * @summary Decodes an ASN.1 element into a(n) ContCond
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContCond} The decoded data structure.
 */
export function _decode_ContCond(el: _Element) {
    if (!_cached_decoder_for_ContCond) {
        _cached_decoder_for_ContCond = $._decode_inextensible_choice<ContCond>({
            'CONTEXT 22': ['intervalTime', _decode_Timespec],
            'CONTEXT 23': ['intervalTime', _decode_Timespec],
            'CONTEXT 24': ['intervalTime', _decode_Timespec],
            'CONTEXT 25': ['intervalTime', _decode_Timespec],
            'CONTEXT 26': ['intervalTime', _decode_Timespec],
            'CONTEXT 27': ['intervalTime', _decode_Timespec],
            'CONTEXT 28': ['intervalTime', _decode_Timespec],
            'UNIVERSAL 16': ['pDUReception', _decode_PDUReception],
        });
    }
    return _cached_decoder_for_ContCond(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContCond */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContCond */
let _cached_encoder_for_ContCond: $.ASN1Encoder<ContCond> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContCond */

/* START_OF_SYMBOL_DEFINITION _encode_ContCond */
/**
 * @summary Encodes a(n) ContCond into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContCond, encoded as an ASN.1 Element.
 */
export function _encode_ContCond(
    value: ContCond,
    elGetter: $.ASN1Encoder<ContCond>
) {
    if (!_cached_encoder_for_ContCond) {
        _cached_encoder_for_ContCond = $._encode_choice<ContCond>(
            {
                intervalTime: _encode_Timespec,
                pDUReception: _encode_PDUReception,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContCond(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContCond */

/* eslint-enable */
