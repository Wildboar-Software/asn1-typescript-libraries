/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetPhysicalDeviceInformation
 * @description
 * Capability bitmap for the Get Physical Device Information service (ECMA-269
 * C.1.3, ECMA-285 §9.10). Presence of this entry in `CapExchangeServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPhysicalDeviceInformation  ::=  BIT STRING
 * {     privateDataInReq             ( 0),
 *     namedDeviceTypesInAck             ( 1),
 *     otherLogicalDeviceListInAck         ( 2),
 *     deviceModelNameInAck             ( 3),
 *     maxDisplaysInAck             ( 4),
 *     maxButtonsInAck             ( 5),
 *     maxLampsInAck                 ( 6),
 *     maxRingPatternsInAck             ( 7),
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetPhysicalDeviceInformation = BIT_STRING;

/**
 * @summary GetPhysicalDeviceInformation_privateDataInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the service request
 * (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_privateDataInReq`.
 */
export
const privateDataInReq: number = GetPhysicalDeviceInformation_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_namedDeviceTypesInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `namedDeviceTypes` in the
 * acknowledgement (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_namedDeviceTypesInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary namedDeviceTypesInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_namedDeviceTypesInAck`.
 */
export
const namedDeviceTypesInAck: number = GetPhysicalDeviceInformation_namedDeviceTypesInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_otherLogicalDeviceListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `otherLogicalDeviceList` in the
 * acknowledgement (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_otherLogicalDeviceListInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary otherLogicalDeviceListInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_otherLogicalDeviceListInAck`.
 */
export
const otherLogicalDeviceListInAck: number = GetPhysicalDeviceInformation_otherLogicalDeviceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_deviceModelNameInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `deviceModelName` in the
 * acknowledgement (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_deviceModelNameInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceModelNameInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_deviceModelNameInAck`.
 */
export
const deviceModelNameInAck: number = GetPhysicalDeviceInformation_deviceModelNameInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxDisplaysInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxDisplays` in the acknowledgement
 * (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_maxDisplaysInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary maxDisplaysInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_maxDisplaysInAck`.
 */
export
const maxDisplaysInAck: number = GetPhysicalDeviceInformation_maxDisplaysInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxButtonsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxButtons` in the acknowledgement
 * (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_maxButtonsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxButtonsInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_maxButtonsInAck`.
 */
export
const maxButtonsInAck: number = GetPhysicalDeviceInformation_maxButtonsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxLampsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxLamps` in the acknowledgement
 * (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_maxLampsInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary maxLampsInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_maxLampsInAck`.
 */
export
const maxLampsInAck: number = GetPhysicalDeviceInformation_maxLampsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxRingPatternsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxRingPatterns` in the
 * acknowledgement (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_maxRingPatternsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary maxRingPatternsInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_maxRingPatternsInAck`.
 */
export
const maxRingPatternsInAck: number = GetPhysicalDeviceInformation_maxRingPatternsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.1.3).
 */
export
const GetPhysicalDeviceInformation_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetPhysicalDeviceInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = GetPhysicalDeviceInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetPhysicalDeviceInformation: $.ASN1Decoder<GetPhysicalDeviceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPhysicalDeviceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPhysicalDeviceInformation (el: _Element): GetPhysicalDeviceInformation {
    if (!_cached_decoder_for_GetPhysicalDeviceInformation) { _cached_decoder_for_GetPhysicalDeviceInformation = $._decodeBitString; }
    return _cached_decoder_for_GetPhysicalDeviceInformation(el);
}

let _cached_encoder_for_GetPhysicalDeviceInformation: $.ASN1Encoder<GetPhysicalDeviceInformation> | null = null;

/**
 * @summary Encodes a(n) GetPhysicalDeviceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPhysicalDeviceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetPhysicalDeviceInformation (value: GetPhysicalDeviceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPhysicalDeviceInformation) { _cached_encoder_for_GetPhysicalDeviceInformation = $._encodeBitString; }
    return _cached_encoder_for_GetPhysicalDeviceInformation(value, elGetter);
}


/* eslint-enable */
