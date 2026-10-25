/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCSMORecord, _decode_SCSMORecord, _encode_SCSMORecord } from "../SMSChargingDataTypes/SCSMORecord.ta.mjs";
import { SCSMTRecord, _decode_SCSMTRecord, _encode_SCSMTRecord } from "../SMSChargingDataTypes/SCSMTRecord.ta.mjs";
import { SCDVTT4Record, _decode_SCDVTT4Record, _encode_SCDVTT4Record } from "../SMSChargingDataTypes/SCDVTT4Record.ta.mjs";
import { ISMSMORecord, _decode_ISMSMORecord, _encode_ISMSMORecord } from "../SMSChargingDataTypes/ISMSMORecord.ta.mjs";
import { ISMSMTRecord, _decode_ISMSMTRecord, _encode_ISMSMTRecord } from "../SMSChargingDataTypes/ISMSMTRecord.ta.mjs";


/**
 * @summary SMSRecordType
 * @description
 *
 * One SMS CDR, the record the CDF creates for a single Charging Data Request
 * [event] (clause 6.1.3.2).
 *
 * - `sCSMORecord` (context tag 93): SC-SMO, SMS-SC originated.
 * - `sCSMTRecord` (context tag 94): SC-SMT, SMS-SC terminated.
 * - `sCDVTT4Record` (context tag 110): SC-DVT-T4, device trigger over T4.
 * - `sCSMOT4Record` (context tag 111): SC-SMO-T4, MSISDN-less MO-SMS via T4.
 *   The ASN.1 types this alternative as `SCSMTRecord`.
 * - `iSMSMORecord` (context tag 112): ISM-SMO, IP-SM-GW originated.
 * - `iSMSMTRecord` (context tag 113): ISM-SMT, IP-SM-GW terminated.
 *
 * 3GPP TS 32.274 V19.1.0 clause 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRecordType  ::=  CHOICE {
 *    sCSMORecord       [93] IMPLICIT SCSMORecord,
 *    sCSMTRecord       [94] IMPLICIT SCSMTRecord,
 *    sCDVTT4Record     [110] IMPLICIT SCDVTT4Record,
 *    sCSMOT4Record     [111] IMPLICIT SCSMTRecord,
 *    iSMSMORecord      [112] IMPLICIT ISMSMORecord,
 *    iSMSMTRecord      [113] IMPLICIT ISMSMTRecord}
 * ```
 */
export
type SMSRecordType =
    { sCSMORecord: SCSMORecord } /* CHOICE_ALT_ROOT */
    | { sCSMTRecord: SCSMTRecord } /* CHOICE_ALT_ROOT */
    | { sCDVTT4Record: SCDVTT4Record } /* CHOICE_ALT_ROOT */
    | { sCSMOT4Record: SCSMTRecord } /* CHOICE_ALT_ROOT */
    | { iSMSMORecord: ISMSMORecord } /* CHOICE_ALT_ROOT */
    | { iSMSMTRecord: ISMSMTRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SMSRecordType: $.ASN1Decoder<SMSRecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSRecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSRecordType (el: _Element): SMSRecordType {
    if (!_cached_decoder_for_SMSRecordType) { _cached_decoder_for_SMSRecordType = $._decode_inextensible_choice<SMSRecordType>({
    "CONTEXT 93": [ "sCSMORecord", $._decode_implicit<SCSMORecord>(() => _decode_SCSMORecord) ],
    "CONTEXT 94": [ "sCSMTRecord", $._decode_implicit<SCSMTRecord>(() => _decode_SCSMTRecord) ],
    "CONTEXT 110": [ "sCDVTT4Record", $._decode_implicit<SCDVTT4Record>(() => _decode_SCDVTT4Record) ],
    "CONTEXT 111": [ "sCSMOT4Record", $._decode_implicit<SCSMTRecord>(() => _decode_SCSMTRecord) ],
    "CONTEXT 112": [ "iSMSMORecord", $._decode_implicit<ISMSMORecord>(() => _decode_ISMSMORecord) ],
    "CONTEXT 113": [ "iSMSMTRecord", $._decode_implicit<ISMSMTRecord>(() => _decode_ISMSMTRecord) ]
}); }
    return _cached_decoder_for_SMSRecordType(el);
}

let _cached_encoder_for_SMSRecordType: $.ASN1Encoder<SMSRecordType> | null = null;

/**
 * @summary Encodes a(n) SMSRecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSRecordType, encoded as an ASN.1 Element.
 */
export
function _encode_SMSRecordType (value: SMSRecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSRecordType) { _cached_encoder_for_SMSRecordType = $._encode_choice<SMSRecordType>({
    "sCSMORecord": $._encode_implicit(_TagClass.context, 93, () => _encode_SCSMORecord, $.BER),
    "sCSMTRecord": $._encode_implicit(_TagClass.context, 94, () => _encode_SCSMTRecord, $.BER),
    "sCDVTT4Record": $._encode_implicit(_TagClass.context, 110, () => _encode_SCDVTT4Record, $.BER),
    "sCSMOT4Record": $._encode_implicit(_TagClass.context, 111, () => _encode_SCSMTRecord, $.BER),
    "iSMSMORecord": $._encode_implicit(_TagClass.context, 112, () => _encode_ISMSMORecord, $.BER),
    "iSMSMTRecord": $._encode_implicit(_TagClass.context, 113, () => _encode_ISMSMTRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_SMSRecordType(value, elGetter);
}


/* eslint-enable */
