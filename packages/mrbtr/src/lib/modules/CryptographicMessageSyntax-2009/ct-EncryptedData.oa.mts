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
import { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../CryptographicMessageSyntax-2009/EncryptedData.ta.mjs";
// export { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../CryptographicMessageSyntax-2009/EncryptedData.ta.mjs";
import { id_encryptedData } from "../CryptographicMessageSyntax-2009/id-encryptedData.va.mjs";
// export { id_encryptedData } from "../CryptographicMessageSyntax-2009/id-encryptedData.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary ct_EncryptedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ct-EncryptedData CONTENT-TYPE ::= { EncryptedData IDENTIFIED BY id-encryptedData}
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<EncryptedData>}
 * @implements {CONTENT_TYPE<EncryptedData>}
 */
export
const ct_EncryptedData: CONTENT_TYPE<EncryptedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_EncryptedData,
    },
    encoderFor: {
        "&Type": _encode_EncryptedData,
    },
    "&id": id_encryptedData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
