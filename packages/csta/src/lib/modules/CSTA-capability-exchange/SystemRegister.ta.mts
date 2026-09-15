/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemRegister
 * @description
 * Capability bitmap for the System Register service (ECMA-269 C.2.2, ECMA-285
 * §9.10). Presence of this entry in `SystemStatusServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemRegister  ::=  BIT STRING
 * {     requestTypesSystemStatus             ( 0),     -- optional parameters
 *     requestTypesRequestSystemStatus         ( 1),     -- optional parameters
 *     requestTypesSwitchingFunctionCapsChanged     ( 2),     -- optional parameters
 *     requestTypesSwitchingFuncionDevicesChanged     ( 3),     -- optional parameters
 *     statusFilterInitializing             ( 4),     -- optional parameters
 *     statusFilterEnabled                 ( 5),     -- optional parameters
 *     statusFilterNormal                 ( 6),     -- optional parameters
 *     statusFilterMessageLost             ( 7),     -- optional parameters
 *     statusFilterDisabled                 ( 8),     -- optional parameters
 *     statusFilterPartiallyDisabled             ( 9),     -- optional parameters
 *     statusFilterOverloadImminent             (10),     -- optional parameters
 *     statusFilterOverloadReached             (11),     -- optional parameters
 *     statusFilterOverloadRelieved             (12),     -- optional parameters
 *     privateDataOctetString                 (13),     -- optional parameters
 *     privateData                     (14),     -- optional parameters
 *     privateDataOctetStringInAck             (15),     -- optional parameters
 *     privateDataInAck                 (16) }
 * ```
 */
export
type SystemRegister = BIT_STRING;

/**
 * @summary SystemRegister_requestTypesSystemStatus
 * @constant
 * @description
 * Bit set means the SF supports `requestTypes` value `systemStatus` (ECMA-269
 * C.2.2).
 */
export
const SystemRegister_requestTypesSystemStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSystemStatus
 * @constant
 * @description
 * Alias of `SystemRegister_requestTypesSystemStatus`.
 */
export
const requestTypesSystemStatus: number = SystemRegister_requestTypesSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesRequestSystemStatus
 * @constant
 * @description
 * Bit set means the SF supports `requestTypes` value `requestSystemStatus`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_requestTypesRequestSystemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesRequestSystemStatus
 * @constant
 * @description
 * Alias of `SystemRegister_requestTypesRequestSystemStatus`.
 */
export
const requestTypesRequestSystemStatus: number = SystemRegister_requestTypesRequestSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesSwitchingFunctionCapsChanged
 * @constant
 * @description
 * Bit set means the SF supports `requestTypes` value
 * `switchingFunctionCapsChanged` (ECMA-269 C.2.2).
 */
export
const SystemRegister_requestTypesSwitchingFunctionCapsChanged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSwitchingFunctionCapsChanged
 * @constant
 * @description
 * Alias of `SystemRegister_requestTypesSwitchingFunctionCapsChanged`.
 */
export
const requestTypesSwitchingFunctionCapsChanged: number = SystemRegister_requestTypesSwitchingFunctionCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesSwitchingFuncionDevicesChanged
 * @constant
 * @description
 * Bit set means the SF supports `requestTypes` value
 * `switchingFuncionDevicesChanged` (ECMA-269 C.2.2).
 */
export
const SystemRegister_requestTypesSwitchingFuncionDevicesChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSwitchingFuncionDevicesChanged
 * @constant
 * @description
 * Alias of `SystemRegister_requestTypesSwitchingFuncionDevicesChanged`.
 */
export
const requestTypesSwitchingFuncionDevicesChanged: number = SystemRegister_requestTypesSwitchingFuncionDevicesChanged; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterInitializing
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `initializing`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterInitializing: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterInitializing
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterInitializing`.
 */
export
const statusFilterInitializing: number = SystemRegister_statusFilterInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterEnabled
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `enabled`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterEnabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterEnabled
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterEnabled`.
 */
export
const statusFilterEnabled: number = SystemRegister_statusFilterEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterNormal
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `normal`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterNormal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterNormal
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterNormal`.
 */
export
const statusFilterNormal: number = SystemRegister_statusFilterNormal; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterMessageLost
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `messagesLost`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterMessageLost: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterMessageLost
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterMessageLost`.
 */
export
const statusFilterMessageLost: number = SystemRegister_statusFilterMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterDisabled
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `disabled`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterDisabled: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterDisabled
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterDisabled`.
 */
export
const statusFilterDisabled: number = SystemRegister_statusFilterDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterPartiallyDisabled
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value
 * `partiallyDisabled` (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterPartiallyDisabled: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterPartiallyDisabled
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterPartiallyDisabled`.
 */
export
const statusFilterPartiallyDisabled: number = SystemRegister_statusFilterPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadImminent
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value
 * `overloadImminent` (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterOverloadImminent: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadImminent
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterOverloadImminent`.
 */
export
const statusFilterOverloadImminent: number = SystemRegister_statusFilterOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadReached
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value `overloadReached`
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterOverloadReached: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadReached
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterOverloadReached`.
 */
export
const statusFilterOverloadReached: number = SystemRegister_statusFilterOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadRelieved
 * @constant
 * @description
 * Bit set means the SF supports `requestedStatusFilter` value
 * `overloadRelieved` (ECMA-269 C.2.2).
 */
export
const SystemRegister_statusFilterOverloadRelieved: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadRelieved
 * @constant
 * @description
 * Alias of `SystemRegister_statusFilterOverloadRelieved`.
 */
export
const statusFilterOverloadRelieved: number = SystemRegister_statusFilterOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataOctetString
 * @constant
 * @description
 * Bit set means the SF supports optional octet-string `privateData` (ECMA-269
 * C.2.2).
 */
export
const SystemRegister_privateDataOctetString: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateDataOctetString
 * @constant
 * @description
 * Alias of `SystemRegister_privateDataOctetString`.
 */
export
const privateDataOctetString: number = SystemRegister_privateDataOctetString; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.2).
 */
export
const SystemRegister_privateData: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SystemRegister_privateData`.
 */
export
const privateData: number = SystemRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataOctetStringInAck
 * @constant
 * @description
 * Bit set means the SF supports optional octet-string `privateData` in the
 * acknowledgement (ECMA-269 C.2.2).
 */
export
const SystemRegister_privateDataOctetStringInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary privateDataOctetStringInAck
 * @constant
 * @description
 * Alias of `SystemRegister_privateDataOctetStringInAck`.
 */
export
const privateDataOctetStringInAck: number = SystemRegister_privateDataOctetStringInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.2).
 */
export
const SystemRegister_privateDataInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SystemRegister_privateDataInAck`.
 */
export
const privateDataInAck: number = SystemRegister_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemRegister: $.ASN1Decoder<SystemRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemRegister (el: _Element): SystemRegister {
    if (!_cached_decoder_for_SystemRegister) { _cached_decoder_for_SystemRegister = $._decodeBitString; }
    return _cached_decoder_for_SystemRegister(el);
}

let _cached_encoder_for_SystemRegister: $.ASN1Encoder<SystemRegister> | null = null;

/**
 * @summary Encodes a(n) SystemRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemRegister, encoded as an ASN.1 Element.
 */
export
function _encode_SystemRegister (value: SystemRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemRegister) { _cached_encoder_for_SystemRegister = $._encodeBitString; }
    return _cached_encoder_for_SystemRegister(value, elGetter);
}


/* eslint-enable */
