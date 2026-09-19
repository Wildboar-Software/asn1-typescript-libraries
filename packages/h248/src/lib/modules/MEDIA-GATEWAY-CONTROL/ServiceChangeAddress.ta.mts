/* eslint-disable */
import {
    INTEGER,
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
 * @summary ServiceChangeAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeAddress  ::=  CHOICE
 *     {
 *         portNumber                    [0] INTEGER(0..65535), -- TCP/UDP port number
 *         ip4Address                    [1] IP4Address,
 *         ip6Address                    [2] IP6Address,
 *         domainName                    [3] DomainName,
 *         deviceName                    [4] PathName,
 *         mtpAddress                    [5] MtpAddress,
 *         ...
 *     }
 * ```
 */
export
type ServiceChangeAddress =
    { portNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { ip4Address: IP4Address } /* CHOICE_ALT_ROOT */
    | { ip6Address: IP6Address } /* CHOICE_ALT_ROOT */
    | { domainName: DomainName } /* CHOICE_ALT_ROOT */
    | { deviceName: PathName } /* CHOICE_ALT_ROOT */
    | { mtpAddress: MtpAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ServiceChangeAddress: $.ASN1Decoder<ServiceChangeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeAddress (el: _Element): ServiceChangeAddress {
    if (!_cached_decoder_for_ServiceChangeAddress) { _cached_decoder_for_ServiceChangeAddress = $._decode_extensible_choice<ServiceChangeAddress>({
    "CONTEXT 0": [ "portNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "ip4Address", $._decode_implicit<IP4Address>(() => _decode_IP4Address) ],
    "CONTEXT 2": [ "ip6Address", $._decode_implicit<IP6Address>(() => _decode_IP6Address) ],
    "CONTEXT 3": [ "domainName", $._decode_implicit<DomainName>(() => _decode_DomainName) ],
    "CONTEXT 4": [ "deviceName", $._decode_implicit<PathName>(() => _decode_PathName) ],
    "CONTEXT 5": [ "mtpAddress", $._decode_implicit<MtpAddress>(() => _decode_MtpAddress) ]
}); }
    return _cached_decoder_for_ServiceChangeAddress(el);
}

let _cached_encoder_for_ServiceChangeAddress: $.ASN1Encoder<ServiceChangeAddress> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeAddress (value: ServiceChangeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeAddress) { _cached_encoder_for_ServiceChangeAddress = $._encode_choice<ServiceChangeAddress>({
    "portNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "ip4Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IP4Address, $.BER),
    "ip6Address": $._encode_implicit(_TagClass.context, 2, () => _encode_IP6Address, $.BER),
    "domainName": $._encode_implicit(_TagClass.context, 3, () => _encode_DomainName, $.BER),
    "deviceName": $._encode_implicit(_TagClass.context, 4, () => _encode_PathName, $.BER),
    "mtpAddress": $._encode_implicit(_TagClass.context, 5, () => _encode_MtpAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceChangeAddress(value, elGetter);
}


/* eslint-enable */
