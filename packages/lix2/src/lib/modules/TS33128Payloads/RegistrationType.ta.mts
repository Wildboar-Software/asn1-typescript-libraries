/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RegistrationType {
    registration = 1,
    registrationUpdate = 2,
    deregistration = 3,
}

/**
 * @summary RegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType_registration
 * @constant
 * @type {number}
 */
export
const RegistrationType_registration: RegistrationType = RegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: RegistrationType = RegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_registrationUpdate
 * @constant
 * @type {number}
 */
export
const RegistrationType_registrationUpdate: RegistrationType = RegistrationType.registrationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationUpdate
 * @constant
 * @type {number}
 */
export
const registrationUpdate: RegistrationType = RegistrationType.registrationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_deregistration
 * @constant
 * @type {number}
 */
export
const RegistrationType_deregistration: RegistrationType = RegistrationType.deregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration: RegistrationType = RegistrationType.deregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

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
