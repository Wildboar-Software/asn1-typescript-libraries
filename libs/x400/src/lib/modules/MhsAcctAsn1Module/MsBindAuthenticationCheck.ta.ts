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
    AuthenticationCheck,
    AuthenticationCheck_validated /* IMPORTED_LONG_NAMED_INTEGER */,
    validated /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationCheck_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AuthenticationCheck,
    _encode_AuthenticationCheck,
} from '../MhsAcctAsn1Module/AuthenticationCheck.ta';
export {
    AuthenticationCheck,
    AuthenticationCheck_validated /* IMPORTED_LONG_NAMED_INTEGER */,
    validated /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationCheck_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AuthenticationCheck,
    _encode_AuthenticationCheck,
} from '../MhsAcctAsn1Module/AuthenticationCheck.ta';

/* START_OF_SYMBOL_DEFINITION MsBindAuthenticationCheck */
/**
 * @summary MsBindAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MsBindAuthenticationCheck  ::=  AuthenticationCheck
 * ```
 */
export type MsBindAuthenticationCheck = AuthenticationCheck; // DefinedType
/* END_OF_SYMBOL_DEFINITION MsBindAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MsBindAuthenticationCheck */
let _cached_decoder_for_MsBindAuthenticationCheck: $.ASN1Decoder<MsBindAuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MsBindAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _decode_MsBindAuthenticationCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) MsBindAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MsBindAuthenticationCheck} The decoded data structure.
 */
export function _decode_MsBindAuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_MsBindAuthenticationCheck) {
        _cached_decoder_for_MsBindAuthenticationCheck = _decode_AuthenticationCheck;
    }
    return _cached_decoder_for_MsBindAuthenticationCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MsBindAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MsBindAuthenticationCheck */
let _cached_encoder_for_MsBindAuthenticationCheck: $.ASN1Encoder<MsBindAuthenticationCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MsBindAuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _encode_MsBindAuthenticationCheck */
/**
 * @summary Encodes a(n) MsBindAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsBindAuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_MsBindAuthenticationCheck(
    value: MsBindAuthenticationCheck,
    elGetter: $.ASN1Encoder<MsBindAuthenticationCheck>
) {
    if (!_cached_encoder_for_MsBindAuthenticationCheck) {
        _cached_encoder_for_MsBindAuthenticationCheck = _encode_AuthenticationCheck;
    }
    return _cached_encoder_for_MsBindAuthenticationCheck(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MsBindAuthenticationCheck */

/* eslint-enable */
