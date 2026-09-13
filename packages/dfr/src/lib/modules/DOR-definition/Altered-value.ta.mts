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
 * @summary Altered_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Altered-value  ::=  ENUMERATED {
 *   value-not-altered(1), value-altered(2), undefined(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Altered_value {
    value_not_altered = 1,
    value_altered = 2,
    undefined = 3,
}

/**
 * @summary Altered_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Altered-value  ::=  ENUMERATED {
 *   value-not-altered(1), value-altered(2), undefined(3)}
 * ```
 * 
 * @enum {number}
 */
export
type Altered_value = _enum_for_Altered_value;

/**
 * @summary Altered_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Altered-value  ::=  ENUMERATED {
 *   value-not-altered(1), value-altered(2), undefined(3)}
 * ```
 * 
 * @enum {number}
 */
export
const Altered_value = _enum_for_Altered_value;

/**
 * @summary Altered_value_value_not_altered
 * @constant
 * @type {number}
 */
export
const Altered_value_value_not_altered: Altered_value = Altered_value.value_not_altered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary value_not_altered
 * @constant
 * @type {number}
 */
export
const value_not_altered: Altered_value = Altered_value.value_not_altered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Altered_value_value_altered
 * @constant
 * @type {number}
 */
export
const Altered_value_value_altered: Altered_value = Altered_value.value_altered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary value_altered
 * @constant
 * @type {number}
 */
export
const value_altered: Altered_value = Altered_value.value_altered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Altered_value_undefined
 * @constant
 * @type {number}
 */
export
const Altered_value_undefined: Altered_value = Altered_value.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: Altered_value = Altered_value.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Altered_value = $._decodeEnumerated;
export const _encode_Altered_value = $._encodeEnumerated;


/* eslint-enable */
