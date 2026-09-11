/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ForwardingType
 * @description
 *
 * Condition that triggers forwarding at a device. Immediate, Busy, No Answer,
 * and DND may be combined with origination class (internal vs external).
 * User-specified settings supersede switching-function defaults of the same
 * type. ECMA-269 §6.7.1, §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardingType {
    forwardImmediate = 0,
    forwardBusy = 1,
    forwardNoAns = 2,
    forwardDND = 9,
    forwardBusyInt = 3,
    forwardBusyExt = 4,
    forwardNoAnsInt = 5,
    forwardNoAnsExt = 6,
    forwardImmInt = 7,
    forwardImmExt = 8,
    forwardDNDInt = 10,
    forwardDNDExt = 11,
}

/**
 * @summary ForwardingType
 * @description
 *
 * Condition that triggers forwarding at a device. Immediate, Busy, No Answer,
 * and DND may be combined with origination class (internal vs external).
 * User-specified settings supersede switching-function defaults of the same
 * type. ECMA-269 §6.7.1, §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
type ForwardingType = _enum_for_ForwardingType;

/**
 * @summary ForwardingType
 * @description
 *
 * Condition that triggers forwarding at a device. Immediate, Busy, No Answer,
 * and DND may be combined with origination class (internal vs external).
 * User-specified settings supersede switching-function defaults of the same
 * type. ECMA-269 §6.7.1, §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
const ForwardingType = _enum_for_ForwardingType;

/**
 * @summary ForwardingType_forwardImmediate
 * @description
 * Redirect as soon as the call arrives (Immediate). ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardImmediate: ForwardingType = ForwardingType.forwardImmediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmediate
 * @description Alias of {@link ForwardingType_forwardImmediate}.
 * @constant
 * @type {number}
 */
export
const forwardImmediate: ForwardingType = ForwardingType.forwardImmediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusy
 * @description
 * Redirect if the device is busy with another call (Busy). ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardBusy: ForwardingType = ForwardingType.forwardBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusy
 * @description Alias of {@link ForwardingType_forwardBusy}.
 * @constant
 * @type {number}
 */
export
const forwardBusy: ForwardingType = ForwardingType.forwardBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAns
 * @description
 * Redirect if unanswered within a ring count or time (No Answer). ECMA-269
 * §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardNoAns: ForwardingType = ForwardingType.forwardNoAns; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAns
 * @description Alias of {@link ForwardingType_forwardNoAns}.
 * @constant
 * @type {number}
 */
export
const forwardNoAns: ForwardingType = ForwardingType.forwardNoAns; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDND
 * @description
 * Redirect if Do Not Disturb is active at the device (DND). ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardDND: ForwardingType = ForwardingType.forwardDND; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDND
 * @description Alias of {@link ForwardingType_forwardDND}.
 * @constant
 * @type {number}
 */
export
const forwardDND: ForwardingType = ForwardingType.forwardDND; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusyInt
 * @description Busy forwarding for internal originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardBusyInt: ForwardingType = ForwardingType.forwardBusyInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusyInt
 * @description Alias of {@link ForwardingType_forwardBusyInt}.
 * @constant
 * @type {number}
 */
export
const forwardBusyInt: ForwardingType = ForwardingType.forwardBusyInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusyExt
 * @description Busy forwarding for external originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardBusyExt: ForwardingType = ForwardingType.forwardBusyExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusyExt
 * @description Alias of {@link ForwardingType_forwardBusyExt}.
 * @constant
 * @type {number}
 */
export
const forwardBusyExt: ForwardingType = ForwardingType.forwardBusyExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAnsInt
 * @description No-Answer forwarding for internal originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardNoAnsInt: ForwardingType = ForwardingType.forwardNoAnsInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAnsInt
 * @description Alias of {@link ForwardingType_forwardNoAnsInt}.
 * @constant
 * @type {number}
 */
export
const forwardNoAnsInt: ForwardingType = ForwardingType.forwardNoAnsInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAnsExt
 * @description No-Answer forwarding for external originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardNoAnsExt: ForwardingType = ForwardingType.forwardNoAnsExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAnsExt
 * @description Alias of {@link ForwardingType_forwardNoAnsExt}.
 * @constant
 * @type {number}
 */
export
const forwardNoAnsExt: ForwardingType = ForwardingType.forwardNoAnsExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardImmInt
 * @description Immediate forwarding for internal originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardImmInt: ForwardingType = ForwardingType.forwardImmInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmInt
 * @description Alias of {@link ForwardingType_forwardImmInt}.
 * @constant
 * @type {number}
 */
export
const forwardImmInt: ForwardingType = ForwardingType.forwardImmInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardImmExt
 * @description Immediate forwarding for external originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardImmExt: ForwardingType = ForwardingType.forwardImmExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmExt
 * @description Alias of {@link ForwardingType_forwardImmExt}.
 * @constant
 * @type {number}
 */
export
const forwardImmExt: ForwardingType = ForwardingType.forwardImmExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDNDInt
 * @description DND forwarding for internal originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardDNDInt: ForwardingType = ForwardingType.forwardDNDInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDNDInt
 * @description Alias of {@link ForwardingType_forwardDNDInt}.
 * @constant
 * @type {number}
 */
export
const forwardDNDInt: ForwardingType = ForwardingType.forwardDNDInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDNDExt
 * @description DND forwarding for external originations. ECMA-269 §6.7.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardingType_forwardDNDExt: ForwardingType = ForwardingType.forwardDNDExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDNDExt
 * @description Alias of {@link ForwardingType_forwardDNDExt}.
 * @constant
 * @type {number}
 */
export
const forwardDNDExt: ForwardingType = ForwardingType.forwardDNDExt; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ForwardingType: $.ASN1Decoder<ForwardingType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingType (el: _Element): ForwardingType {
    if (!_cached_decoder_for_ForwardingType) { _cached_decoder_for_ForwardingType = $._decodeEnumerated; }
    return _cached_decoder_for_ForwardingType(el);
}

let _cached_encoder_for_ForwardingType: $.ASN1Encoder<ForwardingType> | null = null;

/**
 * @summary Encodes a(n) ForwardingType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingType, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingType (value: ForwardingType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingType) { _cached_encoder_for_ForwardingType = $._encodeEnumerated; }
    return _cached_encoder_for_ForwardingType(value, elGetter);
}


/* eslint-enable */
