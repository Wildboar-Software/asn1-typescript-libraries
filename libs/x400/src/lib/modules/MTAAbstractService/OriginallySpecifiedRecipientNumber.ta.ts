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

/* START_OF_SYMBOL_DEFINITION OriginallySpecifiedRecipientNumber */
/**
 * @summary OriginallySpecifiedRecipientNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginallySpecifiedRecipientNumber  ::=  INTEGER(1..ub-recipients)
 * ```
 */
export type OriginallySpecifiedRecipientNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION OriginallySpecifiedRecipientNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginallySpecifiedRecipientNumber */
let _cached_decoder_for_OriginallySpecifiedRecipientNumber: $.ASN1Decoder<OriginallySpecifiedRecipientNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginallySpecifiedRecipientNumber */

/* START_OF_SYMBOL_DEFINITION _decode_OriginallySpecifiedRecipientNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginallySpecifiedRecipientNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginallySpecifiedRecipientNumber} The decoded data structure.
 */
export function _decode_OriginallySpecifiedRecipientNumber(el: _Element) {
    if (!_cached_decoder_for_OriginallySpecifiedRecipientNumber) {
        _cached_decoder_for_OriginallySpecifiedRecipientNumber =
            $._decodeInteger;
    }
    return _cached_decoder_for_OriginallySpecifiedRecipientNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginallySpecifiedRecipientNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginallySpecifiedRecipientNumber */
let _cached_encoder_for_OriginallySpecifiedRecipientNumber: $.ASN1Encoder<OriginallySpecifiedRecipientNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginallySpecifiedRecipientNumber */

/* START_OF_SYMBOL_DEFINITION _encode_OriginallySpecifiedRecipientNumber */
/**
 * @summary Encodes a(n) OriginallySpecifiedRecipientNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginallySpecifiedRecipientNumber, encoded as an ASN.1 Element.
 */
export function _encode_OriginallySpecifiedRecipientNumber(
    value: OriginallySpecifiedRecipientNumber,
    elGetter: $.ASN1Encoder<OriginallySpecifiedRecipientNumber>
) {
    if (!_cached_encoder_for_OriginallySpecifiedRecipientNumber) {
        _cached_encoder_for_OriginallySpecifiedRecipientNumber =
            $._encodeInteger;
    }
    return _cached_encoder_for_OriginallySpecifiedRecipientNumber(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginallySpecifiedRecipientNumber */

/* eslint-enable */
