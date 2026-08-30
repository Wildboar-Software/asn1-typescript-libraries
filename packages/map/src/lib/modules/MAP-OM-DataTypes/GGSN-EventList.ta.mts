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
 * @summary GGSN_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GGSN-EventList  ::=  BIT STRING {
 *     pdpContext (0),
 *     mbmsContext (1)} (SIZE (2..8))
 * ```
 */
export
type GGSN_EventList = BIT_STRING;

/**
 * @summary GGSN_EventList_pdpContext
 * @constant
 */
export
const GGSN_EventList_pdpContext: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pdpContext
 * @constant
 */
export
const pdpContext: number = GGSN_EventList_pdpContext; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_EventList_mbmsContext
 * @constant
 */
export
const GGSN_EventList_mbmsContext: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mbmsContext
 * @constant
 */
export
const mbmsContext: number = GGSN_EventList_mbmsContext; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) GGSN_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GGSN_EventList = (el: _Element): GGSN_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("GGSN_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GGSN_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GGSN_EventList, encoded as an ASN.1 Element.
 */
export const _encode_GGSN_EventList = $._encodeBitString;


/* eslint-enable */
