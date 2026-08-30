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
enum _enum_for_DomainType {
    cs_Domain = 0,
    ps_Domain = 1,
}

/**
 * @summary DomainType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainType  ::=   ENUMERATED {
 *     cs-Domain    (0),
 *     ps-Domain    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DomainType = _enum_for_DomainType | ENUMERATED;

/**
 * @summary DomainType_cs_Domain
 * @constant
 * @type {number}
 */
export
const DomainType_cs_Domain: DomainType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cs_Domain
 * @constant
 * @type {number}
 */
export
const cs_Domain: DomainType = DomainType_cs_Domain; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DomainType_ps_Domain
 * @constant
 * @type {number}
 */
export
const DomainType_ps_Domain: DomainType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ps_Domain
 * @constant
 * @type {number}
 */
export
const ps_Domain: DomainType = DomainType_ps_Domain; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DomainType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DomainType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DomainType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainType, encoded as an ASN.1 Element.
 */
export const _encode_DomainType = $._encodeEnumerated;


/* eslint-enable */
