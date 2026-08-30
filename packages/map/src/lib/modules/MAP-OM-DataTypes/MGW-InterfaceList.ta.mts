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
 * @summary MGW_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MGW-InterfaceList  ::=  BIT STRING {
 *     mc (0),
 *     nb-up (1),
 *     iu-up (2)} (SIZE (3..8))
 * ```
 */
export
type MGW_InterfaceList = BIT_STRING;

/**
 * @summary MGW_InterfaceList_mc
 * @constant
 */
export
const MGW_InterfaceList_mc: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mc
 * @constant
 */
export
const mc: number = MGW_InterfaceList_mc; /* SHORT_NAMED_BIT */

/**
 * @summary MGW_InterfaceList_nb_up
 * @constant
 */
export
const MGW_InterfaceList_nb_up: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nb_up
 * @constant
 */
export
const nb_up: number = MGW_InterfaceList_nb_up; /* SHORT_NAMED_BIT */

/**
 * @summary MGW_InterfaceList_iu_up
 * @constant
 */
export
const MGW_InterfaceList_iu_up: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary iu_up
 * @constant
 */
export
const iu_up: number = MGW_InterfaceList_iu_up; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) MGW_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MGW_InterfaceList = (el: _Element): MGW_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("MGW_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MGW_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MGW_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_MGW_InterfaceList = $._encodeBitString;


/* eslint-enable */
