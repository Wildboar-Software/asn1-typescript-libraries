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
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FingerPrintInformation_hand {
    left = 0,
    right = 1,
}

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand_left
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_left: FingerPrintInformation_hand = FingerPrintInformation_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary left
 * @constant
 * @type {number}
 */
export
const left: FingerPrintInformation_hand = FingerPrintInformation_hand.left; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_hand_right
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_right: FingerPrintInformation_hand = FingerPrintInformation_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary right
 * @constant
 * @type {number}
 */
export
const right: FingerPrintInformation_hand = FingerPrintInformation_hand.right; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FingerPrintInformation_hand: $.ASN1Decoder<FingerPrintInformation_hand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FingerPrintInformation_hand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FingerPrintInformation_hand (el: _Element): FingerPrintInformation_hand {
    if (!_cached_decoder_for_FingerPrintInformation_hand) { _cached_decoder_for_FingerPrintInformation_hand = $._decodeEnumerated; }
    return _cached_decoder_for_FingerPrintInformation_hand(el);
}

let _cached_encoder_for_FingerPrintInformation_hand: $.ASN1Encoder<FingerPrintInformation_hand> | null = null;

/**
 * @summary Encodes a(n) FingerPrintInformation_hand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FingerPrintInformation_hand, encoded as an ASN.1 Element.
 */
export
function _encode_FingerPrintInformation_hand (value: FingerPrintInformation_hand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FingerPrintInformation_hand) { _cached_encoder_for_FingerPrintInformation_hand = $._encodeEnumerated; }
    return _cached_encoder_for_FingerPrintInformation_hand(value, elGetter);
}


/* eslint-enable */
