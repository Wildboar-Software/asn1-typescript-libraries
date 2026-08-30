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
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CliRestrictionOption {
    permanent = 0,
    temporaryDefaultRestricted = 1,
    temporaryDefaultAllowed = 2,
}

/**
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption_permanent
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_permanent: CliRestrictionOption = CliRestrictionOption.permanent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permanent
 * @constant
 * @type {number}
 */
export
const permanent: CliRestrictionOption = CliRestrictionOption.permanent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultRestricted
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultRestricted: CliRestrictionOption = CliRestrictionOption.temporaryDefaultRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultRestricted
 * @constant
 * @type {number}
 */
export
const temporaryDefaultRestricted: CliRestrictionOption = CliRestrictionOption.temporaryDefaultRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultAllowed
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultAllowed: CliRestrictionOption = CliRestrictionOption.temporaryDefaultAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultAllowed
 * @constant
 * @type {number}
 */
export
const temporaryDefaultAllowed: CliRestrictionOption = CliRestrictionOption.temporaryDefaultAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CliRestrictionOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CliRestrictionOption = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CliRestrictionOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CliRestrictionOption, encoded as an ASN.1 Element.
 */
export const _encode_CliRestrictionOption = $._encodeEnumerated;


/* eslint-enable */
