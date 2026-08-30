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



export
enum _enum_for_OccurrenceInfo {
    oneTimeEvent = 0,
    multipleTimeEvent = 1,
}

/**
 * @summary OccurrenceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceInfo  ::=  ENUMERATED {
 *     oneTimeEvent    (0),
 *     multipleTimeEvent    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type OccurrenceInfo = _enum_for_OccurrenceInfo | ENUMERATED;

/**
 * @summary OccurrenceInfo_oneTimeEvent
 * @constant
 * @type {number}
 */
export
const OccurrenceInfo_oneTimeEvent: OccurrenceInfo = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTimeEvent
 * @constant
 * @type {number}
 */
export
const oneTimeEvent: OccurrenceInfo = OccurrenceInfo_oneTimeEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OccurrenceInfo_multipleTimeEvent
 * @constant
 * @type {number}
 */
export
const OccurrenceInfo_multipleTimeEvent: OccurrenceInfo = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleTimeEvent
 * @constant
 * @type {number}
 */
export
const multipleTimeEvent: OccurrenceInfo = OccurrenceInfo_multipleTimeEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OccurrenceInfo = $._decodeEnumerated;

/**
 * @summary Encodes a(n) OccurrenceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceInfo, encoded as an ASN.1 Element.
 */
export const _encode_OccurrenceInfo = $._encodeEnumerated;


/* eslint-enable */
