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
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VersionConstraint {
    no_version_constraint = 0,
    version_unambiguity = 1,
}

/**
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint_no_version_constraint
 * @constant
 * @type {number}
 */
export
const VersionConstraint_no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_version_constraint
 * @constant
 * @type {number}
 */
export
const no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VersionConstraint_version_unambiguity
 * @constant
 * @type {number}
 */
export
const VersionConstraint_version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version_unambiguity
 * @constant
 * @type {number}
 */
export
const version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VersionConstraint = $._decodeEnumerated;
export const _encode_VersionConstraint = $._encodeEnumerated;


/* eslint-enable */
