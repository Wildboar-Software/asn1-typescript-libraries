/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StatusReportingServicesC2
 * @description
 *
 * Phase II status-reporting services. Phase II (ECMA-218) compatibility BIT
 * STRING in ACSE user-information. For Phase III and later, use Capability
 * Exchange to learn supported services and events. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReportingServicesC2  ::=  BIT STRING
 *     {monitorStart                   (0),
 *      changeMonitorFilter            (1),
 *      monitorStop                    (2),
 *      snapshotDevice             (3),
 *      snapshotCall                   (4)     }
 * ```
 */
export
type StatusReportingServicesC2 = BIT_STRING;

/**
 * @summary StatusReportingServicesC2_monitorStart
 * @description Advertises `monitorStart` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const StatusReportingServicesC2_monitorStart: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary monitorStart
 * @description Alias of {@link StatusReportingServicesC2_monitorStart}.
 * @constant
 */
export
const monitorStart: number = StatusReportingServicesC2_monitorStart; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_changeMonitorFilter
 * @description
 * Advertises `changeMonitorFilter` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const StatusReportingServicesC2_changeMonitorFilter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary changeMonitorFilter
 * @description Alias of {@link StatusReportingServicesC2_changeMonitorFilter}.
 * @constant
 */
export
const changeMonitorFilter: number = StatusReportingServicesC2_changeMonitorFilter; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_monitorStop
 * @description Advertises `monitorStop` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const StatusReportingServicesC2_monitorStop: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary monitorStop
 * @description Alias of {@link StatusReportingServicesC2_monitorStop}.
 * @constant
 */
export
const monitorStop: number = StatusReportingServicesC2_monitorStop; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_snapshotDevice
 * @description Advertises `snapshotDevice` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const StatusReportingServicesC2_snapshotDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary snapshotDevice
 * @description Alias of {@link StatusReportingServicesC2_snapshotDevice}.
 * @constant
 */
export
const snapshotDevice: number = StatusReportingServicesC2_snapshotDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_snapshotCall
 * @description Advertises `snapshotCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const StatusReportingServicesC2_snapshotCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary snapshotCall
 * @description Alias of {@link StatusReportingServicesC2_snapshotCall}.
 * @constant
 */
export
const snapshotCall: number = StatusReportingServicesC2_snapshotCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StatusReportingServicesC2: $.ASN1Decoder<StatusReportingServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReportingServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReportingServicesC2 (el: _Element): StatusReportingServicesC2 {
    if (!_cached_decoder_for_StatusReportingServicesC2) { _cached_decoder_for_StatusReportingServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_StatusReportingServicesC2(el);
}

let _cached_encoder_for_StatusReportingServicesC2: $.ASN1Encoder<StatusReportingServicesC2> | null = null;

/**
 * @summary Encodes a(n) StatusReportingServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReportingServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReportingServicesC2 (value: StatusReportingServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReportingServicesC2) { _cached_encoder_for_StatusReportingServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_StatusReportingServicesC2(value, elGetter);
}


/* eslint-enable */
