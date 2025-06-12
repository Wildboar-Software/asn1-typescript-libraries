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
    MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.js';
export {
    MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.js';

/* START_OF_SYMBOL_DEFINITION OriginalMessageOriginAuthenticationCheck */
/**
 * @summary OriginalMessageOriginAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalMessageOriginAuthenticationCheck  ::=  MessageOriginAuthenticationCheck
 * ```
 */
export type OriginalMessageOriginAuthenticationCheck = MessageOriginAuthenticationCheck; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginalMessageOriginAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalMessageOriginAuthenticationCheck */
let _cached_decoder_for_OriginalMessageOriginAuthenticationCheck: $.ASN1Decoder<OriginalMessageOriginAuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalMessageOriginAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _decode_OriginalMessageOriginAuthenticationCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginalMessageOriginAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalMessageOriginAuthenticationCheck} The decoded data structure.
 */
export function _decode_OriginalMessageOriginAuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_OriginalMessageOriginAuthenticationCheck) {
        _cached_decoder_for_OriginalMessageOriginAuthenticationCheck = _decode_MessageOriginAuthenticationCheck;
    }
    return _cached_decoder_for_OriginalMessageOriginAuthenticationCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginalMessageOriginAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalMessageOriginAuthenticationCheck */
let _cached_encoder_for_OriginalMessageOriginAuthenticationCheck: $.ASN1Encoder<OriginalMessageOriginAuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalMessageOriginAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _encode_OriginalMessageOriginAuthenticationCheck */
/**
 * @summary Encodes a(n) OriginalMessageOriginAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalMessageOriginAuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_OriginalMessageOriginAuthenticationCheck(
    value: OriginalMessageOriginAuthenticationCheck,
    elGetter: $.ASN1Encoder<OriginalMessageOriginAuthenticationCheck>
) {
    if (!_cached_encoder_for_OriginalMessageOriginAuthenticationCheck) {
        _cached_encoder_for_OriginalMessageOriginAuthenticationCheck = _encode_MessageOriginAuthenticationCheck;
    }
    return _cached_encoder_for_OriginalMessageOriginAuthenticationCheck(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginalMessageOriginAuthenticationCheck */

/* eslint-enable */
