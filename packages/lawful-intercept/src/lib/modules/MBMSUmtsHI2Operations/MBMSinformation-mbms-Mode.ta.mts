/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSinformation_mbms_Mode {
    multicast = 0,
    broadcast = 1,
}

/**
 * @summary MBMSinformation_mbms_Mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbms-Mode ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbms_Mode = _enum_for_MBMSinformation_mbms_Mode | ENUMERATED;

/**
 * @summary MBMSinformation_mbms_Mode_multicast
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_multicast: MBMSinformation_mbms_Mode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multicast
 * @constant
 * @type {number}
 */
export
const multicast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_multicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbms_Mode_broadcast
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_broadcast: MBMSinformation_mbms_Mode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export
const broadcast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MBMSinformation_mbms_Mode: $.ASN1Decoder<MBMSinformation_mbms_Mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSinformation_mbms_Mode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSinformation_mbms_Mode (el: _Element): MBMSinformation_mbms_Mode {
    if (!_cached_decoder_for_MBMSinformation_mbms_Mode) { _cached_decoder_for_MBMSinformation_mbms_Mode = $._decodeEnumerated; }
    return _cached_decoder_for_MBMSinformation_mbms_Mode(el);
}

let _cached_encoder_for_MBMSinformation_mbms_Mode: $.ASN1Encoder<MBMSinformation_mbms_Mode> | null = null;

/**
 * @summary Encodes a(n) MBMSinformation_mbms_Mode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSinformation_mbms_Mode, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSinformation_mbms_Mode (value: MBMSinformation_mbms_Mode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSinformation_mbms_Mode) { _cached_encoder_for_MBMSinformation_mbms_Mode = $._encodeEnumerated; }
    return _cached_encoder_for_MBMSinformation_mbms_Mode(value, elGetter);
}


/* eslint-enable */
