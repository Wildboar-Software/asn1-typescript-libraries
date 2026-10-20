/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MECORecord, _decode_MECORecord, _encode_MECORecord } from "../MONTEChargingDataTypes/MECORecord.ta.mjs";
import { MERERecord, _decode_MERERecord, _encode_MERERecord } from "../MONTEChargingDataTypes/MERERecord.ta.mjs";


/**
 * @summary MERecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MERecordType  ::=  CHOICE {
 *    mECORecord     [103] IMPLICIT MECORecord,
 *    mERERecord     [104] IMPLICIT MERERecord}
 * ```
 */
export
type MERecordType =
    { mECORecord: MECORecord } /* CHOICE_ALT_ROOT */
    | { mERERecord: MERERecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MERecordType: $.ASN1Decoder<MERecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MERecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MERecordType (el: _Element): MERecordType {
    if (!_cached_decoder_for_MERecordType) { _cached_decoder_for_MERecordType = $._decode_inextensible_choice<MERecordType>({
    "CONTEXT 103": [ "mECORecord", $._decode_implicit<MECORecord>(() => _decode_MECORecord) ],
    "CONTEXT 104": [ "mERERecord", $._decode_implicit<MERERecord>(() => _decode_MERERecord) ]
}); }
    return _cached_decoder_for_MERecordType(el);
}

let _cached_encoder_for_MERecordType: $.ASN1Encoder<MERecordType> | null = null;

/**
 * @summary Encodes a(n) MERecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MERecordType, encoded as an ASN.1 Element.
 */
export
function _encode_MERecordType (value: MERecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MERecordType) { _cached_encoder_for_MERecordType = $._encode_choice<MERecordType>({
    "mECORecord": $._encode_implicit(_TagClass.context, 103, () => _encode_MECORecord, $.BER),
    "mERERecord": $._encode_implicit(_TagClass.context, 104, () => _encode_MERERecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_MERecordType(value, elGetter);
}


/* eslint-enable */
