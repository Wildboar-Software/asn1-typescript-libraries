/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IdValue, _decode_IdValue, _encode_IdValue } from "../CSChargingDataTypes/IdValue.ta.mjs";


/**
 * @summary DayClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayClass    ::=  CHOICE {
 *    distinguishedName          [2] IMPLICIT SEQUENCE  OF
 *       SET  OF
 *          IdValue,
 *    nonSpecificForm            [3] IMPLICIT OCTET STRING,
 *    localDistinguishedName     [4] IMPLICIT SEQUENCE  OF
 *       SET  OF
 *          IdValue}
 * ```
 */
export
type DayClass =
    { distinguishedName: IdValue[][] } /* CHOICE_ALT_ROOT */
    | { nonSpecificForm: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { localDistinguishedName: IdValue[][] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DayClass: $.ASN1Decoder<DayClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DayClass (el: _Element): DayClass {
    if (!_cached_decoder_for_DayClass) { _cached_decoder_for_DayClass = $._decode_inextensible_choice<DayClass>({
    "CONTEXT 2": [ "distinguishedName", $._decode_implicit<IdValue[][]>(() => $._decodeSequenceOf<IdValue[]>(() => $._decodeSetOf<IdValue>(() => _decode_IdValue))) ],
    "CONTEXT 3": [ "nonSpecificForm", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "localDistinguishedName", $._decode_implicit<IdValue[][]>(() => $._decodeSequenceOf<IdValue[]>(() => $._decodeSetOf<IdValue>(() => _decode_IdValue))) ]
}); }
    return _cached_decoder_for_DayClass(el);
}

let _cached_encoder_for_DayClass: $.ASN1Encoder<DayClass> | null = null;

/**
 * @summary Encodes a(n) DayClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayClass, encoded as an ASN.1 Element.
 */
export
function _encode_DayClass (value: DayClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DayClass) { _cached_encoder_for_DayClass = $._encode_choice<DayClass>({
    "distinguishedName": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<IdValue[]>(() => $._encodeSetOf<IdValue>(() => _encode_IdValue, $.BER), $.BER), $.BER),
    "nonSpecificForm": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "localDistinguishedName": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<IdValue[]>(() => $._encodeSetOf<IdValue>(() => _encode_IdValue, $.BER), $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DayClass(value, elGetter);
}


/* eslint-enable */
