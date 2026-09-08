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
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionFilterDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault {
    horizontalMovement = 0,
    verticalMovement = 1,
    civicAddressChange = 2,
    none = 3,
}

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionFilterDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type GetLocationTrackingCapabilitiesResult_collectionFilterDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult-collectionFilterDefault ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionFilterDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault_horizontalMovement
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionFilterDefault_horizontalMovement: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.horizontalMovement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary horizontalMovement
 * @constant
 * @type {number}
 */
export
const horizontalMovement: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.horizontalMovement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault_verticalMovement
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionFilterDefault_verticalMovement: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.verticalMovement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verticalMovement
 * @constant
 * @type {number}
 */
export
const verticalMovement: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.verticalMovement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault_civicAddressChange
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionFilterDefault_civicAddressChange: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.civicAddressChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary civicAddressChange
 * @constant
 * @type {number}
 */
export
const civicAddressChange: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.civicAddressChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionFilterDefault_none
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionFilterDefault_none: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: GetLocationTrackingCapabilitiesResult_collectionFilterDefault = GetLocationTrackingCapabilitiesResult_collectionFilterDefault.none; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult_collectionFilterDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult_collectionFilterDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault (el: _Element): GetLocationTrackingCapabilitiesResult_collectionFilterDefault {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault = $._decodeEnumerated; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult_collectionFilterDefault> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult_collectionFilterDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult_collectionFilterDefault, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult_collectionFilterDefault (value: GetLocationTrackingCapabilitiesResult_collectionFilterDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault = $._encodeEnumerated; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionFilterDefault(value, elGetter);
}


/* eslint-enable */
