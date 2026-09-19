/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MDTActivation {
    immediateMDTOnly = 1,
    loggedMDTOnly = 2,
    immediateMDTandTrace = 3,
}

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation_immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTOnly: MDTActivation = MDTActivation.immediateMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const immediateMDTOnly: MDTActivation = MDTActivation.immediateMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_loggedMDTOnly: MDTActivation = MDTActivation.loggedMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const loggedMDTOnly: MDTActivation = MDTActivation.loggedMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTandTrace: MDTActivation = MDTActivation.immediateMDTandTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const immediateMDTandTrace: MDTActivation = MDTActivation.immediateMDTandTrace; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MDTActivation: $.ASN1Decoder<MDTActivation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDTActivation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDTActivation (el: _Element): MDTActivation {
    if (!_cached_decoder_for_MDTActivation) { _cached_decoder_for_MDTActivation = $._decodeEnumerated; }
    return _cached_decoder_for_MDTActivation(el);
}

let _cached_encoder_for_MDTActivation: $.ASN1Encoder<MDTActivation> | null = null;

/**
 * @summary Encodes a(n) MDTActivation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDTActivation, encoded as an ASN.1 Element.
 */
export
function _encode_MDTActivation (value: MDTActivation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDTActivation) { _cached_encoder_for_MDTActivation = $._encodeEnumerated; }
    return _cached_encoder_for_MDTActivation(value, elGetter);
}


/* eslint-enable */
