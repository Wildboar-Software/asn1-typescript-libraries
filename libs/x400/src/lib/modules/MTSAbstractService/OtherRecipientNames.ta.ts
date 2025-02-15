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
import {
    OtherRecipientName,
    _decode_OtherRecipientName,
    _encode_OtherRecipientName,
} from '../MTSAbstractService/OtherRecipientName.ta';
export {
    OtherRecipientName,
    _decode_OtherRecipientName,
    _encode_OtherRecipientName,
} from '../MTSAbstractService/OtherRecipientName.ta';

/* START_OF_SYMBOL_DEFINITION OtherRecipientNames */
/**
 * @summary OtherRecipientNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRecipientNames  ::=  SEQUENCE SIZE (1..ub-recipients) OF OtherRecipientName
 * ```
 */
export type OtherRecipientNames = OtherRecipientName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OtherRecipientNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientNames */
let _cached_decoder_for_OtherRecipientNames: $.ASN1Decoder<OtherRecipientNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientNames */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRecipientNames */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRecipientNames} The decoded data structure.
 */
export function _decode_OtherRecipientNames(el: _Element) {
    if (!_cached_decoder_for_OtherRecipientNames) {
        _cached_decoder_for_OtherRecipientNames = $._decodeSequenceOf<OtherRecipientName>(
            () => _decode_OtherRecipientName
        );
    }
    return _cached_decoder_for_OtherRecipientNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRecipientNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientNames */
let _cached_encoder_for_OtherRecipientNames: $.ASN1Encoder<OtherRecipientNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientNames */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRecipientNames */
/**
 * @summary Encodes a(n) OtherRecipientNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientNames, encoded as an ASN.1 Element.
 */
export function _encode_OtherRecipientNames(
    value: OtherRecipientNames,
    elGetter: $.ASN1Encoder<OtherRecipientNames>
) {
    if (!_cached_encoder_for_OtherRecipientNames) {
        _cached_encoder_for_OtherRecipientNames = $._encodeSequenceOf<OtherRecipientName>(
            () => _encode_OtherRecipientName,
            $.BER
        );
    }
    return _cached_encoder_for_OtherRecipientNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRecipientNames */

/* eslint-enable */
