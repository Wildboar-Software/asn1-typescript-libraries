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
import { CommonKeyAttributes, _decode_CommonKeyAttributes, _encode_CommonKeyAttributes } from "../CryptographicInformationFramework/CommonKeyAttributes.ta.mjs";
// export { CommonKeyAttributes, _decode_CommonKeyAttributes, _encode_CommonKeyAttributes } from "../CryptographicInformationFramework/CommonKeyAttributes.ta.mjs";
import { CommonPrivateKeyAttributes, _decode_CommonPrivateKeyAttributes, _encode_CommonPrivateKeyAttributes } from "../CryptographicInformationFramework/CommonPrivateKeyAttributes.ta.mjs";
// export { CommonPrivateKeyAttributes, _decode_CommonPrivateKeyAttributes, _encode_CommonPrivateKeyAttributes } from "../CryptographicInformationFramework/CommonPrivateKeyAttributes.ta.mjs";


/**
 * @summary PrivateKeyObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateKeyObject {KeyAttributes}  ::=  CIO {
 *     CommonKeyAttributes,
 *     CommonPrivateKeyAttributes,
 *     KeyAttributes
 * }
 * ```
 */
export
type PrivateKeyObject <KeyAttributes> = CIO<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>; // DefinedType

let _cached_decoder_for_PrivateKeyObject: $.ASN1Decoder<PrivateKeyObject<KeyAttributes>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PrivateKeyObject
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PrivateKeyObject<KeyAttributes>(_decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>): $.ASN1Decoder<PrivateKeyObject<KeyAttributes>> {
    return _get_decoder_for_CIO<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonPrivateKeyAttributes, _decode_KeyAttributes);
}

let _cached_encoder_for_PrivateKeyObject: $.ASN1Encoder<PrivateKeyObject<KeyAttributes>> | null = null;

/**
 * @summary Returns a function that will encode a(n) PrivateKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PrivateKeyObject as an ASN.1 element.
 */
export
function _get_encoder_for_PrivateKeyObject<KeyAttributes>(_encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>): $.ASN1Encoder<PrivateKeyObject<KeyAttributes>> {
    return _get_encoder_for_CIO<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonPrivateKeyAttributes, _encode_KeyAttributes);
}

/* eslint-enable */
