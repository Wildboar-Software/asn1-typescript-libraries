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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CIO, _get_decoder_for_CIO, _get_encoder_for_CIO } from "../CryptographicInformationFramework/CIO.ta.mjs";
// export { CIO, _get_decoder_for_CIO, _get_encoder_for_CIO } from "../CryptographicInformationFramework/CIO.ta.mjs";
import { CommonAuthenticationObjectAttributes, _decode_CommonAuthenticationObjectAttributes, _encode_CommonAuthenticationObjectAttributes } from "../CryptographicInformationFramework/CommonAuthenticationObjectAttributes.ta.mjs";
// export { CommonAuthenticationObjectAttributes, _decode_CommonAuthenticationObjectAttributes, _encode_CommonAuthenticationObjectAttributes } from "../CryptographicInformationFramework/CommonAuthenticationObjectAttributes.ta.mjs";


/**
 * @summary AuthenticationObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationObject {AuthObjectAttributes}  ::=  CIO {
 *     CommonAuthenticationObjectAttributes,
 *     NULL,
 *     AuthObjectAttributes
 * }
 * ```
 */
export
type AuthenticationObject <AuthObjectAttributes> = CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>; // DefinedType

let _cached_decoder_for_AuthenticationObject: $.ASN1Decoder<AuthenticationObject<AuthObjectAttributes>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AuthenticationObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_AuthenticationObject<AuthObjectAttributes>(_decode_AuthObjectAttributes: $.ASN1Decoder<AuthObjectAttributes>): $.ASN1Decoder<AuthenticationObject<AuthObjectAttributes>> {
    return _get_decoder_for_CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>(_decode_CommonAuthenticationObjectAttributes, $._decodeNull, _decode_AuthObjectAttributes);
}

let _cached_encoder_for_AuthenticationObject: $.ASN1Encoder<AuthenticationObject<AuthObjectAttributes>> | null = null;

/**
 * @summary Returns a function that will encode a(n) AuthenticationObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AuthenticationObject as an ASN.1 element.
 */
export
function _get_encoder_for_AuthenticationObject<AuthObjectAttributes>(_encode_AuthObjectAttributes: $.ASN1Encoder<AuthObjectAttributes>): $.ASN1Encoder<AuthenticationObject<AuthObjectAttributes>> {
    return _get_encoder_for_CIO<CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes>(_encode_CommonAuthenticationObjectAttributes, $._encodeNull, _encode_AuthObjectAttributes);
}

/* eslint-enable */
