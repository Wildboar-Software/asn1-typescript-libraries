/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GroupDeviceAttributes
 * @description
 * Group attributes of a queried device. Mandatory when `deviceCategory` is
 * Group; otherwise absent (ECMA-269 §13.1.2.2.1 / §13.1.3.2.1, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupDeviceAttributes  ::=  BIT STRING
 * {     acd                     ( 0),
 *     hunt                     ( 1),
 *     pick                     ( 2),
 *     user                    ( 4),
 *     agent                    ( 5),
 *     other                     ( 3) }
 * ```
 */
export
type GroupDeviceAttributes = BIT_STRING;

/**
 * @summary GroupDeviceAttributes_acd
 * @constant
 * @description
 * Bit set means the SF supports ACD group attribute (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const GroupDeviceAttributes_acd: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acd
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_acd`.
 */
export
const acd: number = GroupDeviceAttributes_acd; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_hunt
 * @constant
 * @description
 * Bit set means the SF supports Hunt group attribute (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const GroupDeviceAttributes_hunt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hunt
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_hunt`.
 */
export
const hunt: number = GroupDeviceAttributes_hunt; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_pick
 * @constant
 * @description
 * Bit set means the SF supports Pick group attribute (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const GroupDeviceAttributes_pick: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pick
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_pick`.
 */
export
const pick: number = GroupDeviceAttributes_pick; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_user
 * @constant
 * @description
 * Bit set means the SF supports User group attribute (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const GroupDeviceAttributes_user: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary user
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_user`.
 */
export
const user: number = GroupDeviceAttributes_user; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_agent
 * @constant
 * @description
 * Bit set means the SF supports Agent group attribute (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const GroupDeviceAttributes_agent: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agent
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_agent`.
 */
export
const agent: number = GroupDeviceAttributes_agent; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_other
 * @constant
 * @description
 * Bit set means the SF supports Other group attribute (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const GroupDeviceAttributes_other: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary other
 * @constant
 * @description
 * Alias of `GroupDeviceAttributes_other`.
 */
export
const other: number = GroupDeviceAttributes_other; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GroupDeviceAttributes: $.ASN1Decoder<GroupDeviceAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupDeviceAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupDeviceAttributes (el: _Element): GroupDeviceAttributes {
    if (!_cached_decoder_for_GroupDeviceAttributes) { _cached_decoder_for_GroupDeviceAttributes = $._decodeBitString; }
    return _cached_decoder_for_GroupDeviceAttributes(el);
}

let _cached_encoder_for_GroupDeviceAttributes: $.ASN1Encoder<GroupDeviceAttributes> | null = null;

/**
 * @summary Encodes a(n) GroupDeviceAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupDeviceAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_GroupDeviceAttributes (value: GroupDeviceAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupDeviceAttributes) { _cached_encoder_for_GroupDeviceAttributes = $._encodeBitString; }
    return _cached_encoder_for_GroupDeviceAttributes(value, elGetter);
}


/* eslint-enable */
