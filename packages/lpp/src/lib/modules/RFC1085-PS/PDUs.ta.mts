/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ConnectRequest_PDU, _decode_ConnectRequest_PDU, _encode_ConnectRequest_PDU } from "../RFC1085-PS/ConnectRequest-PDU.ta.mjs";
// export { ConnectRequest_PDU, _decode_ConnectRequest_PDU, _encode_ConnectRequest_PDU } from "../RFC1085-PS/ConnectRequest-PDU.ta.mjs";
import { ConnectResponse_PDU, _decode_ConnectResponse_PDU, _encode_ConnectResponse_PDU } from "../RFC1085-PS/ConnectResponse-PDU.ta.mjs";
// export { ConnectResponse_PDU, _decode_ConnectResponse_PDU, _encode_ConnectResponse_PDU } from "../RFC1085-PS/ConnectResponse-PDU.ta.mjs";
import { ReleaseRequest_PDU, _decode_ReleaseRequest_PDU, _encode_ReleaseRequest_PDU } from "../RFC1085-PS/ReleaseRequest-PDU.ta.mjs";
// export { ReleaseRequest_PDU, _decode_ReleaseRequest_PDU, _encode_ReleaseRequest_PDU } from "../RFC1085-PS/ReleaseRequest-PDU.ta.mjs";
import { ReleaseResponse_PDU, _decode_ReleaseResponse_PDU, _encode_ReleaseResponse_PDU } from "../RFC1085-PS/ReleaseResponse-PDU.ta.mjs";
// export { ReleaseResponse_PDU, _decode_ReleaseResponse_PDU, _encode_ReleaseResponse_PDU } from "../RFC1085-PS/ReleaseResponse-PDU.ta.mjs";
import { Abort_PDU, _decode_Abort_PDU, _encode_Abort_PDU } from "../RFC1085-PS/Abort-PDU.ta.mjs";
// export { Abort_PDU, _decode_Abort_PDU, _encode_Abort_PDU } from "../RFC1085-PS/Abort-PDU.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
// export { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
import { CL_UserData_PDU, _decode_CL_UserData_PDU, _encode_CL_UserData_PDU } from "../RFC1085-PS/CL-UserData-PDU.ta.mjs";
// export { CL_UserData_PDU, _decode_CL_UserData_PDU, _encode_CL_UserData_PDU } from "../RFC1085-PS/CL-UserData-PDU.ta.mjs";


/**
 * @summary PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUs  ::=  CHOICE {
 *     connectRequest      ConnectRequest-PDU,
 *     connectResponse     ConnectResponse-PDU,
 *     releaseRequest      ReleaseRequest-PDU,
 *     releaseResponse     ReleaseResponse-PDU,
 *     abort               Abort-PDU,
 *     userData            UserData-PDU,
 *     cL-userData         CL-UserData-PDU
 * }
 * ```
 */
export
type PDUs =
    { connectRequest: ConnectRequest_PDU } /* CHOICE_ALT_ROOT */
    | { connectResponse: ConnectResponse_PDU } /* CHOICE_ALT_ROOT */
    | { releaseRequest: ReleaseRequest_PDU } /* CHOICE_ALT_ROOT */
    | { releaseResponse: ReleaseResponse_PDU } /* CHOICE_ALT_ROOT */
    | { abort: Abort_PDU } /* CHOICE_ALT_ROOT */
    | { userData: UserData_PDU } /* CHOICE_ALT_ROOT */
    | { cL_userData: CL_UserData_PDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PDUs: $.ASN1Decoder<PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUs (el: _Element): PDUs {
    if (!_cached_decoder_for_PDUs) { _cached_decoder_for_PDUs = $._decode_inextensible_choice<PDUs>({
    "CONTEXT 0": [ "connectRequest", _decode_ConnectRequest_PDU ],
    "CONTEXT 1": [ "connectResponse", _decode_ConnectResponse_PDU ],
    "CONTEXT 2": [ "releaseRequest", _decode_ReleaseRequest_PDU ],
    "CONTEXT 3": [ "releaseResponse", _decode_ReleaseResponse_PDU ],
    "CONTEXT 4": [ "abort", _decode_Abort_PDU ],
    "CONTEXT 5": [ "userData", _decode_UserData_PDU ],
    "CONTEXT 6": [ "cL_userData", _decode_CL_UserData_PDU ]
}); }
    return _cached_decoder_for_PDUs(el);
}

let _cached_encoder_for_PDUs: $.ASN1Encoder<PDUs> | null = null;

/**
 * @summary Encodes a(n) PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_PDUs (value: PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUs) { _cached_encoder_for_PDUs = $._encode_choice<PDUs>({
    "connectRequest": _encode_ConnectRequest_PDU,
    "connectResponse": _encode_ConnectResponse_PDU,
    "releaseRequest": _encode_ReleaseRequest_PDU,
    "releaseResponse": _encode_ReleaseResponse_PDU,
    "abort": _encode_Abort_PDU,
    "userData": _encode_UserData_PDU,
    "cL_userData": _encode_CL_UserData_PDU,
}, $.BER); }
    return _cached_encoder_for_PDUs(value, elGetter);
}


/* eslint-enable */
