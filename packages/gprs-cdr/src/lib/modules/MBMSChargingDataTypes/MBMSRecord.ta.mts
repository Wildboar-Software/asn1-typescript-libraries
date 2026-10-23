/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUBBMSCRecord, _decode_SUBBMSCRecord, _encode_SUBBMSCRecord } from "../MBMSChargingDataTypes/SUBBMSCRecord.ta.mjs";
import { CONTENTBMSCRecord, _decode_CONTENTBMSCRecord, _encode_CONTENTBMSCRecord } from "../MBMSChargingDataTypes/CONTENTBMSCRecord.ta.mjs";


/**
 * @summary MBMSRecord
 * @description
 *
 * Offline charging record for the BM-SC.
 *
 * `sUBBMSCRecord` is the subscriber BM-SC CDR (S-BMSC-CDR): one
 * record per MBMS bearer service per receiving subscriber.
 * `cONTENTBMSCRecord` is the content-provider BM-SC CDR
 * (C-BMSC-CDR): one record per MBMS bearer service. The MBMS
 * Charged Party information element, which indicates whether the
 * content provider or the receiving subscriber is charged, is bound
 * to the record type. It is available only in the BM-SC, and only
 * for offline charging.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.3 and 6.1.3, and table 6.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSRecord  ::=  CHOICE {
 *    sUBBMSCRecord         [78] IMPLICIT SUBBMSCRecord,
 *    cONTENTBMSCRecord     [79] IMPLICIT CONTENTBMSCRecord}
 * ```
 */
export
type MBMSRecord =
    { sUBBMSCRecord: SUBBMSCRecord } /* CHOICE_ALT_ROOT */
    | { cONTENTBMSCRecord: CONTENTBMSCRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MBMSRecord: $.ASN1Decoder<MBMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSRecord (el: _Element): MBMSRecord {
    if (!_cached_decoder_for_MBMSRecord) { _cached_decoder_for_MBMSRecord = $._decode_inextensible_choice<MBMSRecord>({
    "CONTEXT 78": [ "sUBBMSCRecord", $._decode_implicit<SUBBMSCRecord>(() => _decode_SUBBMSCRecord) ],
    "CONTEXT 79": [ "cONTENTBMSCRecord", $._decode_implicit<CONTENTBMSCRecord>(() => _decode_CONTENTBMSCRecord) ]
}); }
    return _cached_decoder_for_MBMSRecord(el);
}

let _cached_encoder_for_MBMSRecord: $.ASN1Encoder<MBMSRecord> | null = null;

/**
 * @summary Encodes a(n) MBMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSRecord (value: MBMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSRecord) { _cached_encoder_for_MBMSRecord = $._encode_choice<MBMSRecord>({
    "sUBBMSCRecord": $._encode_implicit(_TagClass.context, 78, () => _encode_SUBBMSCRecord, $.BER),
    "cONTENTBMSCRecord": $._encode_implicit(_TagClass.context, 79, () => _encode_CONTENTBMSCRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_MBMSRecord(value, elGetter);
}


/* eslint-enable */
