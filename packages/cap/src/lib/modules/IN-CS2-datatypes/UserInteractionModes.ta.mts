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
 * @summary UserInteractionModes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInteractionModes  ::=  BIT STRING {voiceMessage(0), tone(1), display(2)}
 * ```
 */
export
type UserInteractionModes = BIT_STRING;

/**
 * @summary UserInteractionModes_voiceMessage
 * @constant
 */
export
const UserInteractionModes_voiceMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary voiceMessage
 * @constant
 */
export
const voiceMessage: number = UserInteractionModes_voiceMessage; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_tone
 * @constant
 */
export
const UserInteractionModes_tone: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary tone
 * @constant
 */
export
const tone: number = UserInteractionModes_tone; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_display
 * @constant
 */
export
const UserInteractionModes_display: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary display
 * @constant
 */
export
const display: number = UserInteractionModes_display; /* SHORT_NAMED_BIT */
export const _decode_UserInteractionModes = $._decodeBitString;
export const _encode_UserInteractionModes = $._encodeBitString;


/* eslint-enable */
