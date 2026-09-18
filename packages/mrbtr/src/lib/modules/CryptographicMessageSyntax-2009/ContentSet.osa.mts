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
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
// export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
import { ct_Data } from "../CryptographicMessageSyntax-2009/ct-Data.oa.mjs";
// export { ct_Data } from "../CryptographicMessageSyntax-2009/ct-Data.oa.mjs";
import { ct_SignedData } from "../CryptographicMessageSyntax-2009/ct-SignedData.oa.mjs";
// export { ct_SignedData } from "../CryptographicMessageSyntax-2009/ct-SignedData.oa.mjs";
import { ct_EncryptedData } from "../CryptographicMessageSyntax-2009/ct-EncryptedData.oa.mjs";
// export { ct_EncryptedData } from "../CryptographicMessageSyntax-2009/ct-EncryptedData.oa.mjs";
import { ct_EnvelopedData } from "../CryptographicMessageSyntax-2009/ct-EnvelopedData.oa.mjs";
// export { ct_EnvelopedData } from "../CryptographicMessageSyntax-2009/ct-EnvelopedData.oa.mjs";
import { ct_AuthenticatedData } from "../CryptographicMessageSyntax-2009/ct-AuthenticatedData.oa.mjs";
// export { ct_AuthenticatedData } from "../CryptographicMessageSyntax-2009/ct-AuthenticatedData.oa.mjs";
import { ct_DigestedData } from "../CryptographicMessageSyntax-2009/ct-DigestedData.oa.mjs";
// export { ct_DigestedData } from "../CryptographicMessageSyntax-2009/ct-DigestedData.oa.mjs";


/**
 * @summary ContentSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentSet CONTENT-TYPE ::= {
 *     --  Define the set of content types to be recognized.
 *     ct-Data | ct-SignedData | ct-EncryptedData | ct-EnvelopedData |
 *     ct-AuthenticatedData | ct-DigestedData, ... }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE[]}
 * 
 */
export
const ContentSet: (CONTENT_TYPE)[] = [ ct_Data, ct_SignedData, ct_EncryptedData, ct_EnvelopedData, ct_AuthenticatedData, ct_DigestedData, ];

/* eslint-enable */
