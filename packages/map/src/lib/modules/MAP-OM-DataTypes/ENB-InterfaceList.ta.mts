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
 * @summary ENB_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENB-InterfaceList  ::=  BIT STRING {
 *     s1-mme (0),
 *     x2 (1),
 *     uu (2)} (SIZE (3..8))
 * ```
 */
export
type ENB_InterfaceList = BIT_STRING;

/**
 * @summary ENB_InterfaceList_s1_mme
 * @constant
 */
export
const ENB_InterfaceList_s1_mme: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary s1_mme
 * @constant
 */
export
const s1_mme: number = ENB_InterfaceList_s1_mme; /* SHORT_NAMED_BIT */

/**
 * @summary ENB_InterfaceList_x2
 * @constant
 */
export
const ENB_InterfaceList_x2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary x2
 * @constant
 */
export
const x2: number = ENB_InterfaceList_x2; /* SHORT_NAMED_BIT */

/**
 * @summary ENB_InterfaceList_uu
 * @constant
 */
export
const ENB_InterfaceList_uu: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary uu
 * @constant
 */
export
const uu: number = ENB_InterfaceList_uu; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) ENB_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ENB_InterfaceList = (el: _Element): ENB_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("ENB_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ENB_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENB_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_ENB_InterfaceList = $._encodeBitString;


/* eslint-enable */
