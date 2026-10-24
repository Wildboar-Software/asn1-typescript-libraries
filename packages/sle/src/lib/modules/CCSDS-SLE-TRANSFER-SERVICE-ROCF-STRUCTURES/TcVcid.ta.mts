/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type VcId, _decode_VcId, _encode_VcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/VcId.ta.mjs";


/**
 * @summary TcVcid
 * @description
 * 
 * Telecommand Virtual Channel filter for CLCW operational control fields.
 * Present on ROCF-START when the control word type is clcw; annex A carries it
 * on that alternative of ControlWordType. noTcVC is the null of section
 * 3.4.2.9.3: deliver every CLCW OCF, whichever telecommand VC the report
 * names. tcVcid names one telecommand VC, and only CLCWs for that VC are
 * delivered. The value must be in the permitted telecommand-VC set.
 *
 * CCSDS 911.5-B-4, section 3.4.2.9 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TcVcid                   ::=    CHOICE
 * {  noTcVC            [0]   NULL
 * ,  tcVcid            [1]   VcId
 * }
 * ```
 */
export
type TcVcid =
    { noTcVC: NULL } /* CHOICE_ALT_ROOT */
    | { tcVcid: VcId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TcVcid: $.ASN1Decoder<TcVcid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TcVcid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TcVcid (el: _Element): TcVcid {
    if (!_cached_decoder_for_TcVcid) { _cached_decoder_for_TcVcid = $._decode_inextensible_choice<TcVcid>({
    "CONTEXT 0": [ "noTcVC", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "tcVcid", $._decode_implicit<VcId>(() => _decode_VcId) ]
}); }
    return _cached_decoder_for_TcVcid(el);
}

let _cached_encoder_for_TcVcid: $.ASN1Encoder<TcVcid> | null = null;

/**
 * @summary Encodes a(n) TcVcid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TcVcid, encoded as an ASN.1 Element.
 */
export
function _encode_TcVcid (value: TcVcid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TcVcid) { _cached_encoder_for_TcVcid = $._encode_choice<TcVcid>({
    "noTcVC": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "tcVcid": $._encode_implicit(_TagClass.context, 1, () => _encode_VcId, $.BER),
}, $.BER); }
    return _cached_encoder_for_TcVcid(value, elGetter);
}


/* eslint-enable */
