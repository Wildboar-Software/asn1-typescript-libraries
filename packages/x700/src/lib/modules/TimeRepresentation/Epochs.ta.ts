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

/* START_OF_SYMBOL_DEFINITION Epochs */
/**
 * @summary Epochs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Epochs  ::=  INTEGER(-128..127)
 * ```
 */
export type Epochs = INTEGER;
/* END_OF_SYMBOL_DEFINITION Epochs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Epochs */
let _cached_decoder_for_Epochs: $.ASN1Decoder<Epochs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Epochs */

/* START_OF_SYMBOL_DEFINITION _decode_Epochs */
/**
 * @summary Decodes an ASN.1 element into a(n) Epochs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Epochs} The decoded data structure.
 */
export function _decode_Epochs(el: _Element) {
    if (!_cached_decoder_for_Epochs) {
        _cached_decoder_for_Epochs = $._decodeInteger;
    }
    return _cached_decoder_for_Epochs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Epochs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Epochs */
let _cached_encoder_for_Epochs: $.ASN1Encoder<Epochs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Epochs */

/* START_OF_SYMBOL_DEFINITION _encode_Epochs */
/**
 * @summary Encodes a(n) Epochs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Epochs, encoded as an ASN.1 Element.
 */
export function _encode_Epochs(value: Epochs, elGetter: $.ASN1Encoder<Epochs>) {
    if (!_cached_encoder_for_Epochs) {
        _cached_encoder_for_Epochs = $._encodeInteger;
    }
    return _cached_encoder_for_Epochs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Epochs */

/* eslint-enable */
