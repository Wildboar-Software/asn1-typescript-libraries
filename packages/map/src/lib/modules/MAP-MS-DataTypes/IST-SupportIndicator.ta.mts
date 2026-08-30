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
enum _enum_for_IST_SupportIndicator {
    basicISTSupported = 0,
    istCommandSupported = 1,
}

/**
 * @summary IST_SupportIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-SupportIndicator  ::=   ENUMERATED {
 *     basicISTSupported    (0),
 *     istCommandSupported    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type IST_SupportIndicator = _enum_for_IST_SupportIndicator | ENUMERATED;

/**
 * @summary IST_SupportIndicator_basicISTSupported
 * @constant
 * @type {number}
 */
export
const IST_SupportIndicator_basicISTSupported: IST_SupportIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicISTSupported
 * @constant
 * @type {number}
 */
export
const basicISTSupported: IST_SupportIndicator = IST_SupportIndicator_basicISTSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IST_SupportIndicator_istCommandSupported
 * @constant
 * @type {number}
 */
export
const IST_SupportIndicator_istCommandSupported: IST_SupportIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary istCommandSupported
 * @constant
 * @type {number}
 */
export
const istCommandSupported: IST_SupportIndicator = IST_SupportIndicator_istCommandSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IST_SupportIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IST_SupportIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IST_SupportIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_SupportIndicator, encoded as an ASN.1 Element.
 */
export const _encode_IST_SupportIndicator = $._encodeEnumerated;


/* eslint-enable */
