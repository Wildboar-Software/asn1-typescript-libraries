/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingRecord, _decode_ChargingRecord, _encode_ChargingRecord } from "../CHFChargingDataTypes/ChargingRecord.ta.mjs";


/**
 * @summary CHFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CHFRecord   ::=  CHOICE {
 *    chargingFunctionRecord     [200] IMPLICIT ChargingRecord}
 * ```
 */
export
type CHFRecord =
    { chargingFunctionRecord: ChargingRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CHFRecord: $.ASN1Decoder<CHFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CHFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CHFRecord (el: _Element): CHFRecord {
    if (!_cached_decoder_for_CHFRecord) { _cached_decoder_for_CHFRecord = $._decode_inextensible_choice<CHFRecord>({
    "CONTEXT 200": [ "chargingFunctionRecord", $._decode_implicit<ChargingRecord>(() => _decode_ChargingRecord) ]
}); }
    return _cached_decoder_for_CHFRecord(el);
}

let _cached_encoder_for_CHFRecord: $.ASN1Encoder<CHFRecord> | null = null;

/**
 * @summary Encodes a(n) CHFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CHFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CHFRecord (value: CHFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CHFRecord) { _cached_encoder_for_CHFRecord = $._encode_choice<CHFRecord>({
    "chargingFunctionRecord": $._encode_implicit(_TagClass.context, 200, () => _encode_ChargingRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_CHFRecord(value, elGetter);
}


/* eslint-enable */
