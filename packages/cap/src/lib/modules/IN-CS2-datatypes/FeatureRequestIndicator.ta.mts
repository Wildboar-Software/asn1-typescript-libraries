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
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FeatureRequestIndicator {
    hold = 0,
    retrieve = 1,
    featureActivation = 2,
    spare1 = 3,
    sparen = 127,
}

/**
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
type FeatureRequestIndicator = _enum_for_FeatureRequestIndicator;

/**
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
const FeatureRequestIndicator = _enum_for_FeatureRequestIndicator;

/**
 * @summary FeatureRequestIndicator_hold
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_hold: FeatureRequestIndicator = FeatureRequestIndicator.hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @constant
 * @type {number}
 */
export
const hold: FeatureRequestIndicator = FeatureRequestIndicator.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_retrieve: FeatureRequestIndicator = FeatureRequestIndicator.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: FeatureRequestIndicator = FeatureRequestIndicator.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_featureActivation
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_featureActivation: FeatureRequestIndicator = FeatureRequestIndicator.featureActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation: FeatureRequestIndicator = FeatureRequestIndicator.featureActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_spare1
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_spare1: FeatureRequestIndicator = FeatureRequestIndicator.spare1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare1
 * @constant
 * @type {number}
 */
export
const spare1: FeatureRequestIndicator = FeatureRequestIndicator.spare1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_sparen
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_sparen: FeatureRequestIndicator = FeatureRequestIndicator.sparen; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sparen
 * @constant
 * @type {number}
 */
export
const sparen: FeatureRequestIndicator = FeatureRequestIndicator.sparen; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FeatureRequestIndicator: $.ASN1Decoder<FeatureRequestIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FeatureRequestIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FeatureRequestIndicator (el: _Element): FeatureRequestIndicator {
    if (!_cached_decoder_for_FeatureRequestIndicator) { _cached_decoder_for_FeatureRequestIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_FeatureRequestIndicator(el);
}

let _cached_encoder_for_FeatureRequestIndicator: $.ASN1Encoder<FeatureRequestIndicator> | null = null;

/**
 * @summary Encodes a(n) FeatureRequestIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FeatureRequestIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_FeatureRequestIndicator (value: FeatureRequestIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FeatureRequestIndicator) { _cached_encoder_for_FeatureRequestIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_FeatureRequestIndicator(value, elGetter);
}


/* eslint-enable */
