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
 * @summary SGW_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGW-InterfaceList  ::=  BIT STRING {
 *     s4 (0),
 *     s5 (1),
 *     s8b (2),
 *     s11 (3),
 *     gxc (4)} (SIZE (5..8))
 * ```
 */
export
type SGW_InterfaceList = BIT_STRING;

/**
 * @summary SGW_InterfaceList_s4
 * @constant
 */
export
const SGW_InterfaceList_s4: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary s4
 * @constant
 */
export
const s4: number = SGW_InterfaceList_s4; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_InterfaceList_s5
 * @constant
 */
export
const SGW_InterfaceList_s5: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary s5
 * @constant
 */
export
const s5: number = SGW_InterfaceList_s5; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_InterfaceList_s8b
 * @constant
 */
export
const SGW_InterfaceList_s8b: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary s8b
 * @constant
 */
export
const s8b: number = SGW_InterfaceList_s8b; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_InterfaceList_s11
 * @constant
 */
export
const SGW_InterfaceList_s11: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary s11
 * @constant
 */
export
const s11: number = SGW_InterfaceList_s11; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_InterfaceList_gxc
 * @constant
 */
export
const SGW_InterfaceList_gxc: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary gxc
 * @constant
 */
export
const gxc: number = SGW_InterfaceList_gxc; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SGW_InterfaceList: $.ASN1Decoder<SGW_InterfaceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGW_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGW_InterfaceList (el: _Element): SGW_InterfaceList {
    if (!_cached_decoder_for_SGW_InterfaceList) { _cached_decoder_for_SGW_InterfaceList = $._decodeBitString; }
    return _cached_decoder_for_SGW_InterfaceList(el);
}

let _cached_encoder_for_SGW_InterfaceList: $.ASN1Encoder<SGW_InterfaceList> | null = null;

/**
 * @summary Encodes a(n) SGW_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGW_InterfaceList, encoded as an ASN.1 Element.
 */
export
function _encode_SGW_InterfaceList (value: SGW_InterfaceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGW_InterfaceList) { _cached_encoder_for_SGW_InterfaceList = $._encodeBitString; }
    return _cached_encoder_for_SGW_InterfaceList(value, elGetter);
}


/* eslint-enable */
