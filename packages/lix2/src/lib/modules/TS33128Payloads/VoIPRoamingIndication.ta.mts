/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
    roamingN9HR = 3,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingN9HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingN9HR
 * @constant
 * @type {number}
 */
export
const roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VoIPRoamingIndication: $.ASN1Decoder<VoIPRoamingIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoIPRoamingIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoIPRoamingIndication (el: _Element): VoIPRoamingIndication {
    if (!_cached_decoder_for_VoIPRoamingIndication) { _cached_decoder_for_VoIPRoamingIndication = $._decodeEnumerated; }
    return _cached_decoder_for_VoIPRoamingIndication(el);
}

let _cached_encoder_for_VoIPRoamingIndication: $.ASN1Encoder<VoIPRoamingIndication> | null = null;

/**
 * @summary Encodes a(n) VoIPRoamingIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoIPRoamingIndication, encoded as an ASN.1 Element.
 */
export
function _encode_VoIPRoamingIndication (value: VoIPRoamingIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoIPRoamingIndication) { _cached_encoder_for_VoIPRoamingIndication = $._encodeEnumerated; }
    return _cached_encoder_for_VoIPRoamingIndication(value, elGetter);
}


/* eslint-enable */
