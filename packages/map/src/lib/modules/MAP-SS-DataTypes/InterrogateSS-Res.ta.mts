/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicServiceGroupList, _decode_BasicServiceGroupList, _encode_BasicServiceGroupList } from "../MAP-SS-DataTypes/BasicServiceGroupList.ta.mjs";
import { ForwardingFeatureList, _decode_ForwardingFeatureList, _encode_ForwardingFeatureList } from "../MAP-SS-DataTypes/ForwardingFeatureList.ta.mjs";
import { GenericServiceInfo, _decode_GenericServiceInfo, _encode_GenericServiceInfo } from "../MAP-SS-DataTypes/GenericServiceInfo.ta.mjs";
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";


/**
 * @summary InterrogateSS_Res
 * @description
 *
 * Result of MAP_INTERROGATE_SS: status, basic service list, forwarding
 * features, or generic service info. MSC–VLR and VLR–HLR (3GPP TS 29.002
 * V19.1.0 clauses 11.5 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterrogateSS-Res  ::=  CHOICE {
 *     ss-Status    [0] SS-Status,
 *     basicServiceGroupList    [2] BasicServiceGroupList,
 *     forwardingFeatureList    [3] ForwardingFeatureList,
 *     genericServiceInfo    [4]    GenericServiceInfo }
 * ```
 */
export
type InterrogateSS_Res =
    { ss_Status: SS_Status } /* CHOICE_ALT_ROOT */
    | { basicServiceGroupList: BasicServiceGroupList } /* CHOICE_ALT_ROOT */
    | { forwardingFeatureList: ForwardingFeatureList } /* CHOICE_ALT_ROOT */
    | { genericServiceInfo: GenericServiceInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InterrogateSS_Res: $.ASN1Decoder<InterrogateSS_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterrogateSS_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterrogateSS_Res (el: _Element): InterrogateSS_Res {
    if (!_cached_decoder_for_InterrogateSS_Res) { _cached_decoder_for_InterrogateSS_Res = $._decode_inextensible_choice<InterrogateSS_Res>({
    "CONTEXT 0": [ "ss_Status", $._decode_implicit<SS_Status>(() => _decode_SS_Status) ],
    "CONTEXT 2": [ "basicServiceGroupList", $._decode_implicit<BasicServiceGroupList>(() => _decode_BasicServiceGroupList) ],
    "CONTEXT 3": [ "forwardingFeatureList", $._decode_implicit<ForwardingFeatureList>(() => _decode_ForwardingFeatureList) ],
    "CONTEXT 4": [ "genericServiceInfo", $._decode_implicit<GenericServiceInfo>(() => _decode_GenericServiceInfo) ]
}); }
    return _cached_decoder_for_InterrogateSS_Res(el);
}

let _cached_encoder_for_InterrogateSS_Res: $.ASN1Encoder<InterrogateSS_Res> | null = null;

/**
 * @summary Encodes a(n) InterrogateSS_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterrogateSS_Res, encoded as an ASN.1 Element.
 */
export
function _encode_InterrogateSS_Res (value: InterrogateSS_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterrogateSS_Res) { _cached_encoder_for_InterrogateSS_Res = $._encode_choice<InterrogateSS_Res>({
    "ss_Status": $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Status, $.BER),
    "basicServiceGroupList": $._encode_implicit(_TagClass.context, 2, () => _encode_BasicServiceGroupList, $.BER),
    "forwardingFeatureList": $._encode_implicit(_TagClass.context, 3, () => _encode_ForwardingFeatureList, $.BER),
    "genericServiceInfo": $._encode_implicit(_TagClass.context, 4, () => _encode_GenericServiceInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_InterrogateSS_Res(value, elGetter);
}


/* eslint-enable */
