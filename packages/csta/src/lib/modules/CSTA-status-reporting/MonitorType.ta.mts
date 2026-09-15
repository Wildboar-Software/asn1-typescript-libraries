/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MonitorType
 * @description
 *
 * Whether a call continues to be monitored after it leaves a device.
 * Independent of monitor object (call vs device). ECMA-269 §6.6.2.3, Table 6-8.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitorType {
    call = 0,
    device = 1,
}

/**
 * @summary MonitorType
 * @description
 *
 * Whether a call continues to be monitored after it leaves a device.
 * Independent of monitor object (call vs device). ECMA-269 §6.6.2.3, Table 6-8.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
type MonitorType = _enum_for_MonitorType;

/**
 * @summary MonitorType
 * @description
 *
 * Whether a call continues to be monitored after it leaves a device.
 * Independent of monitor object (call vs device). ECMA-269 §6.6.2.3, Table 6-8.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorType  ::=  ENUMERATED
 * {     call                 (0),
 *      device             (1) }
 * ```
 * 
 * @enum {number}
 */
export
const MonitorType = _enum_for_MonitorType;

/**
 * @summary MonitorType_call
 * @description
 *
 * Call-type: keep monitoring while the call remains in the sub-domain (except
 * Diverted, which may be switch-dependent). ECMA-269 Table 6-8.
 *
 * @constant
 * @type {number}
 */
export
const MonitorType_call: MonitorType = MonitorType.call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call
 * @constant
 * @type {number}
 */
export
const call: MonitorType = MonitorType.call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorType_device
 * @description
 *
 * Device-type: stop monitoring the call when it leaves the device.
 * `ServicesPermitted` is only for this type. ECMA-269 Table 6-8, §12.2.25.
 *
 * @constant
 * @type {number}
 */
export
const MonitorType_device: MonitorType = MonitorType.device; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary device
 * @constant
 * @type {number}
 */
export
const device: MonitorType = MonitorType.device; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MonitorType: $.ASN1Decoder<MonitorType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorType (el: _Element): MonitorType {
    if (!_cached_decoder_for_MonitorType) { _cached_decoder_for_MonitorType = $._decodeEnumerated; }
    return _cached_decoder_for_MonitorType(el);
}

let _cached_encoder_for_MonitorType: $.ASN1Encoder<MonitorType> | null = null;

/**
 * @summary Encodes a(n) MonitorType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorType, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorType (value: MonitorType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorType) { _cached_encoder_for_MonitorType = $._encodeEnumerated; }
    return _cached_encoder_for_MonitorType(value, elGetter);
}


/* eslint-enable */
