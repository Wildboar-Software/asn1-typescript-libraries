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
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault {
    periodic = 0,
    updatesOnly = 1,
    periodicWithUpdates = 2,
}

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type GetLocationTrackingCapabilitiesResult_collectionTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionTypeDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodic
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodic: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_updatesOnly
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_updatesOnly: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.updatesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatesOnly
 * @constant
 * @type {number}
 */
export
const updatesOnly: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.updatesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodicWithUpdates
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodicWithUpdates: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodicWithUpdates; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodicWithUpdates
 * @constant
 * @type {number}
 */
export
const periodicWithUpdates: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodicWithUpdates; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult_collectionTypeDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault (el: _Element): GetLocationTrackingCapabilitiesResult_collectionTypeDefault {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault = $._decodeEnumerated; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult_collectionTypeDefault> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult_collectionTypeDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult_collectionTypeDefault, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault (value: GetLocationTrackingCapabilitiesResult_collectionTypeDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault = $._encodeEnumerated; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(value, elGetter);
}


/* eslint-enable */
