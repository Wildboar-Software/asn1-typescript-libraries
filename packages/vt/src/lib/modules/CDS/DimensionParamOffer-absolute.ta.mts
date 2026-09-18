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
 * @summary DimensionParamOffer_absolute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamOffer-absolute ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DimensionParamOffer_absolute = BIT_STRING;

/**
 * @summary DimensionParamOffer_absolute_yes
 * @constant
 */
export
const DimensionParamOffer_absolute_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = DimensionParamOffer_absolute_yes; /* SHORT_NAMED_BIT */

/**
 * @summary DimensionParamOffer_absolute_no
 * @constant
 */
export
const DimensionParamOffer_absolute_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = DimensionParamOffer_absolute_no; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DimensionParamOffer_absolute: $.ASN1Decoder<DimensionParamOffer_absolute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamOffer_absolute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamOffer_absolute (el: _Element): DimensionParamOffer_absolute {
    if (!_cached_decoder_for_DimensionParamOffer_absolute) { _cached_decoder_for_DimensionParamOffer_absolute = $._decodeBitString; }
    return _cached_decoder_for_DimensionParamOffer_absolute(el);
}

let _cached_encoder_for_DimensionParamOffer_absolute: $.ASN1Encoder<DimensionParamOffer_absolute> | null = null;

/**
 * @summary Encodes a(n) DimensionParamOffer_absolute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamOffer_absolute, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamOffer_absolute (value: DimensionParamOffer_absolute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamOffer_absolute) { _cached_encoder_for_DimensionParamOffer_absolute = $._encodeBitString; }
    return _cached_encoder_for_DimensionParamOffer_absolute(value, elGetter);
}


/* eslint-enable */
