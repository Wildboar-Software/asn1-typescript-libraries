/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TargetRole {
    announcingUE = 1,
    monitoringUE = 2,
}

/**
 * @summary TargetRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetRole  ::=  ENUMERATED
 * {
 *     announcingUE                (1),
 *     monitoringUE                (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetRole = _enum_for_TargetRole | ENUMERATED;

/**
 * @summary TargetRole_announcingUE
 * @constant
 * @type {number}
 */
export
const TargetRole_announcingUE: TargetRole = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary announcingUE
 * @constant
 * @type {number}
 */
export
const announcingUE: TargetRole = TargetRole_announcingUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetRole_monitoringUE
 * @constant
 * @type {number}
 */
export
const TargetRole_monitoringUE: TargetRole = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringUE
 * @constant
 * @type {number}
 */
export
const monitoringUE: TargetRole = TargetRole_monitoringUE; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TargetRole: $.ASN1Decoder<TargetRole> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetRole
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetRole (el: _Element): TargetRole {
    if (!_cached_decoder_for_TargetRole) { _cached_decoder_for_TargetRole = $._decodeEnumerated; }
    return _cached_decoder_for_TargetRole(el);
}

let _cached_encoder_for_TargetRole: $.ASN1Encoder<TargetRole> | null = null;

/**
 * @summary Encodes a(n) TargetRole into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetRole, encoded as an ASN.1 Element.
 */
export
function _encode_TargetRole (value: TargetRole, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetRole) { _cached_encoder_for_TargetRole = $._encodeEnumerated; }
    return _cached_encoder_for_TargetRole(value, elGetter);
}


/* eslint-enable */
