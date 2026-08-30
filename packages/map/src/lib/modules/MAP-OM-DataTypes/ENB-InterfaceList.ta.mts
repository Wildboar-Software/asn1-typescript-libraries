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

let _cached_decoder_for_ENB_InterfaceList: $.ASN1Decoder<ENB_InterfaceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENB_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENB_InterfaceList (el: _Element): ENB_InterfaceList {
    if (!_cached_decoder_for_ENB_InterfaceList) { _cached_decoder_for_ENB_InterfaceList = $._decodeBitString; }
    return _cached_decoder_for_ENB_InterfaceList(el);
}

let _cached_encoder_for_ENB_InterfaceList: $.ASN1Encoder<ENB_InterfaceList> | null = null;

/**
 * @summary Encodes a(n) ENB_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENB_InterfaceList, encoded as an ASN.1 Element.
 */
export
function _encode_ENB_InterfaceList (value: ENB_InterfaceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENB_InterfaceList) { _cached_encoder_for_ENB_InterfaceList = $._encodeBitString; }
    return _cached_encoder_for_ENB_InterfaceList(value, elGetter);
}


/* eslint-enable */
