/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MiscMonitorCaps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscMonitorCaps  ::=  BIT STRING
 * {     groupInclusivModel             ( 0),
 *     groupExclusiveModel             ( 1),
 *     monitorPhysicalElement             ( 2),
 *     acdDeviceInclusiv             ( 3),
 *     acdDeviceExclusiv             ( 4) }
 * ```
 */
export
type MiscMonitorCaps = BIT_STRING;

/**
 * @summary MiscMonitorCaps_groupInclusivModel
 * @constant
 */
export
const MiscMonitorCaps_groupInclusivModel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary groupInclusivModel
 * @constant
 */
export
const groupInclusivModel: number = MiscMonitorCaps_groupInclusivModel; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_groupExclusiveModel
 * @constant
 */
export
const MiscMonitorCaps_groupExclusiveModel: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary groupExclusiveModel
 * @constant
 */
export
const groupExclusiveModel: number = MiscMonitorCaps_groupExclusiveModel; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_monitorPhysicalElement
 * @constant
 */
export
const MiscMonitorCaps_monitorPhysicalElement: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary monitorPhysicalElement
 * @constant
 */
export
const monitorPhysicalElement: number = MiscMonitorCaps_monitorPhysicalElement; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_acdDeviceInclusiv
 * @constant
 */
export
const MiscMonitorCaps_acdDeviceInclusiv: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary acdDeviceInclusiv
 * @constant
 */
export
const acdDeviceInclusiv: number = MiscMonitorCaps_acdDeviceInclusiv; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_acdDeviceExclusiv
 * @constant
 */
export
const MiscMonitorCaps_acdDeviceExclusiv: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary acdDeviceExclusiv
 * @constant
 */
export
const acdDeviceExclusiv: number = MiscMonitorCaps_acdDeviceExclusiv; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MiscMonitorCaps: $.ASN1Decoder<MiscMonitorCaps> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscMonitorCaps
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscMonitorCaps (el: _Element): MiscMonitorCaps {
    if (!_cached_decoder_for_MiscMonitorCaps) { _cached_decoder_for_MiscMonitorCaps = $._decodeBitString; }
    return _cached_decoder_for_MiscMonitorCaps(el);
}

let _cached_encoder_for_MiscMonitorCaps: $.ASN1Encoder<MiscMonitorCaps> | null = null;

/**
 * @summary Encodes a(n) MiscMonitorCaps into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscMonitorCaps, encoded as an ASN.1 Element.
 */
export
function _encode_MiscMonitorCaps (value: MiscMonitorCaps, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscMonitorCaps) { _cached_encoder_for_MiscMonitorCaps = $._encodeBitString; }
    return _cached_encoder_for_MiscMonitorCaps(value, elGetter);
}


/* eslint-enable */
