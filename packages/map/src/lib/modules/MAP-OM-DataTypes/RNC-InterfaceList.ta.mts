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
 * @summary RNC_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RNC-InterfaceList  ::=  BIT STRING {
 *     iu (0),
 *     iur (1),
 *     iub (2),
 *     uu (3)} (SIZE (4..8))
 * ```
 */
export
type RNC_InterfaceList = BIT_STRING;

/**
 * @summary RNC_InterfaceList_iu
 * @constant
 */
export
const RNC_InterfaceList_iu: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary iu
 * @constant
 */
export
const iu: number = RNC_InterfaceList_iu; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_iur
 * @constant
 */
export
const RNC_InterfaceList_iur: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary iur
 * @constant
 */
export
const iur: number = RNC_InterfaceList_iur; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_iub
 * @constant
 */
export
const RNC_InterfaceList_iub: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary iub
 * @constant
 */
export
const iub: number = RNC_InterfaceList_iub; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_uu
 * @constant
 */
export
const RNC_InterfaceList_uu: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary uu
 * @constant
 */
export
const uu: number = RNC_InterfaceList_uu; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) RNC_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RNC_InterfaceList = (el: _Element): RNC_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 4 || value.length > 8) {
        throw new ASN1SizeError("RNC_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RNC_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RNC_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_RNC_InterfaceList = $._encodeBitString;


/* eslint-enable */
