/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDFProtocolInfo, _decode_SDFProtocolInfo, _encode_SDFProtocolInfo } from "../IN-SCF-SCF-datatypes/SDFProtocolInfo.ta.mjs";
// export { SDFProtocolInfo, _decode_SDFProtocolInfo, _encode_SDFProtocolInfo } from "../IN-SCF-SCF-datatypes/SDFProtocolInfo.ta.mjs";
import { SCFProtocolInfo, _decode_SCFProtocolInfo, _encode_SCFProtocolInfo } from "../IN-SCF-SCF-datatypes/SCFProtocolInfo.ta.mjs";
// export { SCFProtocolInfo, _decode_SCFProtocolInfo, _encode_SCFProtocolInfo } from "../IN-SCF-SCF-datatypes/SCFProtocolInfo.ta.mjs";


/**
 * @summary ProtocolInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolInfo  ::=  CHOICE {sdf  [1]  SDFProtocolInfo,
 *                          scf  [2]  SCFProtocolInfo
 * }
 * ```
 */
export
type ProtocolInfo =
    { sdf: SDFProtocolInfo } /* CHOICE_ALT_ROOT */
    | { scf: SCFProtocolInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProtocolInfo: $.ASN1Decoder<ProtocolInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolInfo (el: _Element): ProtocolInfo {
    if (!_cached_decoder_for_ProtocolInfo) { _cached_decoder_for_ProtocolInfo = $._decode_inextensible_choice<ProtocolInfo>({
    "CONTEXT 1": [ "sdf", $._decode_implicit<SDFProtocolInfo>(() => _decode_SDFProtocolInfo) ],
    "CONTEXT 2": [ "scf", $._decode_implicit<SCFProtocolInfo>(() => _decode_SCFProtocolInfo) ]
}); }
    return _cached_decoder_for_ProtocolInfo(el);
}

let _cached_encoder_for_ProtocolInfo: $.ASN1Encoder<ProtocolInfo> | null = null;

/**
 * @summary Encodes a(n) ProtocolInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ProtocolInfo (value: ProtocolInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtocolInfo) { _cached_encoder_for_ProtocolInfo = $._encode_choice<ProtocolInfo>({
    "sdf": $._encode_implicit(_TagClass.context, 1, () => _encode_SDFProtocolInfo, $.BER),
    "scf": $._encode_implicit(_TagClass.context, 2, () => _encode_SCFProtocolInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProtocolInfo(value, elGetter);
}


/* eslint-enable */
