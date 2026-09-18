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
 * @summary DimensionParamValues_addressing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues-addressing ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DimensionParamValues_addressing = INTEGER;

/**
 * @summary DimensionParamValues_addressing_noConstraint
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_noConstraint: DimensionParamValues_addressing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_noConstraint
 * @constant
 * @type {number}
 */
export
const noConstraint: DimensionParamValues_addressing = DimensionParamValues_addressing_noConstraint; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_higherOnly
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_higherOnly: DimensionParamValues_addressing = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_higherOnly
 * @constant
 * @type {number}
 */
export
const higherOnly: DimensionParamValues_addressing = DimensionParamValues_addressing_higherOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_notPermitted
 * @constant
 * @type {number}
 */
export
const DimensionParamValues_addressing_notPermitted: DimensionParamValues_addressing = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DimensionParamValues_addressing_notPermitted
 * @constant
 * @type {number}
 */
export
const notPermitted: DimensionParamValues_addressing = DimensionParamValues_addressing_notPermitted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DimensionParamValues_addressing: $.ASN1Decoder<DimensionParamValues_addressing> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamValues_addressing
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamValues_addressing (el: _Element): DimensionParamValues_addressing {
    if (!_cached_decoder_for_DimensionParamValues_addressing) { _cached_decoder_for_DimensionParamValues_addressing = $._decodeInteger; }
    return _cached_decoder_for_DimensionParamValues_addressing(el);
}

let _cached_encoder_for_DimensionParamValues_addressing: $.ASN1Encoder<DimensionParamValues_addressing> | null = null;

/**
 * @summary Encodes a(n) DimensionParamValues_addressing into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamValues_addressing, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamValues_addressing (value: DimensionParamValues_addressing, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamValues_addressing) { _cached_encoder_for_DimensionParamValues_addressing = $._encodeInteger; }
    return _cached_encoder_for_DimensionParamValues_addressing(value, elGetter);
}


/* eslint-enable */
