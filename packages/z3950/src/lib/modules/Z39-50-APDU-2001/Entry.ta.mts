/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TermInfo, _decode_TermInfo, _encode_TermInfo } from "../Z39-50-APDU-2001/TermInfo.ta.mjs";
// export { TermInfo, _decode_TermInfo, _encode_TermInfo } from "../Z39-50-APDU-2001/TermInfo.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
// export { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary Entry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Entry  ::=  CHOICE {
 *     termInfo                [1] IMPLICIT TermInfo,
 *     surrogateDiagnostic     [2] DiagRec
 * }
 * ```
 */
export
type Entry =
    { termInfo: TermInfo } /* CHOICE_ALT_ROOT */
    | { surrogateDiagnostic: DiagRec } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Entry: $.ASN1Decoder<Entry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Entry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Entry (el: _Element): Entry {
    if (!_cached_decoder_for_Entry) { _cached_decoder_for_Entry = $._decode_inextensible_choice<Entry>({
    "CONTEXT 1": [ "termInfo", $._decode_implicit<TermInfo>(() => _decode_TermInfo) ],
    "CONTEXT 2": [ "surrogateDiagnostic", $._decode_explicit<DiagRec>(() => _decode_DiagRec) ]
}); }
    return _cached_decoder_for_Entry(el);
}

let _cached_encoder_for_Entry: $.ASN1Encoder<Entry> | null = null;

/**
 * @summary Encodes a(n) Entry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry, encoded as an ASN.1 Element.
 */
export
function _encode_Entry (value: Entry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Entry) { _cached_encoder_for_Entry = $._encode_choice<Entry>({
    "termInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_TermInfo, $.BER),
    "surrogateDiagnostic": $._encode_explicit(_TagClass.context, 2, () => _encode_DiagRec, $.BER),
}, $.BER); }
    return _cached_encoder_for_Entry(value, elGetter);
}


/* eslint-enable */
