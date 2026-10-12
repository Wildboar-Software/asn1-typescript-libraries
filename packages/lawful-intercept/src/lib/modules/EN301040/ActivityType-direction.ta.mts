/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_direction {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction_toTarget
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_toTarget: ActivityType_direction = ActivityType_direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: ActivityType_direction = ActivityType_direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_direction_fromTarget
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_fromTarget: ActivityType_direction = ActivityType_direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: ActivityType_direction = ActivityType_direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActivityType_direction: $.ASN1Decoder<ActivityType_direction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivityType_direction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivityType_direction (el: _Element): ActivityType_direction {
    if (!_cached_decoder_for_ActivityType_direction) { _cached_decoder_for_ActivityType_direction = $._decodeEnumerated; }
    return _cached_decoder_for_ActivityType_direction(el);
}

let _cached_encoder_for_ActivityType_direction: $.ASN1Encoder<ActivityType_direction> | null = null;

/**
 * @summary Encodes a(n) ActivityType_direction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityType_direction, encoded as an ASN.1 Element.
 */
export
function _encode_ActivityType_direction (value: ActivityType_direction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivityType_direction) { _cached_encoder_for_ActivityType_direction = $._encodeEnumerated; }
    return _cached_encoder_for_ActivityType_direction(value, elGetter);
}


/* eslint-enable */
