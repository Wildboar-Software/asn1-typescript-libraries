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
enum _enum_for_TraceDepthExtension {
    minimumWithoutVendorSpecificExtension = 0,
    mediumWithoutVendorSpecificExtension = 1,
    maximumWithoutVendorSpecificExtension = 2,
}

/**
 * @summary TraceDepthExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepthExtension  ::=  ENUMERATED {
 *     minimumWithoutVendorSpecificExtension (0),
 *     mediumWithoutVendorSpecificExtension (1),
 *     maximumWithoutVendorSpecificExtension (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type TraceDepthExtension = _enum_for_TraceDepthExtension | ENUMERATED;

/**
 * @summary TraceDepthExtension_minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepthExtension_minimumWithoutVendorSpecificExtension: TraceDepthExtension = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const minimumWithoutVendorSpecificExtension: TraceDepthExtension = TraceDepthExtension_minimumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepthExtension_mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepthExtension_mediumWithoutVendorSpecificExtension: TraceDepthExtension = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const mediumWithoutVendorSpecificExtension: TraceDepthExtension = TraceDepthExtension_mediumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepthExtension_maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepthExtension_maximumWithoutVendorSpecificExtension: TraceDepthExtension = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const maximumWithoutVendorSpecificExtension: TraceDepthExtension = TraceDepthExtension_maximumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepthExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceDepthExtension = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TraceDepthExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepthExtension, encoded as an ASN.1 Element.
 */
export const _encode_TraceDepthExtension = $._encodeEnumerated;


/* eslint-enable */
