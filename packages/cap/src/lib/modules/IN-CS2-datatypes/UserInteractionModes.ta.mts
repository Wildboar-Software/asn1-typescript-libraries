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
 * @summary UserInteractionModes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInteractionModes  ::=  BIT STRING {voiceMessage(0), tone(1), display(2)}
 * ```
 */
export
type UserInteractionModes = BIT_STRING;

/**
 * @summary UserInteractionModes_voiceMessage
 * @constant
 */
export
const UserInteractionModes_voiceMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary voiceMessage
 * @constant
 */
export
const voiceMessage: number = UserInteractionModes_voiceMessage; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_tone
 * @constant
 */
export
const UserInteractionModes_tone: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary tone
 * @constant
 */
export
const tone: number = UserInteractionModes_tone; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_display
 * @constant
 */
export
const UserInteractionModes_display: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary display
 * @constant
 */
export
const display: number = UserInteractionModes_display; /* SHORT_NAMED_BIT */

let _cached_decoder_for_UserInteractionModes: $.ASN1Decoder<UserInteractionModes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserInteractionModes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserInteractionModes (el: _Element): UserInteractionModes {
    if (!_cached_decoder_for_UserInteractionModes) { _cached_decoder_for_UserInteractionModes = $._decodeBitString; }
    return _cached_decoder_for_UserInteractionModes(el);
}

let _cached_encoder_for_UserInteractionModes: $.ASN1Encoder<UserInteractionModes> | null = null;

/**
 * @summary Encodes a(n) UserInteractionModes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInteractionModes, encoded as an ASN.1 Element.
 */
export
function _encode_UserInteractionModes (value: UserInteractionModes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserInteractionModes) { _cached_encoder_for_UserInteractionModes = $._encodeBitString; }
    return _cached_encoder_for_UserInteractionModes(value, elGetter);
}


/* eslint-enable */
