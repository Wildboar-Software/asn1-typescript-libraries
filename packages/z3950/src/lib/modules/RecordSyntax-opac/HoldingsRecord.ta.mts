/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HoldingsAndCircData, _decode_HoldingsAndCircData, _encode_HoldingsAndCircData } from "../RecordSyntax-opac/HoldingsAndCircData.ta.mjs";
// export { HoldingsAndCircData, _decode_HoldingsAndCircData, _encode_HoldingsAndCircData } from "../RecordSyntax-opac/HoldingsAndCircData.ta.mjs";


/**
 * @summary HoldingsRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldingsRecord  ::=   CHOICE {
 *    marcHoldingsRecord     [1] IMPLICIT EXTERNAL,
 *    holdingsAndCirc        [2] IMPLICIT HoldingsAndCircData}
 * ```
 */
export
type HoldingsRecord =
    { marcHoldingsRecord: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { holdingsAndCirc: HoldingsAndCircData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HoldingsRecord: $.ASN1Decoder<HoldingsRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldingsRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldingsRecord (el: _Element): HoldingsRecord {
    if (!_cached_decoder_for_HoldingsRecord) { _cached_decoder_for_HoldingsRecord = $._decode_inextensible_choice<HoldingsRecord>({
    "CONTEXT 1": [ "marcHoldingsRecord", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 2": [ "holdingsAndCirc", $._decode_implicit<HoldingsAndCircData>(() => _decode_HoldingsAndCircData) ]
}); }
    return _cached_decoder_for_HoldingsRecord(el);
}

let _cached_encoder_for_HoldingsRecord: $.ASN1Encoder<HoldingsRecord> | null = null;

/**
 * @summary Encodes a(n) HoldingsRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldingsRecord, encoded as an ASN.1 Element.
 */
export
function _encode_HoldingsRecord (value: HoldingsRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldingsRecord) { _cached_encoder_for_HoldingsRecord = $._encode_choice<HoldingsRecord>({
    "marcHoldingsRecord": $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER),
    "holdingsAndCirc": $._encode_implicit(_TagClass.context, 2, () => _encode_HoldingsAndCircData, $.BER),
}, $.BER); }
    return _cached_encoder_for_HoldingsRecord(value, elGetter);
}


/* eslint-enable */
