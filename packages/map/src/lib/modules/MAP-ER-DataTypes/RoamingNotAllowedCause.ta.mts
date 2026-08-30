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
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamingNotAllowedCause {
    plmnRoamingNotAllowed = 0,
    operatorDeterminedBarring = 3,
}

/**
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
type RoamingNotAllowedCause = _enum_for_RoamingNotAllowedCause;

/**
 * @summary RoamingNotAllowedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedCause  ::=  ENUMERATED {
 *     plmnRoamingNotAllowed  (0),
 *     operatorDeterminedBarring  (3)}
 * ```
 * 
 * @enum {number}
 */
export
const RoamingNotAllowedCause = _enum_for_RoamingNotAllowedCause;

/**
 * @summary RoamingNotAllowedCause_plmnRoamingNotAllowed
 * @constant
 * @type {number}
 */
export
const RoamingNotAllowedCause_plmnRoamingNotAllowed: RoamingNotAllowedCause = RoamingNotAllowedCause.plmnRoamingNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnRoamingNotAllowed
 * @constant
 * @type {number}
 */
export
const plmnRoamingNotAllowed: RoamingNotAllowedCause = RoamingNotAllowedCause.plmnRoamingNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamingNotAllowedCause_operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const RoamingNotAllowedCause_operatorDeterminedBarring: RoamingNotAllowedCause = RoamingNotAllowedCause.operatorDeterminedBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const operatorDeterminedBarring: RoamingNotAllowedCause = RoamingNotAllowedCause.operatorDeterminedBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingNotAllowedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoamingNotAllowedCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RoamingNotAllowedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingNotAllowedCause, encoded as an ASN.1 Element.
 */
export const _encode_RoamingNotAllowedCause = $._encodeEnumerated;


/* eslint-enable */
