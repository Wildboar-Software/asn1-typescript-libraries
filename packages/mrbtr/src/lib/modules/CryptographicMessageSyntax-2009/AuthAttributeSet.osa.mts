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
import { aa_contentType } from "../CryptographicMessageSyntax-2009/aa-contentType.oa.mjs";
// export { aa_contentType } from "../CryptographicMessageSyntax-2009/aa-contentType.oa.mjs";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2009/aa-messageDigest.oa.mjs";
// export { aa_messageDigest } from "../CryptographicMessageSyntax-2009/aa-messageDigest.oa.mjs";
import { aa_signingTime } from "../CryptographicMessageSyntax-2009/aa-signingTime.oa.mjs";
// export { aa_signingTime } from "../CryptographicMessageSyntax-2009/aa-signingTime.oa.mjs";


/**
 * @summary AuthAttributeSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAttributeSet ATTRIBUTE ::= { aa-contentType | aa-messageDigest
 *                                     | aa-signingTime, ...}
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const AuthAttributeSet: (ATTRIBUTE)[] = [ aa_contentType, aa_messageDigest, aa_signingTime, ];

/* eslint-enable */
