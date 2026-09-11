/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetForwarding
 * @description
 * Capability bitmap for the Get Forwarding service (ECMA-269 C.14.11, ECMA-285
 * §9.10). Presence of this entry in `LogicalServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetForwarding  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     forwardListInAck             ( 1),     -- optional parameters
 *     forwardListImmediateInAck         ( 2),     -- optional parameters
 *     forwardListBusyInAck             ( 3),     -- optional parameters
 *     forwardListDNDInAck             ( 4),     -- optional parameters
 *     forwardListNoAnsInAck             ( 5),     -- optional parameters
 *     forwardListBusyIntInAck         ( 6),     -- optional parameters
 *     forwardListBusyExtInAck         ( 7),     -- optional parameters
 *     forwardListDNDIntInAck             ( 8),     -- optional parameters
 *     forwardListDNDExtInAck             ( 9),     -- optional parameters
 *     forwardListNoAnsIntInAck         (10),     -- optional parameters
 *     forwardListNoAnsExtInAck         (11),     -- optional parameters
 *     forwardListImmIntInAck             (12),     -- optional parameters
 *     forwardListImmExtInAck             (13),     -- optional parameters
 *     forwardDNInAck                 (14),     -- optional parameters
 *     forwardDefaultInAck             (15),     -- optional parameters
 *     forwardDefaultTypeAndDNInAck         (16),     -- optional parameters
 *     forwardDefaultTypeInAck         (17),     -- optional parameters
 *     forwardDefaultDNInAck             (18),     -- optional parameters
 *     ringCountInAck                 (19),     -- optional parameters
 *     privateDataInAck             (20) }
 * ```
 */
export
type GetForwarding = BIT_STRING;

/**
 * @summary GetForwarding_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.11).
 */
export
const GetForwarding_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetForwarding_privateData`.
 */
export
const privateData: number = GetForwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardList` in the acknowledgement
 * (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardListInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListInAck`.
 */
export
const forwardListInAck: number = GetForwarding_forwardListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmediateInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListImmediate` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListImmediateInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmediateInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListImmediateInAck`.
 */
export
const forwardListImmediateInAck: number = GetForwarding_forwardListImmediateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListBusy` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListBusyInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListBusyInAck`.
 */
export
const forwardListBusyInAck: number = GetForwarding_forwardListBusyInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListDND` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListDNDInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListDNDInAck`.
 */
export
const forwardListDNDInAck: number = GetForwarding_forwardListDNDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListNoAns` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListNoAnsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListNoAnsInAck`.
 */
export
const forwardListNoAnsInAck: number = GetForwarding_forwardListNoAnsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyIntInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListBusyInt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListBusyIntInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyIntInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListBusyIntInAck`.
 */
export
const forwardListBusyIntInAck: number = GetForwarding_forwardListBusyIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyExtInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListBusyExt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListBusyExtInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyExtInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListBusyExtInAck`.
 */
export
const forwardListBusyExtInAck: number = GetForwarding_forwardListBusyExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDIntInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListDNDInt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListDNDIntInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDIntInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListDNDIntInAck`.
 */
export
const forwardListDNDIntInAck: number = GetForwarding_forwardListDNDIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDExtInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListDNDExt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListDNDExtInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDExtInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListDNDExtInAck`.
 */
export
const forwardListDNDExtInAck: number = GetForwarding_forwardListDNDExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsIntInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListNoAnsInt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListNoAnsIntInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsIntInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListNoAnsIntInAck`.
 */
export
const forwardListNoAnsIntInAck: number = GetForwarding_forwardListNoAnsIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsExtInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListNoAnsExt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListNoAnsExtInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsExtInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListNoAnsExtInAck`.
 */
export
const forwardListNoAnsExtInAck: number = GetForwarding_forwardListNoAnsExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmIntInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListImmInt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListImmIntInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmIntInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListImmIntInAck`.
 */
export
const forwardListImmIntInAck: number = GetForwarding_forwardListImmIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmExtInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardListImmExt` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardListImmExtInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmExtInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardListImmExtInAck`.
 */
export
const forwardListImmExtInAck: number = GetForwarding_forwardListImmExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDNInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardDN` in the acknowledgement
 * (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardDNInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary forwardDNInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardDNInAck`.
 */
export
const forwardDNInAck: number = GetForwarding_forwardDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardDefault` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardDefaultInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardDefaultInAck`.
 */
export
const forwardDefaultInAck: number = GetForwarding_forwardDefaultInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultTypeAndDNInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardDefaultTypeAndDN` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardDefaultTypeAndDNInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeAndDNInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardDefaultTypeAndDNInAck`.
 */
export
const forwardDefaultTypeAndDNInAck: number = GetForwarding_forwardDefaultTypeAndDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultTypeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardDefaultType` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardDefaultTypeInAck: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardDefaultTypeInAck`.
 */
export
const forwardDefaultTypeInAck: number = GetForwarding_forwardDefaultTypeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultDNInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `forwardDefaultDN` in the
 * acknowledgement (ECMA-269 C.14.11).
 */
export
const GetForwarding_forwardDefaultDNInAck: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultDNInAck
 * @constant
 * @description
 * Alias of `GetForwarding_forwardDefaultDNInAck`.
 */
export
const forwardDefaultDNInAck: number = GetForwarding_forwardDefaultDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_ringCountInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `ringCount` in the acknowledgement
 * (ECMA-269 C.14.11).
 */
export
const GetForwarding_ringCountInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary ringCountInAck
 * @constant
 * @description
 * Alias of `GetForwarding_ringCountInAck`.
 */
export
const ringCountInAck: number = GetForwarding_ringCountInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.11).
 */
export
const GetForwarding_privateDataInAck: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetForwarding_privateDataInAck`.
 */
export
const privateDataInAck: number = GetForwarding_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetForwarding: $.ASN1Decoder<GetForwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetForwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetForwarding (el: _Element): GetForwarding {
    if (!_cached_decoder_for_GetForwarding) { _cached_decoder_for_GetForwarding = $._decodeBitString; }
    return _cached_decoder_for_GetForwarding(el);
}

let _cached_encoder_for_GetForwarding: $.ASN1Encoder<GetForwarding> | null = null;

/**
 * @summary Encodes a(n) GetForwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetForwarding, encoded as an ASN.1 Element.
 */
export
function _encode_GetForwarding (value: GetForwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetForwarding) { _cached_encoder_for_GetForwarding = $._encodeBitString; }
    return _cached_encoder_for_GetForwarding(value, elGetter);
}


/* eslint-enable */
