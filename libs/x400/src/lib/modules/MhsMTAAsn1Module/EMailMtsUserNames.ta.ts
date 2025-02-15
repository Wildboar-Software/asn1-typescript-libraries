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
    EMailMtsUserName,
    _decode_EMailMtsUserName,
    _encode_EMailMtsUserName,
} from '../MhsMTAAsn1Module/EMailMtsUserName.ta';
export {
    EMailMtsUserName,
    _decode_EMailMtsUserName,
    _encode_EMailMtsUserName,
} from '../MhsMTAAsn1Module/EMailMtsUserName.ta';

/* START_OF_SYMBOL_DEFINITION EMailMtsUserNames */
/**
 * @summary EMailMtsUserNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMtsUserNames  ::=  SET OF EMailMtsUserName
 * ```
 */
export type EMailMtsUserNames = EMailMtsUserName[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EMailMtsUserNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtsUserNames */
let _cached_decoder_for_EMailMtsUserNames: $.ASN1Decoder<EMailMtsUserNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailMtsUserNames */

/* START_OF_SYMBOL_DEFINITION _decode_EMailMtsUserNames */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailMtsUserNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMtsUserNames} The decoded data structure.
 */
export function _decode_EMailMtsUserNames(el: _Element) {
    if (!_cached_decoder_for_EMailMtsUserNames) {
        _cached_decoder_for_EMailMtsUserNames = $._decodeSetOf<EMailMtsUserName>(
            () => _decode_EMailMtsUserName
        );
    }
    return _cached_decoder_for_EMailMtsUserNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailMtsUserNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtsUserNames */
let _cached_encoder_for_EMailMtsUserNames: $.ASN1Encoder<EMailMtsUserNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailMtsUserNames */

/* START_OF_SYMBOL_DEFINITION _encode_EMailMtsUserNames */
/**
 * @summary Encodes a(n) EMailMtsUserNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMtsUserNames, encoded as an ASN.1 Element.
 */
export function _encode_EMailMtsUserNames(
    value: EMailMtsUserNames,
    elGetter: $.ASN1Encoder<EMailMtsUserNames>
) {
    if (!_cached_encoder_for_EMailMtsUserNames) {
        _cached_encoder_for_EMailMtsUserNames = $._encodeSetOf<EMailMtsUserName>(
            () => _encode_EMailMtsUserName,
            $.BER
        );
    }
    return _cached_encoder_for_EMailMtsUserNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailMtsUserNames */

/* eslint-enable */
