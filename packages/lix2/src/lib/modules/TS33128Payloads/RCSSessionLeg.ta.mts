/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionLeg {
    remoteLeg = 1,
    localLeg = 2,
}

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionLeg  ::=  ENUMERATED
 * {
 *     remoteLeg(1),
 *     localLeg(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionLeg = _enum_for_RCSSessionLeg;

/**
 * @summary RCSSessionLeg_remoteLeg
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_remoteLeg: RCSSessionLeg = RCSSessionLeg.remoteLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteLeg
 * @constant
 * @type {number}
 */
export
const remoteLeg: RCSSessionLeg = RCSSessionLeg.remoteLeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionLeg_localLeg
 * @constant
 * @type {number}
 */
export
const RCSSessionLeg_localLeg: RCSSessionLeg = RCSSessionLeg.localLeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localLeg
 * @constant
 * @type {number}
 */
export
const localLeg: RCSSessionLeg = RCSSessionLeg.localLeg; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSSessionLeg: $.ASN1Decoder<RCSSessionLeg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionLeg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionLeg (el: _Element): RCSSessionLeg {
    if (!_cached_decoder_for_RCSSessionLeg) { _cached_decoder_for_RCSSessionLeg = $._decodeEnumerated; }
    return _cached_decoder_for_RCSSessionLeg(el);
}

let _cached_encoder_for_RCSSessionLeg: $.ASN1Encoder<RCSSessionLeg> | null = null;

/**
 * @summary Encodes a(n) RCSSessionLeg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionLeg, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionLeg (value: RCSSessionLeg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionLeg) { _cached_encoder_for_RCSSessionLeg = $._encodeEnumerated; }
    return _cached_encoder_for_RCSSessionLeg(value, elGetter);
}


/* eslint-enable */
