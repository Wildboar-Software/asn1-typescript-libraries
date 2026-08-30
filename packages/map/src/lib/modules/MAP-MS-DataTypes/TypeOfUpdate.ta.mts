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
enum _enum_for_TypeOfUpdate {
    sgsn_change = 0,
    mme_change = 1,
}

/**
 * @summary TypeOfUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfUpdate  ::=  ENUMERATED {
 *     sgsn-change (0),
 *     mme-change (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfUpdate = _enum_for_TypeOfUpdate | ENUMERATED;

/**
 * @summary TypeOfUpdate_sgsn_change
 * @constant
 * @type {number}
 */
export
const TypeOfUpdate_sgsn_change: TypeOfUpdate = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn_change
 * @constant
 * @type {number}
 */
export
const sgsn_change: TypeOfUpdate = TypeOfUpdate_sgsn_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfUpdate_mme_change
 * @constant
 * @type {number}
 */
export
const TypeOfUpdate_mme_change: TypeOfUpdate = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme_change
 * @constant
 * @type {number}
 */
export
const mme_change: TypeOfUpdate = TypeOfUpdate_mme_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TypeOfUpdate = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TypeOfUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfUpdate, encoded as an ASN.1 Element.
 */
export const _encode_TypeOfUpdate = $._encodeEnumerated;


/* eslint-enable */
