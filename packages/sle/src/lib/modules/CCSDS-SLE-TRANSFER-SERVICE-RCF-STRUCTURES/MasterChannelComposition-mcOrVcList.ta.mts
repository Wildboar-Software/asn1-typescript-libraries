/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VcId, _decode_VcId, _encode_VcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/VcId.ta.mjs";


/**
 * @summary MasterChannelComposition_mcOrVcList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterChannelComposition-mcOrVcList ::= CHOICE
 *    { masterChannel         [0] NULL
 *    , vcList                [1] SET SIZE (1 .. 64) OF VcId
 *    -- Set size range for TM Transfer Frames: (1 .. 8)
 *    -- Set size range for AOS Transfer Frames: (1 .. 64)
 *    -- Set size range for USLP Transfer Frames: (1 .. 64)
 *    }
 * ```
 */
export
type MasterChannelComposition_mcOrVcList =
    { masterChannel: NULL } /* CHOICE_ALT_ROOT */
    | { vcList: VcId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MasterChannelComposition_mcOrVcList: $.ASN1Decoder<MasterChannelComposition_mcOrVcList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterChannelComposition_mcOrVcList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MasterChannelComposition_mcOrVcList (el: _Element): MasterChannelComposition_mcOrVcList {
    if (!_cached_decoder_for_MasterChannelComposition_mcOrVcList) { _cached_decoder_for_MasterChannelComposition_mcOrVcList = $._decode_inextensible_choice<MasterChannelComposition_mcOrVcList>({
    "CONTEXT 0": [ "masterChannel", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "vcList", $._decode_implicit<VcId[]>(() => $._decodeSetOf<VcId>(() => _decode_VcId)) ]
}); }
    const _decoded = _cached_decoder_for_MasterChannelComposition_mcOrVcList(el);
    if ("vcList" in _decoded) {
        if (_decoded.vcList.length < 1 || _decoded.vcList.length > 64) {
            throw new ASN1SizeError("MasterChannelComposition_mcOrVcList.vcList violates SIZE (1..64)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_MasterChannelComposition_mcOrVcList: $.ASN1Encoder<MasterChannelComposition_mcOrVcList> | null = null;

/**
 * @summary Encodes a(n) MasterChannelComposition_mcOrVcList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterChannelComposition_mcOrVcList, encoded as an ASN.1 Element.
 */
export
function _encode_MasterChannelComposition_mcOrVcList (value: MasterChannelComposition_mcOrVcList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MasterChannelComposition_mcOrVcList) { _cached_encoder_for_MasterChannelComposition_mcOrVcList = $._encode_choice<MasterChannelComposition_mcOrVcList>({
    "masterChannel": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "vcList": $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<VcId>(() => _encode_VcId, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MasterChannelComposition_mcOrVcList(value, elGetter);
}


/* eslint-enable */
