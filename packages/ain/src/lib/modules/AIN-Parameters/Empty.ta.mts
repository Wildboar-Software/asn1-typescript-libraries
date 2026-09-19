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



/**
 * @summary Empty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Empty  ::=  BIT STRING{
 *         entireList(0),
 *         outgoingmemorySlot(1),
 *         incomingmemorySlot(2),
 *         forwardToDn(3)
 *     }
 * ```
 */
export
type Empty = BIT_STRING;

/**
 * @summary Empty_entireList
 * @constant
 */
export
const Empty_entireList: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary entireList
 * @constant
 */
export
const entireList: number = Empty_entireList; /* SHORT_NAMED_BIT */

/**
 * @summary Empty_outgoingmemorySlot
 * @constant
 */
export
const Empty_outgoingmemorySlot: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary outgoingmemorySlot
 * @constant
 */
export
const outgoingmemorySlot: number = Empty_outgoingmemorySlot; /* SHORT_NAMED_BIT */

/**
 * @summary Empty_incomingmemorySlot
 * @constant
 */
export
const Empty_incomingmemorySlot: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary incomingmemorySlot
 * @constant
 */
export
const incomingmemorySlot: number = Empty_incomingmemorySlot; /* SHORT_NAMED_BIT */

/**
 * @summary Empty_forwardToDn
 * @constant
 */
export
const Empty_forwardToDn: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardToDn
 * @constant
 */
export
const forwardToDn: number = Empty_forwardToDn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Empty: $.ASN1Decoder<Empty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Empty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Empty (el: _Element): Empty {
    if (!_cached_decoder_for_Empty) { _cached_decoder_for_Empty = $._decodeBitString; }
    return _cached_decoder_for_Empty(el);
}

let _cached_encoder_for_Empty: $.ASN1Encoder<Empty> | null = null;

/**
 * @summary Encodes a(n) Empty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Empty, encoded as an ASN.1 Element.
 */
export
function _encode_Empty (value: Empty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Empty) { _cached_encoder_for_Empty = $._encodeBitString; }
    return _cached_encoder_for_Empty(value, elGetter);
}


/* eslint-enable */
