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
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EpcFormat_fields_Item_result {
    numericPad = 0,
    numeric = 1,
    alpha7bits = 2,
}

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result_numericPad
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_numericPad: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericPad
 * @constant
 * @type {number}
 */
export
const numericPad: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_numeric: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numeric
 * @constant
 * @type {number}
 */
export
const numeric: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.numeric; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_alpha7bits: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alpha7bits
 * @constant
 * @type {number}
 */
export
const alpha7bits: EpcFormat_fields_Item_result = EpcFormat_fields_Item_result.alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EpcFormat_fields_Item_result: $.ASN1Decoder<EpcFormat_fields_Item_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EpcFormat_fields_Item_result (el: _Element): EpcFormat_fields_Item_result {
    if (!_cached_decoder_for_EpcFormat_fields_Item_result) { _cached_decoder_for_EpcFormat_fields_Item_result = $._decodeEnumerated; }
    return _cached_decoder_for_EpcFormat_fields_Item_result(el);
}

let _cached_encoder_for_EpcFormat_fields_Item_result: $.ASN1Encoder<EpcFormat_fields_Item_result> | null = null;

/**
 * @summary Encodes a(n) EpcFormat_fields_Item_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_result, encoded as an ASN.1 Element.
 */
export
function _encode_EpcFormat_fields_Item_result (value: EpcFormat_fields_Item_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EpcFormat_fields_Item_result) { _cached_encoder_for_EpcFormat_fields_Item_result = $._encodeEnumerated; }
    return _cached_encoder_for_EpcFormat_fields_Item_result(value, elGetter);
}


/* eslint-enable */
