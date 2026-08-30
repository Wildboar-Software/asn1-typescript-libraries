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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSC_S_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSC-S-InterfaceList  ::=  BIT STRING {
 *     a (0),
 *     iu (1),
 *     mc (2),
 *     map-g (3),
 *     map-b (4),
 *     map-e (5),
 *     map-f (6),
 *     cap (7),
 *     map-d (8),
 *     map-c (9)} (SIZE (10..16))
 * ```
 */
export
type MSC_S_InterfaceList = BIT_STRING;

/**
 * @summary MSC_S_InterfaceList_a
 * @constant
 */
export
const MSC_S_InterfaceList_a: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary a
 * @constant
 */
export
const a: number = MSC_S_InterfaceList_a; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_iu
 * @constant
 */
export
const MSC_S_InterfaceList_iu: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary iu
 * @constant
 */
export
const iu: number = MSC_S_InterfaceList_iu; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_mc
 * @constant
 */
export
const MSC_S_InterfaceList_mc: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mc
 * @constant
 */
export
const mc: number = MSC_S_InterfaceList_mc; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_g
 * @constant
 */
export
const MSC_S_InterfaceList_map_g: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary map_g
 * @constant
 */
export
const map_g: number = MSC_S_InterfaceList_map_g; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_b
 * @constant
 */
export
const MSC_S_InterfaceList_map_b: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary map_b
 * @constant
 */
export
const map_b: number = MSC_S_InterfaceList_map_b; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_e
 * @constant
 */
export
const MSC_S_InterfaceList_map_e: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary map_e
 * @constant
 */
export
const map_e: number = MSC_S_InterfaceList_map_e; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_f
 * @constant
 */
export
const MSC_S_InterfaceList_map_f: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary map_f
 * @constant
 */
export
const map_f: number = MSC_S_InterfaceList_map_f; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_cap
 * @constant
 */
export
const MSC_S_InterfaceList_cap: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary cap
 * @constant
 */
export
const cap: number = MSC_S_InterfaceList_cap; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_d
 * @constant
 */
export
const MSC_S_InterfaceList_map_d: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary map_d
 * @constant
 */
export
const map_d: number = MSC_S_InterfaceList_map_d; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_InterfaceList_map_c
 * @constant
 */
export
const MSC_S_InterfaceList_map_c: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary map_c
 * @constant
 */
export
const map_c: number = MSC_S_InterfaceList_map_c; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) MSC_S_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MSC_S_InterfaceList = (el: _Element): MSC_S_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 10 || value.length > 16) {
        throw new ASN1SizeError("MSC_S_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MSC_S_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSC_S_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_MSC_S_InterfaceList = $._encodeBitString;


/* eslint-enable */
