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
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-reportingTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault {
    immediate = 0,
    periodic = 1,
    count = 2,
}

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-reportingTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type GetLocationTrackingCapabilitiesResult_reportingTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-reportingTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_immediate
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_immediate: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.immediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate
 * @constant
 * @type {number}
 */
export
const immediate: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.immediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_periodic
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_periodic: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_count
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_count: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.count; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count
 * @constant
 * @type {number}
 */
export
const count: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.count; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult_reportingTypeDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault (el: _Element): GetLocationTrackingCapabilitiesResult_reportingTypeDefault {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault = $._decodeEnumerated; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult_reportingTypeDefault> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult_reportingTypeDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult_reportingTypeDefault, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault (value: GetLocationTrackingCapabilitiesResult_reportingTypeDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault = $._encodeEnumerated; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(value, elGetter);
}


/* eslint-enable */
