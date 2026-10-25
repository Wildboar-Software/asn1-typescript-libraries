/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMO1SRecord, _decode_MMO1SRecord, _encode_MMO1SRecord } from "../MMSChargingDataTypes/MMO1SRecord.ta.mjs";
import { MMO4FRqRecord, _decode_MMO4FRqRecord, _encode_MMO4FRqRecord } from "../MMSChargingDataTypes/MMO4FRqRecord.ta.mjs";
import { MMO4FRsRecord, _decode_MMO4FRsRecord, _encode_MMO4FRsRecord } from "../MMSChargingDataTypes/MMO4FRsRecord.ta.mjs";
import { MMO4DRecord, _decode_MMO4DRecord, _encode_MMO4DRecord } from "../MMSChargingDataTypes/MMO4DRecord.ta.mjs";
import { MMO1DRecord, _decode_MMO1DRecord, _encode_MMO1DRecord } from "../MMSChargingDataTypes/MMO1DRecord.ta.mjs";
import { MMO4RRecord, _decode_MMO4RRecord, _encode_MMO4RRecord } from "../MMSChargingDataTypes/MMO4RRecord.ta.mjs";
import { MMO1RRecord, _decode_MMO1RRecord, _encode_MMO1RRecord } from "../MMSChargingDataTypes/MMO1RRecord.ta.mjs";
import { MMOMDRecord, _decode_MMOMDRecord, _encode_MMOMDRecord } from "../MMSChargingDataTypes/MMOMDRecord.ta.mjs";
import { MMR4FRecord, _decode_MMR4FRecord, _encode_MMR4FRecord } from "../MMSChargingDataTypes/MMR4FRecord.ta.mjs";
import { MMR1NRqRecord, _decode_MMR1NRqRecord, _encode_MMR1NRqRecord } from "../MMSChargingDataTypes/MMR1NRqRecord.ta.mjs";
import { MMR1NRsRecord, _decode_MMR1NRsRecord, _encode_MMR1NRsRecord } from "../MMSChargingDataTypes/MMR1NRsRecord.ta.mjs";
import { MMR1RtRecord, _decode_MMR1RtRecord, _encode_MMR1RtRecord } from "../MMSChargingDataTypes/MMR1RtRecord.ta.mjs";
import { MMR1ARecord, _decode_MMR1ARecord, _encode_MMR1ARecord } from "../MMSChargingDataTypes/MMR1ARecord.ta.mjs";
import { MMR4DRqRecord, _decode_MMR4DRqRecord, _encode_MMR4DRqRecord } from "../MMSChargingDataTypes/MMR4DRqRecord.ta.mjs";
import { MMR4DRsRecord, _decode_MMR4DRsRecord, _encode_MMR4DRsRecord } from "../MMSChargingDataTypes/MMR4DRsRecord.ta.mjs";
import { MMR1RRRecord, _decode_MMR1RRRecord, _encode_MMR1RRRecord } from "../MMSChargingDataTypes/MMR1RRRecord.ta.mjs";
import { MMR4RRqRecord, _decode_MMR4RRqRecord, _encode_MMR4RRqRecord } from "../MMSChargingDataTypes/MMR4RRqRecord.ta.mjs";
import { MMR4RRsRecord, _decode_MMR4RRsRecord, _encode_MMR4RRsRecord } from "../MMSChargingDataTypes/MMR4RRsRecord.ta.mjs";
import { MMRMDRecord, _decode_MMRMDRecord, _encode_MMRMDRecord } from "../MMSChargingDataTypes/MMRMDRecord.ta.mjs";
import { MMFRecord, _decode_MMFRecord, _encode_MMFRecord } from "../MMSChargingDataTypes/MMFRecord.ta.mjs";
import { MMBx1SRecord, _decode_MMBx1SRecord, _encode_MMBx1SRecord } from "../MMSChargingDataTypes/MMBx1SRecord.ta.mjs";
import { MMBx1VRecord, _decode_MMBx1VRecord, _encode_MMBx1VRecord } from "../MMSChargingDataTypes/MMBx1VRecord.ta.mjs";
import { MMBx1URecord, _decode_MMBx1URecord, _encode_MMBx1URecord } from "../MMSChargingDataTypes/MMBx1URecord.ta.mjs";
import { MMBx1DRecord, _decode_MMBx1DRecord, _encode_MMBx1DRecord } from "../MMSChargingDataTypes/MMBx1DRecord.ta.mjs";
import { MM7SRecord, _decode_MM7SRecord, _encode_MM7SRecord } from "../MMSChargingDataTypes/MM7SRecord.ta.mjs";
import { MM7DRqRecord, _decode_MM7DRqRecord, _encode_MM7DRqRecord } from "../MMSChargingDataTypes/MM7DRqRecord.ta.mjs";
import { MM7DRsRecord, _decode_MM7DRsRecord, _encode_MM7DRsRecord } from "../MMSChargingDataTypes/MM7DRsRecord.ta.mjs";
import { MM7CRecord, _decode_MM7CRecord, _encode_MM7CRecord } from "../MMSChargingDataTypes/MM7CRecord.ta.mjs";
import { MM7RRecord, _decode_MM7RRecord, _encode_MM7RRecord } from "../MMSChargingDataTypes/MM7RRecord.ta.mjs";
import { MM7DRRqRecord, _decode_MM7DRRqRecord, _encode_MM7DRRqRecord } from "../MMSChargingDataTypes/MM7DRRqRecord.ta.mjs";
import { MM7DRRsRecord, _decode_MM7DRRsRecord, _encode_MM7DRRsRecord } from "../MMSChargingDataTypes/MM7DRRsRecord.ta.mjs";
import { MM7RRqRecord, _decode_MM7RRqRecord, _encode_MM7RRqRecord } from "../MMSChargingDataTypes/MM7RRqRecord.ta.mjs";
import { MM7RRsRecord, _decode_MM7RRsRecord, _encode_MM7RRsRecord } from "../MMSChargingDataTypes/MM7RRsRecord.ta.mjs";


/**
 * @summary MMSRecordType
 * @description
 * 
 * Offline MMS CDRs produced by an MMS Relay/Server. Each alternative is
 * one event-based record. One chargeable event produces one CDR, and the
 * CDR is visible in the files sent across Bm.
 *
 * Originator MMS R/S (clause 6.1.1). MM1 records are produced whether or
 * not this R/S is also the recipient. MM4 records are produced only when
 * the two R/Ss are distinct. `mMO1SRecord` is MM1 submission.
 * `mMO4FRqRecord` and `mMO4FRsRecord` are the MM4 forward request and
 * response. `mMO4DRecord` and `mMO1DRecord` are delivery reports.
 * `mMO4RRecord` and `mMO1RRecord` are read-reply reports. `mMOMDRecord` is
 * deletion of the MM after submission.
 *
 * Recipient MMS R/S (clause 6.1.2), with the same MM1 and MM4 distinction.
 * `mMR4FRecord` is the MM4 forward. `mMR1NRqRecord` and `mMR1NRsRecord`
 * are the notification request and response. `mMR1RtRqRecord` is
 * retrieval. `mMR1ARecord` is the acknowledgement. `mMR4DRqRecord` and
 * `mMR4DRsRecord` are the MM4 delivery-report request and response.
 * `mMR1RRRecord` is the read-reply from the recipient User Agent.
 * `mMR4RRqRecord` and `mMR4RRsRecord` are the MM4 read-reply request and
 * response. `mMRMDRecord` is deletion at the recipient R/S.
 *
 * `mMFRecord` is the MM1 forward (clause 6.1.3). `mMBx1URecord`,
 * `mMBx1SRecord`, `mMBx1VRecord`, and `mMBx1DRecord` are MMBox upload,
 * store, view, and delete (clause 6.1.4). The `mM7*` alternatives are VASP
 * transactions on MM7 (clause 6.1.5).
 *
 * TS 32.270 also specifies an R1C-CDR for recipient MM1 cancellation, an
 * MM7EC-CDR, and an MM7ER-CDR. This choice has no alternative for those
 * three records. Tables 5.1.4.2 and 5.2.3.4.1 both list the VASP events,
 * in different orders; the generation rule on each record identifies it.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.2.3 and 6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRecordType  ::=  CHOICE {
 *    mMO1SRecord        [30] IMPLICIT MMO1SRecord,
 *    mMO4FRqRecord      [31] IMPLICIT MMO4FRqRecord,
 *    mMO4FRsRecord      [32] IMPLICIT MMO4FRsRecord,
 *    mMO4DRecord        [33] IMPLICIT MMO4DRecord,
 *    mMO1DRecord        [34] IMPLICIT MMO1DRecord,
 *    mMO4RRecord        [35] IMPLICIT MMO4RRecord,
 *    mMO1RRecord        [36] IMPLICIT MMO1RRecord,
 *    mMOMDRecord        [37] IMPLICIT MMOMDRecord,
 *    mMR4FRecord        [38] IMPLICIT MMR4FRecord,
 *    mMR1NRqRecord      [39] IMPLICIT MMR1NRqRecord,
 *    mMR1NRsRecord      [40] IMPLICIT MMR1NRsRecord,
 *    mMR1RtRqRecord     [41] IMPLICIT MMR1RtRecord,
 *    mMR1ARecord        [42] IMPLICIT MMR1ARecord,
 *    mMR4DRqRecord      [43] IMPLICIT MMR4DRqRecord,
 *    mMR4DRsRecord      [44] IMPLICIT MMR4DRsRecord,
 *    mMR1RRRecord       [45] IMPLICIT MMR1RRRecord,
 *    mMR4RRqRecord      [46] IMPLICIT MMR4RRqRecord,
 *    mMR4RRsRecord      [47] IMPLICIT MMR4RRsRecord,
 *    mMRMDRecord        [48] IMPLICIT MMRMDRecord,
 *    mMFRecord          [49] IMPLICIT MMFRecord,
 *    mMBx1SRecord       [50] IMPLICIT MMBx1SRecord,
 *    mMBx1VRecord       [51] IMPLICIT MMBx1VRecord,
 *    mMBx1URecord       [52] IMPLICIT MMBx1URecord,
 *    mMBx1DRecord       [53] IMPLICIT MMBx1DRecord,
 *    mM7SRecord         [54] IMPLICIT MM7SRecord,
 *    mM7DRqRecord       [55] IMPLICIT MM7DRqRecord,
 *    mM7DRsRecord       [56] IMPLICIT MM7DRsRecord,
 *    mM7CRecord         [57] IMPLICIT MM7CRecord,
 *    mM7RRecord         [58] IMPLICIT MM7RRecord,
 *    mM7DRRqRecord      [59] IMPLICIT MM7DRRqRecord,
 *    mM7DRRsRecord      [60] IMPLICIT MM7DRRsRecord,
 *    mM7RRqRecord       [61] IMPLICIT MM7RRqRecord,
 *    mM7RRsRecord       [62] IMPLICIT MM7RRsRecord}
 * ```
 */
export
type MMSRecordType =
    { mMO1SRecord: MMO1SRecord } /* CHOICE_ALT_ROOT */
    | { mMO4FRqRecord: MMO4FRqRecord } /* CHOICE_ALT_ROOT */
    | { mMO4FRsRecord: MMO4FRsRecord } /* CHOICE_ALT_ROOT */
    | { mMO4DRecord: MMO4DRecord } /* CHOICE_ALT_ROOT */
    | { mMO1DRecord: MMO1DRecord } /* CHOICE_ALT_ROOT */
    | { mMO4RRecord: MMO4RRecord } /* CHOICE_ALT_ROOT */
    | { mMO1RRecord: MMO1RRecord } /* CHOICE_ALT_ROOT */
    | { mMOMDRecord: MMOMDRecord } /* CHOICE_ALT_ROOT */
    | { mMR4FRecord: MMR4FRecord } /* CHOICE_ALT_ROOT */
    | { mMR1NRqRecord: MMR1NRqRecord } /* CHOICE_ALT_ROOT */
    | { mMR1NRsRecord: MMR1NRsRecord } /* CHOICE_ALT_ROOT */
    | { mMR1RtRqRecord: MMR1RtRecord } /* CHOICE_ALT_ROOT */
    | { mMR1ARecord: MMR1ARecord } /* CHOICE_ALT_ROOT */
    | { mMR4DRqRecord: MMR4DRqRecord } /* CHOICE_ALT_ROOT */
    | { mMR4DRsRecord: MMR4DRsRecord } /* CHOICE_ALT_ROOT */
    | { mMR1RRRecord: MMR1RRRecord } /* CHOICE_ALT_ROOT */
    | { mMR4RRqRecord: MMR4RRqRecord } /* CHOICE_ALT_ROOT */
    | { mMR4RRsRecord: MMR4RRsRecord } /* CHOICE_ALT_ROOT */
    | { mMRMDRecord: MMRMDRecord } /* CHOICE_ALT_ROOT */
    | { mMFRecord: MMFRecord } /* CHOICE_ALT_ROOT */
    | { mMBx1SRecord: MMBx1SRecord } /* CHOICE_ALT_ROOT */
    | { mMBx1VRecord: MMBx1VRecord } /* CHOICE_ALT_ROOT */
    | { mMBx1URecord: MMBx1URecord } /* CHOICE_ALT_ROOT */
    | { mMBx1DRecord: MMBx1DRecord } /* CHOICE_ALT_ROOT */
    | { mM7SRecord: MM7SRecord } /* CHOICE_ALT_ROOT */
    | { mM7DRqRecord: MM7DRqRecord } /* CHOICE_ALT_ROOT */
    | { mM7DRsRecord: MM7DRsRecord } /* CHOICE_ALT_ROOT */
    | { mM7CRecord: MM7CRecord } /* CHOICE_ALT_ROOT */
    | { mM7RRecord: MM7RRecord } /* CHOICE_ALT_ROOT */
    | { mM7DRRqRecord: MM7DRRqRecord } /* CHOICE_ALT_ROOT */
    | { mM7DRRsRecord: MM7DRRsRecord } /* CHOICE_ALT_ROOT */
    | { mM7RRqRecord: MM7RRqRecord } /* CHOICE_ALT_ROOT */
    | { mM7RRsRecord: MM7RRsRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMSRecordType: $.ASN1Decoder<MMSRecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSRecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSRecordType (el: _Element): MMSRecordType {
    if (!_cached_decoder_for_MMSRecordType) { _cached_decoder_for_MMSRecordType = $._decode_inextensible_choice<MMSRecordType>({
    "CONTEXT 30": [ "mMO1SRecord", $._decode_implicit<MMO1SRecord>(() => _decode_MMO1SRecord) ],
    "CONTEXT 31": [ "mMO4FRqRecord", $._decode_implicit<MMO4FRqRecord>(() => _decode_MMO4FRqRecord) ],
    "CONTEXT 32": [ "mMO4FRsRecord", $._decode_implicit<MMO4FRsRecord>(() => _decode_MMO4FRsRecord) ],
    "CONTEXT 33": [ "mMO4DRecord", $._decode_implicit<MMO4DRecord>(() => _decode_MMO4DRecord) ],
    "CONTEXT 34": [ "mMO1DRecord", $._decode_implicit<MMO1DRecord>(() => _decode_MMO1DRecord) ],
    "CONTEXT 35": [ "mMO4RRecord", $._decode_implicit<MMO4RRecord>(() => _decode_MMO4RRecord) ],
    "CONTEXT 36": [ "mMO1RRecord", $._decode_implicit<MMO1RRecord>(() => _decode_MMO1RRecord) ],
    "CONTEXT 37": [ "mMOMDRecord", $._decode_implicit<MMOMDRecord>(() => _decode_MMOMDRecord) ],
    "CONTEXT 38": [ "mMR4FRecord", $._decode_implicit<MMR4FRecord>(() => _decode_MMR4FRecord) ],
    "CONTEXT 39": [ "mMR1NRqRecord", $._decode_implicit<MMR1NRqRecord>(() => _decode_MMR1NRqRecord) ],
    "CONTEXT 40": [ "mMR1NRsRecord", $._decode_implicit<MMR1NRsRecord>(() => _decode_MMR1NRsRecord) ],
    "CONTEXT 41": [ "mMR1RtRqRecord", $._decode_implicit<MMR1RtRecord>(() => _decode_MMR1RtRecord) ],
    "CONTEXT 42": [ "mMR1ARecord", $._decode_implicit<MMR1ARecord>(() => _decode_MMR1ARecord) ],
    "CONTEXT 43": [ "mMR4DRqRecord", $._decode_implicit<MMR4DRqRecord>(() => _decode_MMR4DRqRecord) ],
    "CONTEXT 44": [ "mMR4DRsRecord", $._decode_implicit<MMR4DRsRecord>(() => _decode_MMR4DRsRecord) ],
    "CONTEXT 45": [ "mMR1RRRecord", $._decode_implicit<MMR1RRRecord>(() => _decode_MMR1RRRecord) ],
    "CONTEXT 46": [ "mMR4RRqRecord", $._decode_implicit<MMR4RRqRecord>(() => _decode_MMR4RRqRecord) ],
    "CONTEXT 47": [ "mMR4RRsRecord", $._decode_implicit<MMR4RRsRecord>(() => _decode_MMR4RRsRecord) ],
    "CONTEXT 48": [ "mMRMDRecord", $._decode_implicit<MMRMDRecord>(() => _decode_MMRMDRecord) ],
    "CONTEXT 49": [ "mMFRecord", $._decode_implicit<MMFRecord>(() => _decode_MMFRecord) ],
    "CONTEXT 50": [ "mMBx1SRecord", $._decode_implicit<MMBx1SRecord>(() => _decode_MMBx1SRecord) ],
    "CONTEXT 51": [ "mMBx1VRecord", $._decode_implicit<MMBx1VRecord>(() => _decode_MMBx1VRecord) ],
    "CONTEXT 52": [ "mMBx1URecord", $._decode_implicit<MMBx1URecord>(() => _decode_MMBx1URecord) ],
    "CONTEXT 53": [ "mMBx1DRecord", $._decode_implicit<MMBx1DRecord>(() => _decode_MMBx1DRecord) ],
    "CONTEXT 54": [ "mM7SRecord", $._decode_implicit<MM7SRecord>(() => _decode_MM7SRecord) ],
    "CONTEXT 55": [ "mM7DRqRecord", $._decode_implicit<MM7DRqRecord>(() => _decode_MM7DRqRecord) ],
    "CONTEXT 56": [ "mM7DRsRecord", $._decode_implicit<MM7DRsRecord>(() => _decode_MM7DRsRecord) ],
    "CONTEXT 57": [ "mM7CRecord", $._decode_implicit<MM7CRecord>(() => _decode_MM7CRecord) ],
    "CONTEXT 58": [ "mM7RRecord", $._decode_implicit<MM7RRecord>(() => _decode_MM7RRecord) ],
    "CONTEXT 59": [ "mM7DRRqRecord", $._decode_implicit<MM7DRRqRecord>(() => _decode_MM7DRRqRecord) ],
    "CONTEXT 60": [ "mM7DRRsRecord", $._decode_implicit<MM7DRRsRecord>(() => _decode_MM7DRRsRecord) ],
    "CONTEXT 61": [ "mM7RRqRecord", $._decode_implicit<MM7RRqRecord>(() => _decode_MM7RRqRecord) ],
    "CONTEXT 62": [ "mM7RRsRecord", $._decode_implicit<MM7RRsRecord>(() => _decode_MM7RRsRecord) ]
}); }
    return _cached_decoder_for_MMSRecordType(el);
}

let _cached_encoder_for_MMSRecordType: $.ASN1Encoder<MMSRecordType> | null = null;

/**
 * @summary Encodes a(n) MMSRecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSRecordType, encoded as an ASN.1 Element.
 */
export
function _encode_MMSRecordType (value: MMSRecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSRecordType) { _cached_encoder_for_MMSRecordType = $._encode_choice<MMSRecordType>({
    "mMO1SRecord": $._encode_implicit(_TagClass.context, 30, () => _encode_MMO1SRecord, $.BER),
    "mMO4FRqRecord": $._encode_implicit(_TagClass.context, 31, () => _encode_MMO4FRqRecord, $.BER),
    "mMO4FRsRecord": $._encode_implicit(_TagClass.context, 32, () => _encode_MMO4FRsRecord, $.BER),
    "mMO4DRecord": $._encode_implicit(_TagClass.context, 33, () => _encode_MMO4DRecord, $.BER),
    "mMO1DRecord": $._encode_implicit(_TagClass.context, 34, () => _encode_MMO1DRecord, $.BER),
    "mMO4RRecord": $._encode_implicit(_TagClass.context, 35, () => _encode_MMO4RRecord, $.BER),
    "mMO1RRecord": $._encode_implicit(_TagClass.context, 36, () => _encode_MMO1RRecord, $.BER),
    "mMOMDRecord": $._encode_implicit(_TagClass.context, 37, () => _encode_MMOMDRecord, $.BER),
    "mMR4FRecord": $._encode_implicit(_TagClass.context, 38, () => _encode_MMR4FRecord, $.BER),
    "mMR1NRqRecord": $._encode_implicit(_TagClass.context, 39, () => _encode_MMR1NRqRecord, $.BER),
    "mMR1NRsRecord": $._encode_implicit(_TagClass.context, 40, () => _encode_MMR1NRsRecord, $.BER),
    "mMR1RtRqRecord": $._encode_implicit(_TagClass.context, 41, () => _encode_MMR1RtRecord, $.BER),
    "mMR1ARecord": $._encode_implicit(_TagClass.context, 42, () => _encode_MMR1ARecord, $.BER),
    "mMR4DRqRecord": $._encode_implicit(_TagClass.context, 43, () => _encode_MMR4DRqRecord, $.BER),
    "mMR4DRsRecord": $._encode_implicit(_TagClass.context, 44, () => _encode_MMR4DRsRecord, $.BER),
    "mMR1RRRecord": $._encode_implicit(_TagClass.context, 45, () => _encode_MMR1RRRecord, $.BER),
    "mMR4RRqRecord": $._encode_implicit(_TagClass.context, 46, () => _encode_MMR4RRqRecord, $.BER),
    "mMR4RRsRecord": $._encode_implicit(_TagClass.context, 47, () => _encode_MMR4RRsRecord, $.BER),
    "mMRMDRecord": $._encode_implicit(_TagClass.context, 48, () => _encode_MMRMDRecord, $.BER),
    "mMFRecord": $._encode_implicit(_TagClass.context, 49, () => _encode_MMFRecord, $.BER),
    "mMBx1SRecord": $._encode_implicit(_TagClass.context, 50, () => _encode_MMBx1SRecord, $.BER),
    "mMBx1VRecord": $._encode_implicit(_TagClass.context, 51, () => _encode_MMBx1VRecord, $.BER),
    "mMBx1URecord": $._encode_implicit(_TagClass.context, 52, () => _encode_MMBx1URecord, $.BER),
    "mMBx1DRecord": $._encode_implicit(_TagClass.context, 53, () => _encode_MMBx1DRecord, $.BER),
    "mM7SRecord": $._encode_implicit(_TagClass.context, 54, () => _encode_MM7SRecord, $.BER),
    "mM7DRqRecord": $._encode_implicit(_TagClass.context, 55, () => _encode_MM7DRqRecord, $.BER),
    "mM7DRsRecord": $._encode_implicit(_TagClass.context, 56, () => _encode_MM7DRsRecord, $.BER),
    "mM7CRecord": $._encode_implicit(_TagClass.context, 57, () => _encode_MM7CRecord, $.BER),
    "mM7RRecord": $._encode_implicit(_TagClass.context, 58, () => _encode_MM7RRecord, $.BER),
    "mM7DRRqRecord": $._encode_implicit(_TagClass.context, 59, () => _encode_MM7DRRqRecord, $.BER),
    "mM7DRRsRecord": $._encode_implicit(_TagClass.context, 60, () => _encode_MM7DRRsRecord, $.BER),
    "mM7RRqRecord": $._encode_implicit(_TagClass.context, 61, () => _encode_MM7RRqRecord, $.BER),
    "mM7RRsRecord": $._encode_implicit(_TagClass.context, 62, () => _encode_MM7RRsRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSRecordType(value, elGetter);
}


/* eslint-enable */
