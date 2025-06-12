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
    AuthorizingUsersSubfield,
    _decode_AuthorizingUsersSubfield,
    _encode_AuthorizingUsersSubfield,
} from '../IPMSInformationObjects/AuthorizingUsersSubfield.ta.js';
export {
    AuthorizingUsersSubfield,
    _decode_AuthorizingUsersSubfield,
    _encode_AuthorizingUsersSubfield,
} from '../IPMSInformationObjects/AuthorizingUsersSubfield.ta.js';

/* START_OF_SYMBOL_DEFINITION AuthorizingUsersField */
/**
 * @summary AuthorizingUsersField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizingUsersField  ::=  SEQUENCE OF AuthorizingUsersSubfield
 * ```
 */
export type AuthorizingUsersField = AuthorizingUsersSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AuthorizingUsersField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizingUsersField */
let _cached_decoder_for_AuthorizingUsersField: $.ASN1Decoder<AuthorizingUsersField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizingUsersField */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizingUsersField */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizingUsersField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizingUsersField} The decoded data structure.
 */
export function _decode_AuthorizingUsersField(el: _Element) {
    if (!_cached_decoder_for_AuthorizingUsersField) {
        _cached_decoder_for_AuthorizingUsersField = $._decodeSequenceOf<AuthorizingUsersSubfield>(
            () => _decode_AuthorizingUsersSubfield
        );
    }
    return _cached_decoder_for_AuthorizingUsersField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizingUsersField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizingUsersField */
let _cached_encoder_for_AuthorizingUsersField: $.ASN1Encoder<AuthorizingUsersField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizingUsersField */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizingUsersField */
/**
 * @summary Encodes a(n) AuthorizingUsersField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizingUsersField, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizingUsersField(
    value: AuthorizingUsersField,
    elGetter: $.ASN1Encoder<AuthorizingUsersField>
) {
    if (!_cached_encoder_for_AuthorizingUsersField) {
        _cached_encoder_for_AuthorizingUsersField = $._encodeSequenceOf<AuthorizingUsersSubfield>(
            () => _encode_AuthorizingUsersSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_AuthorizingUsersField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizingUsersField */

/* eslint-enable */
