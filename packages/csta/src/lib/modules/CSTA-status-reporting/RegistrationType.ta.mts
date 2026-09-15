/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RegistrationType
 * @description
 *
 * Kind of computing-function registration with the switching function. ECMA-269
 * §14.2.6.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {    escapeRegister            (1),
 *     ioRegister            (2),
 *     routeRegister            (3),
 *     sysStatRegister            (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RegistrationType {
    escapeRegister = 1,
    ioRegister = 2,
    routeRegister = 3,
    sysStatRegister = 4,
}

/**
 * @summary RegistrationType
 * @description
 *
 * Kind of computing-function registration with the switching function. ECMA-269
 * §14.2.6.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {    escapeRegister            (1),
 *     ioRegister            (2),
 *     routeRegister            (3),
 *     sysStatRegister            (4) }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType
 * @description
 *
 * Kind of computing-function registration with the switching function. ECMA-269
 * §14.2.6.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {    escapeRegister            (1),
 *     ioRegister            (2),
 *     routeRegister            (3),
 *     sysStatRegister            (4) }
 * ```
 * 
 * @enum {number}
 */
export
const RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType_escapeRegister
 * @description
 *
 * Escape services (ECMA-269 §29.1.1, §9.4).
 *
 * @constant
 * @type {number}
 */
export
const RegistrationType_escapeRegister: RegistrationType = RegistrationType.escapeRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary escapeRegister
 * @constant
 * @type {number}
 */
export
const escapeRegister: RegistrationType = RegistrationType.escapeRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_ioRegister
 * @description
 *
 * I/O services (ECMA-269 §24.1.1, §6.2).
 *
 * @constant
 * @type {number}
 */
export
const RegistrationType_ioRegister: RegistrationType = RegistrationType.ioRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ioRegister
 * @constant
 * @type {number}
 */
export
const ioRegister: RegistrationType = RegistrationType.ioRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_routeRegister
 * @description
 *
 * Routeing services (ECMA-269 §20.1.1).
 *
 * @constant
 * @type {number}
 */
export
const RegistrationType_routeRegister: RegistrationType = RegistrationType.routeRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeRegister
 * @constant
 * @type {number}
 */
export
const routeRegister: RegistrationType = RegistrationType.routeRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_sysStatRegister
 * @description
 *
 * System status services (ECMA-269 §14.1.2, §6.6.1.1).
 *
 * @constant
 * @type {number}
 */
export
const RegistrationType_sysStatRegister: RegistrationType = RegistrationType.sysStatRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sysStatRegister
 * @constant
 * @type {number}
 */
export
const sysStatRegister: RegistrationType = RegistrationType.sysStatRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RegistrationType: $.ASN1Decoder<RegistrationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationType (el: _Element): RegistrationType {
    if (!_cached_decoder_for_RegistrationType) { _cached_decoder_for_RegistrationType = $._decodeEnumerated; }
    return _cached_decoder_for_RegistrationType(el);
}

let _cached_encoder_for_RegistrationType: $.ASN1Encoder<RegistrationType> | null = null;

/**
 * @summary Encodes a(n) RegistrationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationType, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationType (value: RegistrationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationType) { _cached_encoder_for_RegistrationType = $._encodeEnumerated; }
    return _cached_encoder_for_RegistrationType(value, elGetter);
}


/* eslint-enable */
