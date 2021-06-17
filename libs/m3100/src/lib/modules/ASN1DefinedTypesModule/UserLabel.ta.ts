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

/* START_OF_SYMBOL_DEFINITION UserLabel */
/**
 * @summary UserLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserLabel  ::=  GraphicString
 * ```
 */
export type UserLabel = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION UserLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserLabel */
let _cached_decoder_for_UserLabel: $.ASN1Decoder<UserLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserLabel */

/* START_OF_SYMBOL_DEFINITION _decode_UserLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) UserLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserLabel} The decoded data structure.
 */
export function _decode_UserLabel(el: _Element) {
    if (!_cached_decoder_for_UserLabel) {
        _cached_decoder_for_UserLabel = $._decodeGraphicString;
    }
    return _cached_decoder_for_UserLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserLabel */
let _cached_encoder_for_UserLabel: $.ASN1Encoder<UserLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserLabel */

/* START_OF_SYMBOL_DEFINITION _encode_UserLabel */
/**
 * @summary Encodes a(n) UserLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserLabel, encoded as an ASN.1 Element.
 */
export function _encode_UserLabel(
    value: UserLabel,
    elGetter: $.ASN1Encoder<UserLabel>
) {
    if (!_cached_encoder_for_UserLabel) {
        _cached_encoder_for_UserLabel = $._encodeGraphicString;
    }
    return _cached_encoder_for_UserLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserLabel */

/* eslint-enable */
