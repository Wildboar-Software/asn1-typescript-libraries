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
 * @summary FDCOupdate_Item_status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-status ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FDCOupdate_Item_status = INTEGER;

/**
 * @summary FDCOupdate_Item_status_active
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_active: FDCOupdate_Item_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_active
 * @constant
 * @type {number}
 */
export
const active: FDCOupdate_Item_status = FDCOupdate_Item_status_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_inactive
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_inactive: FDCOupdate_Item_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_inactive
 * @constant
 * @type {number}
 */
export
const inactive: FDCOupdate_Item_status = FDCOupdate_Item_status_inactive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_void_
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_void_: FDCOupdate_Item_status = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_void_
 * @constant
 * @type {number}
 */
export
const void_: FDCOupdate_Item_status = FDCOupdate_Item_status_void_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FDCOupdate_Item_status = $._decodeInteger;
export const _encode_FDCOupdate_Item_status = $._encodeInteger;


/* eslint-enable */
