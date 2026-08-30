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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary PGW_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGW-InterfaceList  ::=  BIT STRING {
 *     s2a (0),
 *     s2b (1),
 *     s2c (2),
 *     s5 (3),
 *     s6b (4),
 *     gx (5),
 *     s8b (6),
 *     sgi (7)} (SIZE (8..16))
 * ```
 */
export
type PGW_InterfaceList = BIT_STRING;

/**
 * @summary PGW_InterfaceList_s2a
 * @constant
 */
export
const PGW_InterfaceList_s2a: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary s2a
 * @constant
 */
export
const s2a: number = PGW_InterfaceList_s2a; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_s2b
 * @constant
 */
export
const PGW_InterfaceList_s2b: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary s2b
 * @constant
 */
export
const s2b: number = PGW_InterfaceList_s2b; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_s2c
 * @constant
 */
export
const PGW_InterfaceList_s2c: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary s2c
 * @constant
 */
export
const s2c: number = PGW_InterfaceList_s2c; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_s5
 * @constant
 */
export
const PGW_InterfaceList_s5: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary s5
 * @constant
 */
export
const s5: number = PGW_InterfaceList_s5; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_s6b
 * @constant
 */
export
const PGW_InterfaceList_s6b: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary s6b
 * @constant
 */
export
const s6b: number = PGW_InterfaceList_s6b; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_gx
 * @constant
 */
export
const PGW_InterfaceList_gx: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary gx
 * @constant
 */
export
const gx: number = PGW_InterfaceList_gx; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_s8b
 * @constant
 */
export
const PGW_InterfaceList_s8b: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary s8b
 * @constant
 */
export
const s8b: number = PGW_InterfaceList_s8b; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_InterfaceList_sgi
 * @constant
 */
export
const PGW_InterfaceList_sgi: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary sgi
 * @constant
 */
export
const sgi: number = PGW_InterfaceList_sgi; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PGW_InterfaceList: $.ASN1Decoder<PGW_InterfaceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PGW_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PGW_InterfaceList (el: _Element): PGW_InterfaceList {
    if (!_cached_decoder_for_PGW_InterfaceList) { _cached_decoder_for_PGW_InterfaceList = $._decodeBitString; }
    return _cached_decoder_for_PGW_InterfaceList(el);
}

let _cached_encoder_for_PGW_InterfaceList: $.ASN1Encoder<PGW_InterfaceList> | null = null;

/**
 * @summary Encodes a(n) PGW_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGW_InterfaceList, encoded as an ASN.1 Element.
 */
export
function _encode_PGW_InterfaceList (value: PGW_InterfaceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PGW_InterfaceList) { _cached_encoder_for_PGW_InterfaceList = $._encodeBitString; }
    return _cached_encoder_for_PGW_InterfaceList(value, elGetter);
}


/* eslint-enable */
