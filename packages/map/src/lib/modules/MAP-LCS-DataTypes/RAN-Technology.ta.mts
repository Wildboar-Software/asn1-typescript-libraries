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
enum _enum_for_RAN_Technology {
    gsm = 0,
    umts = 1,
}

/**
 * @summary RAN_Technology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAN-Technology  ::=  ENUMERATED {
 *     gsm    (0),
 *     umts    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type RAN_Technology = _enum_for_RAN_Technology | ENUMERATED;

/**
 * @summary RAN_Technology_gsm
 * @constant
 * @type {number}
 */
export
const RAN_Technology_gsm: RAN_Technology = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm
 * @constant
 * @type {number}
 */
export
const gsm: RAN_Technology = RAN_Technology_gsm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RAN_Technology_umts
 * @constant
 * @type {number}
 */
export
const RAN_Technology_umts: RAN_Technology = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts
 * @constant
 * @type {number}
 */
export
const umts: RAN_Technology = RAN_Technology_umts; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RAN_Technology
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RAN_Technology = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RAN_Technology into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAN_Technology, encoded as an ASN.1 Element.
 */
export const _encode_RAN_Technology = $._encodeEnumerated;


/* eslint-enable */
