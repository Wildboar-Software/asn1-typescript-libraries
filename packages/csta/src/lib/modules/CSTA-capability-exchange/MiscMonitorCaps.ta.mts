/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MiscMonitorCaps
 * @description
 * Special monitoring considerations for a device or the sub-domain (ECMA-269
 * §13.1.2.2.1 / §13.1.4.2.1, ECMA-285 §9.10). Absent means considerations are
 * unknown.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports Group Inclusive Model (monitor includes
 * distribution mechanism and member devices) (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const MiscMonitorCaps_groupInclusivModel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary groupInclusivModel
 * @constant
 * @description
 * Alias of `MiscMonitorCaps_groupInclusivModel`.
 */
export
const groupInclusivModel: number = MiscMonitorCaps_groupInclusivModel; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_groupExclusiveModel
 * @constant
 * @description
 * Bit set means the SF supports Group Exclusive Model (monitor is only the
 * distribution mechanism) (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const MiscMonitorCaps_groupExclusiveModel: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary groupExclusiveModel
 * @constant
 * @description
 * Alias of `MiscMonitorCaps_groupExclusiveModel`.
 */
export
const groupExclusiveModel: number = MiscMonitorCaps_groupExclusiveModel; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_monitorPhysicalElement
 * @constant
 * @description
 * Bit set means the SF supports monitor the physical element to report
 * call-control events for all bridged appearances (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const MiscMonitorCaps_monitorPhysicalElement: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary monitorPhysicalElement
 * @constant
 * @description
 * Alias of `MiscMonitorCaps_monitorPhysicalElement`.
 */
export
const monitorPhysicalElement: number = MiscMonitorCaps_monitorPhysicalElement; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_acdDeviceInclusiv
 * @constant
 * @description
 * Bit set means the SF supports ACD Device Inclusive (ACD device plus
 * distributed-to devices) (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const MiscMonitorCaps_acdDeviceInclusiv: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary acdDeviceInclusiv
 * @constant
 * @description
 * Alias of `MiscMonitorCaps_acdDeviceInclusiv`.
 */
export
const acdDeviceInclusiv: number = MiscMonitorCaps_acdDeviceInclusiv; /* SHORT_NAMED_BIT */

/**
 * @summary MiscMonitorCaps_acdDeviceExclusiv
 * @constant
 * @description
 * Bit set means the SF supports ACD Device Exclusive (ACD device only)
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const MiscMonitorCaps_acdDeviceExclusiv: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary acdDeviceExclusiv
 * @constant
 * @description
 * Alias of `MiscMonitorCaps_acdDeviceExclusiv`.
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
