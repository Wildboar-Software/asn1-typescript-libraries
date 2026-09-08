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
 * @summary RouteSelect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteSelect  ::=  BIT STRING
 * {     alternateRoutes             ( 0),     -- optional parameters
 *     remainRetriesNoListAvailable         ( 1),     -- optional parameters
 *     remainRetriesNoCountAvailable         ( 2),     -- optional parameters
 *     remainRetriesRetryCount         ( 3),     -- optional parameters
 *     routeUsed                 ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type RouteSelect = BIT_STRING;

/**
 * @summary RouteSelect_alternateRoutes
 * @constant
 */
export
const RouteSelect_alternateRoutes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alternateRoutes
 * @constant
 */
export
const alternateRoutes: number = RouteSelect_alternateRoutes; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesNoListAvailable
 * @constant
 */
export
const RouteSelect_remainRetriesNoListAvailable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesNoListAvailable
 * @constant
 */
export
const remainRetriesNoListAvailable: number = RouteSelect_remainRetriesNoListAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesNoCountAvailable
 * @constant
 */
export
const RouteSelect_remainRetriesNoCountAvailable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesNoCountAvailable
 * @constant
 */
export
const remainRetriesNoCountAvailable: number = RouteSelect_remainRetriesNoCountAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesRetryCount
 * @constant
 */
export
const RouteSelect_remainRetriesRetryCount: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesRetryCount
 * @constant
 */
export
const remainRetriesRetryCount: number = RouteSelect_remainRetriesRetryCount; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_routeUsed
 * @constant
 */
export
const RouteSelect_routeUsed: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeUsed
 * @constant
 */
export
const routeUsed: number = RouteSelect_routeUsed; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_correlatorData
 * @constant
 */
export
const RouteSelect_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = RouteSelect_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_privateData
 * @constant
 */
export
const RouteSelect_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteSelect_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteSelect: $.ASN1Decoder<RouteSelect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteSelect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteSelect (el: _Element): RouteSelect {
    if (!_cached_decoder_for_RouteSelect) { _cached_decoder_for_RouteSelect = $._decodeBitString; }
    return _cached_decoder_for_RouteSelect(el);
}

let _cached_encoder_for_RouteSelect: $.ASN1Encoder<RouteSelect> | null = null;

/**
 * @summary Encodes a(n) RouteSelect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteSelect, encoded as an ASN.1 Element.
 */
export
function _encode_RouteSelect (value: RouteSelect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteSelect) { _cached_encoder_for_RouteSelect = $._encodeBitString; }
    return _cached_encoder_for_RouteSelect(value, elGetter);
}


/* eslint-enable */
