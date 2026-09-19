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
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TopologyRequest_topologyDirection {
    bothway = 0,
    isolate = 1,
    oneway = 2,
}

/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type TopologyRequest_topologyDirection = _enum_for_TopologyRequest_topologyDirection;

/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const TopologyRequest_topologyDirection = _enum_for_TopologyRequest_topologyDirection;

/**
 * @summary TopologyRequest_topologyDirection_bothway
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_bothway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.bothway; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothway
 * @constant
 * @type {number}
 */
export
const bothway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.bothway; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TopologyRequest_topologyDirection_isolate
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_isolate: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.isolate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isolate
 * @constant
 * @type {number}
 */
export
const isolate: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.isolate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TopologyRequest_topologyDirection_oneway
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_oneway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.oneway; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneway
 * @constant
 * @type {number}
 */
export
const oneway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.oneway; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TopologyRequest_topologyDirection: $.ASN1Decoder<TopologyRequest_topologyDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TopologyRequest_topologyDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TopologyRequest_topologyDirection (el: _Element): TopologyRequest_topologyDirection {
    if (!_cached_decoder_for_TopologyRequest_topologyDirection) { _cached_decoder_for_TopologyRequest_topologyDirection = $._decodeEnumerated; }
    return _cached_decoder_for_TopologyRequest_topologyDirection(el);
}

let _cached_encoder_for_TopologyRequest_topologyDirection: $.ASN1Encoder<TopologyRequest_topologyDirection> | null = null;

/**
 * @summary Encodes a(n) TopologyRequest_topologyDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TopologyRequest_topologyDirection, encoded as an ASN.1 Element.
 */
export
function _encode_TopologyRequest_topologyDirection (value: TopologyRequest_topologyDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TopologyRequest_topologyDirection) { _cached_encoder_for_TopologyRequest_topologyDirection = $._encodeEnumerated; }
    return _cached_encoder_for_TopologyRequest_topologyDirection(value, elGetter);
}


/* eslint-enable */
