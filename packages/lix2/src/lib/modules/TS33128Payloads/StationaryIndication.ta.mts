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
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StationaryIndication {
    stationary = 1,
    mobile = 2,
}

/**
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StationaryIndication  ::=  ENUMERATED
 * {
 *     stationary(1),
 *     mobile(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StationaryIndication = _enum_for_StationaryIndication;

/**
 * @summary StationaryIndication_stationary
 * @constant
 * @type {number}
 */
export
const StationaryIndication_stationary: StationaryIndication = StationaryIndication.stationary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stationary
 * @constant
 * @type {number}
 */
export
const stationary: StationaryIndication = StationaryIndication.stationary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StationaryIndication_mobile
 * @constant
 * @type {number}
 */
export
const StationaryIndication_mobile: StationaryIndication = StationaryIndication.mobile; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobile
 * @constant
 * @type {number}
 */
export
const mobile: StationaryIndication = StationaryIndication.mobile; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_StationaryIndication: $.ASN1Decoder<StationaryIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StationaryIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StationaryIndication (el: _Element): StationaryIndication {
    if (!_cached_decoder_for_StationaryIndication) { _cached_decoder_for_StationaryIndication = $._decodeEnumerated; }
    return _cached_decoder_for_StationaryIndication(el);
}

let _cached_encoder_for_StationaryIndication: $.ASN1Encoder<StationaryIndication> | null = null;

/**
 * @summary Encodes a(n) StationaryIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StationaryIndication, encoded as an ASN.1 Element.
 */
export
function _encode_StationaryIndication (value: StationaryIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StationaryIndication) { _cached_encoder_for_StationaryIndication = $._encodeEnumerated; }
    return _cached_encoder_for_StationaryIndication(value, elGetter);
}


/* eslint-enable */
