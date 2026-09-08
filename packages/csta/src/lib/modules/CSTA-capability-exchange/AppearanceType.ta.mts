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
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AppearanceType {
    selectedStandard = 0,
    basicStandard = 1,
    basicBridged = 2,
    exclusiveBridged = 3,
    independentSharedBridged = 4,
    interdependentSharedBridged = 5,
}

/**
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
type AppearanceType = _enum_for_AppearanceType;

/**
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
const AppearanceType = _enum_for_AppearanceType;

/**
 * @summary AppearanceType_selectedStandard
 * @constant
 * @type {number}
 */
export
const AppearanceType_selectedStandard: AppearanceType = AppearanceType.selectedStandard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedStandard
 * @constant
 * @type {number}
 */
export
const selectedStandard: AppearanceType = AppearanceType.selectedStandard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_basicStandard
 * @constant
 * @type {number}
 */
export
const AppearanceType_basicStandard: AppearanceType = AppearanceType.basicStandard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicStandard
 * @constant
 * @type {number}
 */
export
const basicStandard: AppearanceType = AppearanceType.basicStandard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_basicBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_basicBridged: AppearanceType = AppearanceType.basicBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicBridged
 * @constant
 * @type {number}
 */
export
const basicBridged: AppearanceType = AppearanceType.basicBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_exclusiveBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_exclusiveBridged: AppearanceType = AppearanceType.exclusiveBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusiveBridged
 * @constant
 * @type {number}
 */
export
const exclusiveBridged: AppearanceType = AppearanceType.exclusiveBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_independentSharedBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_independentSharedBridged: AppearanceType = AppearanceType.independentSharedBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary independentSharedBridged
 * @constant
 * @type {number}
 */
export
const independentSharedBridged: AppearanceType = AppearanceType.independentSharedBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_interdependentSharedBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_interdependentSharedBridged: AppearanceType = AppearanceType.interdependentSharedBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interdependentSharedBridged
 * @constant
 * @type {number}
 */
export
const interdependentSharedBridged: AppearanceType = AppearanceType.interdependentSharedBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AppearanceType: $.ASN1Decoder<AppearanceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AppearanceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AppearanceType (el: _Element): AppearanceType {
    if (!_cached_decoder_for_AppearanceType) { _cached_decoder_for_AppearanceType = $._decodeEnumerated; }
    return _cached_decoder_for_AppearanceType(el);
}

let _cached_encoder_for_AppearanceType: $.ASN1Encoder<AppearanceType> | null = null;

/**
 * @summary Encodes a(n) AppearanceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AppearanceType, encoded as an ASN.1 Element.
 */
export
function _encode_AppearanceType (value: AppearanceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AppearanceType) { _cached_encoder_for_AppearanceType = $._encodeEnumerated; }
    return _cached_encoder_for_AppearanceType(value, elGetter);
}


/* eslint-enable */
