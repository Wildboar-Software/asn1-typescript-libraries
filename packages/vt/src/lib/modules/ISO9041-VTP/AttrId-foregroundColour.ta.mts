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
 * @summary AttrId_foregroundColour
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId-foregroundColour ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttrId_foregroundColour = INTEGER;

/**
 * @summary AttrId_foregroundColour_null_
 * @constant
 * @type {number}
 */
export
const AttrId_foregroundColour_null_: AttrId_foregroundColour = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_foregroundColour_null_
 * @constant
 * @type {number}
 */
export
const null_: AttrId_foregroundColour = AttrId_foregroundColour_null_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AttrId_foregroundColour: $.ASN1Decoder<AttrId_foregroundColour> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttrId_foregroundColour
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttrId_foregroundColour (el: _Element): AttrId_foregroundColour {
    if (!_cached_decoder_for_AttrId_foregroundColour) { _cached_decoder_for_AttrId_foregroundColour = $._decodeInteger; }
    return _cached_decoder_for_AttrId_foregroundColour(el);
}

let _cached_encoder_for_AttrId_foregroundColour: $.ASN1Encoder<AttrId_foregroundColour> | null = null;

/**
 * @summary Encodes a(n) AttrId_foregroundColour into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttrId_foregroundColour, encoded as an ASN.1 Element.
 */
export
function _encode_AttrId_foregroundColour (value: AttrId_foregroundColour, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttrId_foregroundColour) { _cached_encoder_for_AttrId_foregroundColour = $._encodeInteger; }
    return _cached_encoder_for_AttrId_foregroundColour(value, elGetter);
}


/* eslint-enable */
