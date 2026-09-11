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
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LSAOnlyAccessIndicator {
    accessOutsideLSAsAllowed = 0,
    accessOutsideLSAsRestricted = 1,
}

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
type LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator
 * @description
 *
 * Access right outside the subscribed localised service areas: allowed or
 * restricted. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAOnlyAccessIndicator  ::=  ENUMERATED {
 *     accessOutsideLSAsAllowed  (0),
 *     accessOutsideLSAsRestricted (1)}
 * ```
 * 
 * @enum {number}
 */
export
const LSAOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsAllowed
 * @description
 *
 * Access outside subscribed LSAs is allowed. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsAllowed
 * @description
 *
 * Access outside subscribed LSAs is allowed. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsAllowed: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LSAOnlyAccessIndicator_accessOutsideLSAsRestricted
 * @description
 *
 * Access outside subscribed LSAs is restricted. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const LSAOnlyAccessIndicator_accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessOutsideLSAsRestricted
 * @description
 *
 * Access outside subscribed LSAs is restricted. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.56)
 *
 * @constant
 * @type {number}
 */
export
const accessOutsideLSAsRestricted: LSAOnlyAccessIndicator = LSAOnlyAccessIndicator.accessOutsideLSAsRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LSAOnlyAccessIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LSAOnlyAccessIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LSAOnlyAccessIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAOnlyAccessIndicator, encoded as an ASN.1 Element.
 */
export const _encode_LSAOnlyAccessIndicator = $._encodeEnumerated;


/* eslint-enable */
