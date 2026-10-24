/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Apid, _decode_Apid, _encode_Apid } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Apid.ta.mjs";


/**
 * @summary ApidList
 * @description
 * 
 * APIDs the service instance is authorized to access. `any` accepts every APID.
 * `apidList` is the authorized set. Annex A requires the entries to be in
 * ascending order and allows 1 to 2048 identifiers.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11), section 3.6.2.18.1, and annex
 * A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApidList                 ::=    CHOICE
 * {  any               [0]   NULL
 * ,  apidList          [1]   SEQUENCE SIZE (1 .. 2048) OF Apid
 * }
 * ```
 */
export
type ApidList =
    { any_: NULL } /* CHOICE_ALT_ROOT */
    | { apidList: Apid[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ApidList: $.ASN1Decoder<ApidList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApidList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApidList (el: _Element): ApidList {
    if (!_cached_decoder_for_ApidList) { _cached_decoder_for_ApidList = $._decode_inextensible_choice<ApidList>({
    "CONTEXT 0": [ "any_", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "apidList", $._decode_implicit<Apid[]>(() => $._decodeSequenceOf<Apid>(() => _decode_Apid)) ]
}); }
    const _decoded = _cached_decoder_for_ApidList(el);
    if ("apidList" in _decoded) {
        if (_decoded.apidList.length < 1 || _decoded.apidList.length > 2048) {
            throw new ASN1SizeError("ApidList.apidList violates SIZE (1..2048)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_ApidList: $.ASN1Encoder<ApidList> | null = null;

/**
 * @summary Encodes a(n) ApidList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApidList, encoded as an ASN.1 Element.
 */
export
function _encode_ApidList (value: ApidList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApidList) { _cached_encoder_for_ApidList = $._encode_choice<ApidList>({
    "any_": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "apidList": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Apid>(() => _encode_Apid, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ApidList(value, elGetter);
}


/* eslint-enable */
