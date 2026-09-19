/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED {
 *  roamingLBO (1), -- used in IMS events sent by VPLMN with LBO as roaming
 *  roamingS8HR (2), -- used in IMS events sent by VPLMN with S8HR as roaming
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication | ENUMERATED;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication_roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication_roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */

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
