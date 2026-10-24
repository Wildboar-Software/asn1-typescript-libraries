/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSChangeover, _decode_TSChangeover, _encode_TSChangeover } from "../CSChargingDataTypes/TSChangeover.ta.mjs";


/**
 * @summary TSNextChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSNextChange  ::=  CHOICE {
 *    noChangeover     [0] IMPLICIT NULL,
 *    tsChangeover     [1] IMPLICIT TSChangeover}
 * ```
 */
export
type TSNextChange =
    { noChangeover: NULL } /* CHOICE_ALT_ROOT */
    | { tsChangeover: TSChangeover } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSNextChange: $.ASN1Decoder<TSNextChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSNextChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSNextChange (el: _Element): TSNextChange {
    if (!_cached_decoder_for_TSNextChange) { _cached_decoder_for_TSNextChange = $._decode_inextensible_choice<TSNextChange>({
    "CONTEXT 0": [ "noChangeover", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "tsChangeover", $._decode_implicit<TSChangeover>(() => _decode_TSChangeover) ]
}); }
    return _cached_decoder_for_TSNextChange(el);
}

let _cached_encoder_for_TSNextChange: $.ASN1Encoder<TSNextChange> | null = null;

/**
 * @summary Encodes a(n) TSNextChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSNextChange, encoded as an ASN.1 Element.
 */
export
function _encode_TSNextChange (value: TSNextChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSNextChange) { _cached_encoder_for_TSNextChange = $._encode_choice<TSNextChange>({
    "noChangeover": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "tsChangeover": $._encode_implicit(_TagClass.context, 1, () => _encode_TSChangeover, $.BER),
}, $.BER); }
    return _cached_encoder_for_TSNextChange(value, elGetter);
}


/* eslint-enable */
