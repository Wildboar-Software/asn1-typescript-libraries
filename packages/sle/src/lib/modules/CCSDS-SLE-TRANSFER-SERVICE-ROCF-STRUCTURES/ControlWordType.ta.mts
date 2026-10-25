/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TcVcid, _decode_TcVcid, _encode_TcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TcVcid.ta.mjs";


/**
 * @summary ControlWordType
 * @description
 * 
 * Control-word filter on ROCF-START, and the place annex A puts the
 * conditional tc-vcid parameter of table 3-4.
 *
 * allControlWords delivers every OCF from the selected telemetry channel. clcw
 * delivers OCFs whose control word type is 0 (a CLCW) and carries the
 * telecommand VC: noTcVC delivers every such CLCW, and tcVcid delivers the
 * CLCWs that refer to that telecommand VC. notClcw delivers OCFs whose control
 * word type is 1. Section 3.4.2.8 says notClcw is the setting used to obtain
 * Frame Security Reports, and section 3.4.2.9 then omits tc-vcid. The value
 * must be in the permitted control-word-type set.
 *
 * CCSDS 911.5-B-4, sections 3.4.2.8, 3.4.2.9, and 1.6.1.9.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlWordType                ::=    CHOICE
 * {  allControlWords         [0]   NULL
 * ,  clcw                    [1]   TcVcid
 * ,  notClcw                 [2]   NULL
 * }
 * ```
 */
export
type ControlWordType =
    { allControlWords: NULL } /* CHOICE_ALT_ROOT */
    | { clcw: TcVcid } /* CHOICE_ALT_ROOT */
    | { notClcw: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ControlWordType: $.ASN1Decoder<ControlWordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlWordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlWordType (el: _Element): ControlWordType {
    if (!_cached_decoder_for_ControlWordType) { _cached_decoder_for_ControlWordType = $._decode_inextensible_choice<ControlWordType>({
    "CONTEXT 0": [ "allControlWords", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "clcw", $._decode_explicit<TcVcid>(() => _decode_TcVcid) ],
    "CONTEXT 2": [ "notClcw", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ControlWordType(el);
}

let _cached_encoder_for_ControlWordType: $.ASN1Encoder<ControlWordType> | null = null;

/**
 * @summary Encodes a(n) ControlWordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlWordType, encoded as an ASN.1 Element.
 */
export
function _encode_ControlWordType (value: ControlWordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlWordType) { _cached_encoder_for_ControlWordType = $._encode_choice<ControlWordType>({
    "allControlWords": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "clcw": $._encode_explicit(_TagClass.context, 1, () => _encode_TcVcid, $.BER),
    "notClcw": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ControlWordType(value, elGetter);
}


/* eslint-enable */
