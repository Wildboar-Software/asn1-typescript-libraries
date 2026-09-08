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
 * @summary ConnectionInformation_flowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionInformation-flowDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectionInformation_flowDirection {
    transmit = 0,
    receive = 1,
    transmitAndReceive = 2,
    none = 3,
}

/**
 * @summary ConnectionInformation_flowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionInformation-flowDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ConnectionInformation_flowDirection = _enum_for_ConnectionInformation_flowDirection;

/**
 * @summary ConnectionInformation_flowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionInformation-flowDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ConnectionInformation_flowDirection = _enum_for_ConnectionInformation_flowDirection;

/**
 * @summary ConnectionInformation_flowDirection_transmit
 * @constant
 * @type {number}
 */
export
const ConnectionInformation_flowDirection_transmit: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.transmit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transmit
 * @constant
 * @type {number}
 */
export
const transmit: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.transmit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionInformation_flowDirection_receive
 * @constant
 * @type {number}
 */
export
const ConnectionInformation_flowDirection_receive: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receive
 * @constant
 * @type {number}
 */
export
const receive: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionInformation_flowDirection_transmitAndReceive
 * @constant
 * @type {number}
 */
export
const ConnectionInformation_flowDirection_transmitAndReceive: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.transmitAndReceive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transmitAndReceive
 * @constant
 * @type {number}
 */
export
const transmitAndReceive: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.transmitAndReceive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionInformation_flowDirection_none
 * @constant
 * @type {number}
 */
export
const ConnectionInformation_flowDirection_none: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: ConnectionInformation_flowDirection = ConnectionInformation_flowDirection.none; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConnectionInformation_flowDirection: $.ASN1Decoder<ConnectionInformation_flowDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionInformation_flowDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionInformation_flowDirection (el: _Element): ConnectionInformation_flowDirection {
    if (!_cached_decoder_for_ConnectionInformation_flowDirection) { _cached_decoder_for_ConnectionInformation_flowDirection = $._decodeEnumerated; }
    return _cached_decoder_for_ConnectionInformation_flowDirection(el);
}

let _cached_encoder_for_ConnectionInformation_flowDirection: $.ASN1Encoder<ConnectionInformation_flowDirection> | null = null;

/**
 * @summary Encodes a(n) ConnectionInformation_flowDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionInformation_flowDirection, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionInformation_flowDirection (value: ConnectionInformation_flowDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionInformation_flowDirection) { _cached_encoder_for_ConnectionInformation_flowDirection = $._encodeEnumerated; }
    return _cached_encoder_for_ConnectionInformation_flowDirection(value, elGetter);
}


/* eslint-enable */
