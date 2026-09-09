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
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BothwayThroughConnectionInd {
    bothwayPathRequired = 0,
    bothwayPathNotRequired = 1,
}

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
type BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
const BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd_bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BothwayThroughConnectionInd_bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_BothwayThroughConnectionInd = $._decodeEnumerated;
export const _encode_BothwayThroughConnectionInd = $._encodeEnumerated;


/* eslint-enable */
