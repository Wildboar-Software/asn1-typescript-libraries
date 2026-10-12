/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_scope {
    point2Point = 0,
    point2MultiPoint = 1,
    broadcast = 2,
}

/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope_point2Point
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2Point
 * @constant
 * @type {number}
 */
export
const point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_point2MultiPoint
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2MultiPoint
 * @constant
 * @type {number}
 */
export
const point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_broadcast
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export
const broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActivityType_scope: $.ASN1Decoder<ActivityType_scope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivityType_scope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivityType_scope (el: _Element): ActivityType_scope {
    if (!_cached_decoder_for_ActivityType_scope) { _cached_decoder_for_ActivityType_scope = $._decodeEnumerated; }
    return _cached_decoder_for_ActivityType_scope(el);
}

let _cached_encoder_for_ActivityType_scope: $.ASN1Encoder<ActivityType_scope> | null = null;

/**
 * @summary Encodes a(n) ActivityType_scope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityType_scope, encoded as an ASN.1 Element.
 */
export
function _encode_ActivityType_scope (value: ActivityType_scope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivityType_scope) { _cached_encoder_for_ActivityType_scope = $._encodeEnumerated; }
    return _cached_encoder_for_ActivityType_scope(value, elGetter);
}


/* eslint-enable */
