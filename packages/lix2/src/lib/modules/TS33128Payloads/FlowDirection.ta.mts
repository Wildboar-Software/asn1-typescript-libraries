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
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FlowDirection {
    downlinkOnly = 1,
    uplinkOnly = 2,
    dowlinkAndUplink = 3,
}

/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FlowDirection = _enum_for_FlowDirection;

/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FlowDirection = _enum_for_FlowDirection;

/**
 * @summary FlowDirection_downlinkOnly
 * @constant
 * @type {number}
 */
export
const FlowDirection_downlinkOnly: FlowDirection = FlowDirection.downlinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlinkOnly
 * @constant
 * @type {number}
 */
export
const downlinkOnly: FlowDirection = FlowDirection.downlinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_uplinkOnly
 * @constant
 * @type {number}
 */
export
const FlowDirection_uplinkOnly: FlowDirection = FlowDirection.uplinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uplinkOnly
 * @constant
 * @type {number}
 */
export
const uplinkOnly: FlowDirection = FlowDirection.uplinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const FlowDirection_dowlinkAndUplink: FlowDirection = FlowDirection.dowlinkAndUplink; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const dowlinkAndUplink: FlowDirection = FlowDirection.dowlinkAndUplink; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FlowDirection: $.ASN1Decoder<FlowDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlowDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlowDirection (el: _Element): FlowDirection {
    if (!_cached_decoder_for_FlowDirection) { _cached_decoder_for_FlowDirection = $._decodeEnumerated; }
    return _cached_decoder_for_FlowDirection(el);
}

let _cached_encoder_for_FlowDirection: $.ASN1Encoder<FlowDirection> | null = null;

/**
 * @summary Encodes a(n) FlowDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlowDirection, encoded as an ASN.1 Element.
 */
export
function _encode_FlowDirection (value: FlowDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlowDirection) { _cached_encoder_for_FlowDirection = $._encodeEnumerated; }
    return _cached_encoder_for_FlowDirection(value, elGetter);
}


/* eslint-enable */
