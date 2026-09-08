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
 * @summary RobBitPatt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RobBitPatt  ::=  BIT STRING {
 *   robBit0(0), robBit1(1), robBit2(2), robBit3(3), robBit4(4), robBit5(5)
 * }
 * ```
 */
export
type RobBitPatt = BIT_STRING;

/**
 * @summary RobBitPatt_robBit0
 * @constant
 */
export
const RobBitPatt_robBit0: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary robBit0
 * @constant
 */
export
const robBit0: number = RobBitPatt_robBit0; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit1
 * @constant
 */
export
const RobBitPatt_robBit1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary robBit1
 * @constant
 */
export
const robBit1: number = RobBitPatt_robBit1; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit2
 * @constant
 */
export
const RobBitPatt_robBit2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary robBit2
 * @constant
 */
export
const robBit2: number = RobBitPatt_robBit2; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit3
 * @constant
 */
export
const RobBitPatt_robBit3: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary robBit3
 * @constant
 */
export
const robBit3: number = RobBitPatt_robBit3; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit4
 * @constant
 */
export
const RobBitPatt_robBit4: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary robBit4
 * @constant
 */
export
const robBit4: number = RobBitPatt_robBit4; /* SHORT_NAMED_BIT */

/**
 * @summary RobBitPatt_robBit5
 * @constant
 */
export
const RobBitPatt_robBit5: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary robBit5
 * @constant
 */
export
const robBit5: number = RobBitPatt_robBit5; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RobBitPatt: $.ASN1Decoder<RobBitPatt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RobBitPatt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RobBitPatt (el: _Element): RobBitPatt {
    if (!_cached_decoder_for_RobBitPatt) { _cached_decoder_for_RobBitPatt = $._decodeBitString; }
    return _cached_decoder_for_RobBitPatt(el);
}

let _cached_encoder_for_RobBitPatt: $.ASN1Encoder<RobBitPatt> | null = null;

/**
 * @summary Encodes a(n) RobBitPatt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RobBitPatt, encoded as an ASN.1 Element.
 */
export
function _encode_RobBitPatt (value: RobBitPatt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RobBitPatt) { _cached_encoder_for_RobBitPatt = $._encodeBitString; }
    return _cached_encoder_for_RobBitPatt(value, elGetter);
}


/* eslint-enable */
