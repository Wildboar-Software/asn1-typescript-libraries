/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type VcId, _decode_VcId, _encode_VcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/VcId.ta.mjs";


/**
 * @summary TcVcidSet
 * @description
 * 
 * permitted-tc-vcid-set, configured by service management. noTcVC means a
 * telecommand VC must not be selected, for example because the OCFs to be
 * delivered are not CLCWs. tcVcids is the set of telecommand VCs the user may
 * name when requesting CLCWs. An ROCF-START tc-vcid outside this set is
 * invalid.
 *
 * CCSDS 911.5-B-4, sections 3.4.2.9, 3.4.2.12, and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TcVcidSet                ::=    CHOICE
 * {  noTcVC            [0]   NULL
 * ,  tcVcids           [1]   SEQUENCE OF VcId
 * }
 * ```
 */
export
type TcVcidSet =
    { noTcVC: NULL } /* CHOICE_ALT_ROOT */
    | { tcVcids: VcId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TcVcidSet: $.ASN1Decoder<TcVcidSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TcVcidSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TcVcidSet (el: _Element): TcVcidSet {
    if (!_cached_decoder_for_TcVcidSet) { _cached_decoder_for_TcVcidSet = $._decode_inextensible_choice<TcVcidSet>({
    "CONTEXT 0": [ "noTcVC", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "tcVcids", $._decode_implicit<VcId[]>(() => $._decodeSequenceOf<VcId>(() => _decode_VcId)) ]
}); }
    return _cached_decoder_for_TcVcidSet(el);
}

let _cached_encoder_for_TcVcidSet: $.ASN1Encoder<TcVcidSet> | null = null;

/**
 * @summary Encodes a(n) TcVcidSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TcVcidSet, encoded as an ASN.1 Element.
 */
export
function _encode_TcVcidSet (value: TcVcidSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TcVcidSet) { _cached_encoder_for_TcVcidSet = $._encode_choice<TcVcidSet>({
    "noTcVC": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "tcVcids": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<VcId>(() => _encode_VcId, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_TcVcidSet(value, elGetter);
}


/* eslint-enable */
