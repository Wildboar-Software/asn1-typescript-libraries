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
import { AuthenticatedData, _decode_AuthenticatedData, _encode_AuthenticatedData } from "../CryptographicMessageSyntax-2009/AuthenticatedData.ta.mjs";
// export { AuthenticatedData, _decode_AuthenticatedData, _encode_AuthenticatedData } from "../CryptographicMessageSyntax-2009/AuthenticatedData.ta.mjs";
import { id_ct_authData } from "../CryptographicMessageSyntax-2009/id-ct-authData.va.mjs";
// export { id_ct_authData } from "../CryptographicMessageSyntax-2009/id-ct-authData.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary ct_AuthenticatedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ct-AuthenticatedData CONTENT-TYPE ::= { AuthenticatedData IDENTIFIED BY id-ct-authData}
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<AuthenticatedData>}
 * @implements {CONTENT_TYPE<AuthenticatedData>}
 */
export
const ct_AuthenticatedData: CONTENT_TYPE<AuthenticatedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AuthenticatedData,
    },
    encoderFor: {
        "&Type": _encode_AuthenticatedData,
    },
    "&id": id_ct_authData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
