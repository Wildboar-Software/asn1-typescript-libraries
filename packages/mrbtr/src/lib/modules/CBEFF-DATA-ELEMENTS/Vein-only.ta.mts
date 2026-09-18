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
 * @summary Vein_only
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Vein-only  ::=  BIT STRING {
 *   left(6), right(5), palm(4), back-of-hand(3), wrist(2), reserved1(1),
 *   reserved2(0)}(SIZE (7))
 * ```
 */
export
type Vein_only = BIT_STRING;

/**
 * @summary Vein_only_left
 * @constant
 */
export
const Vein_only_left: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary left
 * @constant
 */
export
const left: number = Vein_only_left; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_right
 * @constant
 */
export
const Vein_only_right: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary right
 * @constant
 */
export
const right: number = Vein_only_right; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_palm
 * @constant
 */
export
const Vein_only_palm: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary palm
 * @constant
 */
export
const palm: number = Vein_only_palm; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_back_of_hand
 * @constant
 */
export
const Vein_only_back_of_hand: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary back_of_hand
 * @constant
 */
export
const back_of_hand: number = Vein_only_back_of_hand; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_wrist
 * @constant
 */
export
const Vein_only_wrist: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary wrist
 * @constant
 */
export
const wrist: number = Vein_only_wrist; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_reserved1
 * @constant
 */
export
const Vein_only_reserved1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary reserved1
 * @constant
 */
export
const reserved1: number = Vein_only_reserved1; /* SHORT_NAMED_BIT */

/**
 * @summary Vein_only_reserved2
 * @constant
 */
export
const Vein_only_reserved2: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reserved2
 * @constant
 */
export
const reserved2: number = Vein_only_reserved2; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Vein_only: $.ASN1Decoder<Vein_only> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Vein_only
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Vein_only (el: _Element): Vein_only {
    if (!_cached_decoder_for_Vein_only) { _cached_decoder_for_Vein_only = $._decodeBitString; }
    return _cached_decoder_for_Vein_only(el);
}

let _cached_encoder_for_Vein_only: $.ASN1Encoder<Vein_only> | null = null;

/**
 * @summary Encodes a(n) Vein_only into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Vein_only, encoded as an ASN.1 Element.
 */
export
function _encode_Vein_only (value: Vein_only, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Vein_only) { _cached_encoder_for_Vein_only = $._encodeBitString; }
    return _cached_encoder_for_Vein_only(value, elGetter);
}


/* eslint-enable */
