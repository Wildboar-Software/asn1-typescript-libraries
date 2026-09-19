/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IP4Address, _decode_IP4Address, _encode_IP4Address } from "../MEDIA-GATEWAY-CONTROL/IP4Address.ta.mjs";
// export { IP4Address, _decode_IP4Address, _encode_IP4Address } from "../MEDIA-GATEWAY-CONTROL/IP4Address.ta.mjs";
import { IP6Address, _decode_IP6Address, _encode_IP6Address } from "../MEDIA-GATEWAY-CONTROL/IP6Address.ta.mjs";
// export { IP6Address, _decode_IP6Address, _encode_IP6Address } from "../MEDIA-GATEWAY-CONTROL/IP6Address.ta.mjs";
import { DomainName, _decode_DomainName, _encode_DomainName } from "../MEDIA-GATEWAY-CONTROL/DomainName.ta.mjs";
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../MEDIA-GATEWAY-CONTROL/DomainName.ta.mjs";
import { PathName, _decode_PathName, _encode_PathName } from "../MEDIA-GATEWAY-CONTROL/PathName.ta.mjs";
// export { PathName, _decode_PathName, _encode_PathName } from "../MEDIA-GATEWAY-CONTROL/PathName.ta.mjs";
import { MtpAddress, _decode_MtpAddress, _encode_MtpAddress } from "../MEDIA-GATEWAY-CONTROL/MtpAddress.ta.mjs";
// export { MtpAddress, _decode_MtpAddress, _encode_MtpAddress } from "../MEDIA-GATEWAY-CONTROL/MtpAddress.ta.mjs";


/**
 * @summary MId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MId  ::=  CHOICE
 *     {
 *         ip4Address        [0]    IP4Address,
 *         ip6Address        [1] IP6Address,
 *         domainName        [2] DomainName,
 *         deviceName        [3] PathName,
 *         mtpAddress        [4] MtpAddress,
 *         -- Addressing structure of mtpAddress:
 *         -- 25 - 15 0
 *         -- | PC | NI |
 *         -- 24 - 14 bits 2 bits
 *         -- NOTE - 14 bits are defined for international use.
 *         -- Two national options exist where the point code is 16 or 24 bits.
 *         -- To octet align the mtpAddress, the MSBs shall be encoded as 0s.
 *         ...
 *     }
 * ```
 */
export
type MId =
    { ip4Address: IP4Address } /* CHOICE_ALT_ROOT */
    | { ip6Address: IP6Address } /* CHOICE_ALT_ROOT */
    | { domainName: DomainName } /* CHOICE_ALT_ROOT */
    | { deviceName: PathName } /* CHOICE_ALT_ROOT */
    | { mtpAddress: MtpAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MId: $.ASN1Decoder<MId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MId (el: _Element): MId {
    if (!_cached_decoder_for_MId) { _cached_decoder_for_MId = $._decode_extensible_choice<MId>({
    "CONTEXT 0": [ "ip4Address", $._decode_implicit<IP4Address>(() => _decode_IP4Address) ],
    "CONTEXT 1": [ "ip6Address", $._decode_implicit<IP6Address>(() => _decode_IP6Address) ],
    "CONTEXT 2": [ "domainName", $._decode_implicit<DomainName>(() => _decode_DomainName) ],
    "CONTEXT 3": [ "deviceName", $._decode_implicit<PathName>(() => _decode_PathName) ],
    "CONTEXT 4": [ "mtpAddress", $._decode_implicit<MtpAddress>(() => _decode_MtpAddress) ]
}); }
    return _cached_decoder_for_MId(el);
}

let _cached_encoder_for_MId: $.ASN1Encoder<MId> | null = null;

/**
 * @summary Encodes a(n) MId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MId, encoded as an ASN.1 Element.
 */
export
function _encode_MId (value: MId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MId) { _cached_encoder_for_MId = $._encode_choice<MId>({
    "ip4Address": $._encode_implicit(_TagClass.context, 0, () => _encode_IP4Address, $.BER),
    "ip6Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IP6Address, $.BER),
    "domainName": $._encode_implicit(_TagClass.context, 2, () => _encode_DomainName, $.BER),
    "deviceName": $._encode_implicit(_TagClass.context, 3, () => _encode_PathName, $.BER),
    "mtpAddress": $._encode_implicit(_TagClass.context, 4, () => _encode_MtpAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_MId(value, elGetter);
}


/* eslint-enable */
