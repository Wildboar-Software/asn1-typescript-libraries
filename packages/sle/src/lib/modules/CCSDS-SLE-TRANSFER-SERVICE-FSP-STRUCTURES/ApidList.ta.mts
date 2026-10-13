/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Apid, _decode_Apid, _encode_Apid } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Apid.ta.mjs";
// export { Apid, _decode_Apid, _encode_Apid } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Apid.ta.mjs";


/**
 * @summary ApidList
 * @description
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
    return _cached_decoder_for_ApidList(el);
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
