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

/* START_OF_SYMBOL_DEFINITION Label */
/**
 * @summary Label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Label  ::=  INTEGER
 * ```
 */
export type Label = INTEGER;
/* END_OF_SYMBOL_DEFINITION Label */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */
let _cached_decoder_for_Label: $.ASN1Decoder<Label> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _decode_Label */
/**
 * @summary Decodes an ASN.1 element into a(n) Label
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Label} The decoded data structure.
 */
export function _decode_Label(el: _Element) {
    if (!_cached_decoder_for_Label) {
        _cached_decoder_for_Label = $._decodeInteger;
    }
    return _cached_decoder_for_Label(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Label */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */
let _cached_encoder_for_Label: $.ASN1Encoder<Label> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _encode_Label */
/**
 * @summary Encodes a(n) Label into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Label, encoded as an ASN.1 Element.
 */
export function _encode_Label(value: Label, elGetter: $.ASN1Encoder<Label>) {
    if (!_cached_encoder_for_Label) {
        _cached_encoder_for_Label = $._encodeInteger;
    }
    return _cached_encoder_for_Label(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Label */

/* eslint-enable */
