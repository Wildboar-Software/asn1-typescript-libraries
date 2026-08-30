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
 * @summary GGSN_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GGSN-InterfaceList  ::=  BIT STRING {
 *     gn (0),
 *     gi (1),
 *     gmb (2)} (SIZE (3..8))
 * ```
 */
export
type GGSN_InterfaceList = BIT_STRING;

/**
 * @summary GGSN_InterfaceList_gn
 * @constant
 */
export
const GGSN_InterfaceList_gn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary gn
 * @constant
 */
export
const gn: number = GGSN_InterfaceList_gn; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_InterfaceList_gi
 * @constant
 */
export
const GGSN_InterfaceList_gi: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary gi
 * @constant
 */
export
const gi: number = GGSN_InterfaceList_gi; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_InterfaceList_gmb
 * @constant
 */
export
const GGSN_InterfaceList_gmb: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gmb
 * @constant
 */
export
const gmb: number = GGSN_InterfaceList_gmb; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) GGSN_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GGSN_InterfaceList = (el: _Element): GGSN_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("GGSN_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GGSN_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GGSN_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_GGSN_InterfaceList = $._encodeBitString;


/* eslint-enable */
