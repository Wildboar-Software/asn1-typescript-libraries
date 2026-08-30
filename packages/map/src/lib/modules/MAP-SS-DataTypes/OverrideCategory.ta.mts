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
 * @summary OverrideCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_OverrideCategory {
    overrideEnabled = 0,
    overrideDisabled = 1,
}

/**
 * @summary OverrideCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type OverrideCategory = _enum_for_OverrideCategory;

/**
 * @summary OverrideCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const OverrideCategory = _enum_for_OverrideCategory;

/**
 * @summary OverrideCategory_overrideEnabled
 * @constant
 * @type {number}
 */
export
const OverrideCategory_overrideEnabled: OverrideCategory = OverrideCategory.overrideEnabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideEnabled
 * @constant
 * @type {number}
 */
export
const overrideEnabled: OverrideCategory = OverrideCategory.overrideEnabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OverrideCategory_overrideDisabled
 * @constant
 * @type {number}
 */
export
const OverrideCategory_overrideDisabled: OverrideCategory = OverrideCategory.overrideDisabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideDisabled
 * @constant
 * @type {number}
 */
export
const overrideDisabled: OverrideCategory = OverrideCategory.overrideDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_OverrideCategory: $.ASN1Decoder<OverrideCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OverrideCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OverrideCategory (el: _Element): OverrideCategory {
    if (!_cached_decoder_for_OverrideCategory) { _cached_decoder_for_OverrideCategory = $._decodeEnumerated; }
    return _cached_decoder_for_OverrideCategory(el);
}

let _cached_encoder_for_OverrideCategory: $.ASN1Encoder<OverrideCategory> | null = null;

/**
 * @summary Encodes a(n) OverrideCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OverrideCategory, encoded as an ASN.1 Element.
 */
export
function _encode_OverrideCategory (value: OverrideCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OverrideCategory) { _cached_encoder_for_OverrideCategory = $._encodeEnumerated; }
    return _cached_encoder_for_OverrideCategory(value, elGetter);
}


/* eslint-enable */
