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
    LocalDistinguishedName,
    _decode_LocalDistinguishedName,
    _encode_LocalDistinguishedName,
} from '../NLM/LocalDistinguishedName.ta.mjs';
export {
    LocalDistinguishedName,
    _decode_LocalDistinguishedName,
    _encode_LocalDistinguishedName,
} from '../NLM/LocalDistinguishedName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION LocalDistinguishedNames */
/**
 * @summary LocalDistinguishedNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalDistinguishedNames  ::=  SET OF LocalDistinguishedName
 * ```
 */
export type LocalDistinguishedNames = LocalDistinguishedName[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION LocalDistinguishedNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalDistinguishedNames */
let _cached_decoder_for_LocalDistinguishedNames: $.ASN1Decoder<LocalDistinguishedNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalDistinguishedNames */

/* START_OF_SYMBOL_DEFINITION _decode_LocalDistinguishedNames */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalDistinguishedNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalDistinguishedNames} The decoded data structure.
 */
export function _decode_LocalDistinguishedNames(el: _Element) {
    if (!_cached_decoder_for_LocalDistinguishedNames) {
        _cached_decoder_for_LocalDistinguishedNames = $._decodeSetOf<LocalDistinguishedName>(
            () => _decode_LocalDistinguishedName
        );
    }
    return _cached_decoder_for_LocalDistinguishedNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalDistinguishedNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalDistinguishedNames */
let _cached_encoder_for_LocalDistinguishedNames: $.ASN1Encoder<LocalDistinguishedNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalDistinguishedNames */

/* START_OF_SYMBOL_DEFINITION _encode_LocalDistinguishedNames */
/**
 * @summary Encodes a(n) LocalDistinguishedNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalDistinguishedNames, encoded as an ASN.1 Element.
 */
export function _encode_LocalDistinguishedNames(
    value: LocalDistinguishedNames,
    elGetter: $.ASN1Encoder<LocalDistinguishedNames>
) {
    if (!_cached_encoder_for_LocalDistinguishedNames) {
        _cached_encoder_for_LocalDistinguishedNames = $._encodeSetOf<LocalDistinguishedName>(
            () => _encode_LocalDistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_LocalDistinguishedNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalDistinguishedNames */

/* eslint-enable */
