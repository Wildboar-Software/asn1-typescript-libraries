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
 * @summary AdditionalCBBOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCBBOptions  ::=  BIT STRING {
 *     des  (0),
 *     dei  (1),
 *     recl (2)
 * } (SIZE(3))
 * ```
 */
export
type AdditionalCBBOptions = BIT_STRING;

/**
 * @summary AdditionalCBBOptions_des
 * @constant
 */
export
const AdditionalCBBOptions_des: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary des
 * @constant
 */
export
const des: number = AdditionalCBBOptions_des; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_dei
 * @constant
 */
export
const AdditionalCBBOptions_dei: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dei
 * @constant
 */
export
const dei: number = AdditionalCBBOptions_dei; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_recl
 * @constant
 */
export
const AdditionalCBBOptions_recl: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary recl
 * @constant
 */
export
const recl: number = AdditionalCBBOptions_recl; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AdditionalCBBOptions: $.ASN1Decoder<AdditionalCBBOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCBBOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalCBBOptions (el: _Element): AdditionalCBBOptions {
    if (!_cached_decoder_for_AdditionalCBBOptions) { _cached_decoder_for_AdditionalCBBOptions = $._decodeBitString; }
    return _cached_decoder_for_AdditionalCBBOptions(el);
}

let _cached_encoder_for_AdditionalCBBOptions: $.ASN1Encoder<AdditionalCBBOptions> | null = null;

/**
 * @summary Encodes a(n) AdditionalCBBOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCBBOptions, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalCBBOptions (value: AdditionalCBBOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalCBBOptions) { _cached_encoder_for_AdditionalCBBOptions = $._encodeBitString; }
    return _cached_encoder_for_AdditionalCBBOptions(value, elGetter);
}


/* eslint-enable */
