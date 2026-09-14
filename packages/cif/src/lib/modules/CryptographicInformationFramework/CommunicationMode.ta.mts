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



/**
 * @summary CommunicationMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationMode  ::=  BIT STRING {
 *     contact     (0),
 *     contactLess (1),
 *     usb         (2),
 *     nfc         (3),
 *     contactC6   (4)
 * }
 * ```
 */
export
type CommunicationMode = BIT_STRING;

/**
 * @summary CommunicationMode_contact
 * @constant
 */
export
const CommunicationMode_contact: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary contact
 * @constant
 */
export
const contact: number = CommunicationMode_contact; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_contactLess
 * @constant
 */
export
const CommunicationMode_contactLess: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary contactLess
 * @constant
 */
export
const contactLess: number = CommunicationMode_contactLess; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_usb
 * @constant
 */
export
const CommunicationMode_usb: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usb
 * @constant
 */
export
const usb: number = CommunicationMode_usb; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_nfc
 * @constant
 */
export
const CommunicationMode_nfc: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nfc
 * @constant
 */
export
const nfc: number = CommunicationMode_nfc; /* SHORT_NAMED_BIT */

/**
 * @summary CommunicationMode_contactC6
 * @constant
 */
export
const CommunicationMode_contactC6: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary contactC6
 * @constant
 */
export
const contactC6: number = CommunicationMode_contactC6; /* SHORT_NAMED_BIT */
export const _decode_CommunicationMode = $._decodeBitString;
export const _encode_CommunicationMode = $._encodeBitString;


/* eslint-enable */
