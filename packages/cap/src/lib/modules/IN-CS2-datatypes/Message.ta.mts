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
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Message {
    rELease = 77,
    rELeaseCOMPlete = 90,
    fACility = 98,
}

/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
type Message = _enum_for_Message;

/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
const Message = _enum_for_Message;

/**
 * @summary Message_rELease
 * @constant
 * @type {number}
 */
export
const Message_rELease: Message = Message.rELease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease: Message = Message.rELease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Message_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const Message_rELeaseCOMPlete: Message = Message.rELeaseCOMPlete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete: Message = Message.rELeaseCOMPlete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Message_fACility
 * @constant
 * @type {number}
 */
export
const Message_fACility: Message = Message.fACility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility: Message = Message.fACility; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Message = $._decodeEnumerated;
export const _encode_Message = $._encodeEnumerated;


/* eslint-enable */
