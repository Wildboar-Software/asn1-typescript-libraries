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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION MaxLogSize */
/**
 * @summary MaxLogSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLogSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export
type MaxLogSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxLogSize */

/* START_OF_SYMBOL_DEFINITION MaxLogSize_unlimited */
/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const MaxLogSize_unlimited: MaxLogSize = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MaxLogSize_unlimited */

/* START_OF_SYMBOL_DEFINITION unlimited */
/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const unlimited: MaxLogSize = MaxLogSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unlimited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxLogSize */
let _cached_decoder_for_MaxLogSize: $.ASN1Decoder<MaxLogSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxLogSize */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxLogSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxLogSize} The decoded data structure.
 */
export
function _decode_MaxLogSize (el: _Element) {
    if (!_cached_decoder_for_MaxLogSize) { _cached_decoder_for_MaxLogSize = $._decodeInteger; }
    return _cached_decoder_for_MaxLogSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxLogSize */
let _cached_encoder_for_MaxLogSize: $.ASN1Encoder<MaxLogSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxLogSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxLogSize */
/**
 * @summary Encodes a(n) MaxLogSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxLogSize, encoded as an ASN.1 Element.
 */
export
function _encode_MaxLogSize (value: MaxLogSize, elGetter: $.ASN1Encoder<MaxLogSize>) {
    if (!_cached_encoder_for_MaxLogSize) { _cached_encoder_for_MaxLogSize = $._encodeInteger; }
    return _cached_encoder_for_MaxLogSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxLogSize */

/* eslint-enable */
