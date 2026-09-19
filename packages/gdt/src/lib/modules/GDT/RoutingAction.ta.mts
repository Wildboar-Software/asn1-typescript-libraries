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
 * @summary RoutingAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingAction  ::=  INTEGER {
 *     roua-route-set      (0),
 *     roua-route-get      (1),
 *     roua-route-result   (2)
 * }
 * ```
 */
export
type RoutingAction = INTEGER;

/**
 * @summary RoutingAction_roua_route_set
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_set: RoutingAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_set
 * @constant
 * @type {number}
 */
export
const roua_route_set: RoutingAction = RoutingAction_roua_route_set; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_get
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_get: RoutingAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_get
 * @constant
 * @type {number}
 */
export
const roua_route_get: RoutingAction = RoutingAction_roua_route_get; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_result
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_result: RoutingAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_result
 * @constant
 * @type {number}
 */
export
const roua_route_result: RoutingAction = RoutingAction_roua_route_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RoutingAction: $.ASN1Decoder<RoutingAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingAction (el: _Element): RoutingAction {
    if (!_cached_decoder_for_RoutingAction) { _cached_decoder_for_RoutingAction = $._decodeInteger; }
    return _cached_decoder_for_RoutingAction(el);
}

let _cached_encoder_for_RoutingAction: $.ASN1Encoder<RoutingAction> | null = null;

/**
 * @summary Encodes a(n) RoutingAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingAction, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingAction (value: RoutingAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingAction) { _cached_encoder_for_RoutingAction = $._encodeInteger; }
    return _cached_encoder_for_RoutingAction(value, elGetter);
}


/* eslint-enable */
