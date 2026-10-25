/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PPFRecord, _decode_PPFRecord, _encode_PPFRecord } from "../POCChargingDataTypes/PPFRecord.ta.mjs";
import { CPFRecord, _decode_CPFRecord, _encode_CPFRecord } from "../POCChargingDataTypes/CPFRecord.ta.mjs";


/**
 * @summary POCRecord
 * @description
 *
 * PoC CDR on the Bt interface. `pPFRecord` is the participating
 * PoC function CDR; `cPFRecord` is the controlling PoC function
 * CDR. The PoC Server generates both and the CDF transfers them
 * to the billing domain.
 *
 * There is one controlling PoC function in a session, and one or
 * more participating PoC functions. Online charging treats the
 * two roles as independent reports. A PoC Server may perform
 * both roles at once; the role is chosen at session set-up and
 * lasts for the session. For a 1-1 or ad-hoc session the inviting
 * user's server is controlling. For a chat or pre-arranged group,
 * the server that hosts the group identity is controlling.
 *
 * Session CDRs (1-1 and 1-to-many group sessions) are opened on
 * Charging Data Request [start], may be partial on [interim], and
 * are closed on [stop]. An unsuccessful session set-up may be
 * reported with [event]. Each session-unrelated procedure
 * (clause 5.1.2) produces one CDR from one [event]; partial CDRs
 * are not used for those.
 *
 * Charging is service-based. The charged party is the session
 * owner, a participant, or both. The owner is metered by the
 * controlling function and need not be in the session. A
 * participant is metered by the participating function. Usage is
 * reported separately for session participation (time, independent
 * of talk bursts), talk bursts sent, and talk bursts received.
 * Offline, the PoC Server's configuration decides who is charged;
 * online, the OCS decides. Talk-burst usage in the CDR is duration,
 * volume, and count; the billing domain rates them.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 4.1.1.2, 4.3, 5.1.1, 5.2.1,
 * 5.2.3, 6.1.3.2, and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCRecord   ::=  CHOICE {
 *    pPFRecord     [80] IMPLICIT PPFRecord,
 *    cPFRecord     [81] IMPLICIT CPFRecord}
 * ```
 */
export
type POCRecord =
    { pPFRecord: PPFRecord } /* CHOICE_ALT_ROOT */
    | { cPFRecord: CPFRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_POCRecord: $.ASN1Decoder<POCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) POCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_POCRecord (el: _Element): POCRecord {
    if (!_cached_decoder_for_POCRecord) { _cached_decoder_for_POCRecord = $._decode_inextensible_choice<POCRecord>({
    "CONTEXT 80": [ "pPFRecord", $._decode_implicit<PPFRecord>(() => _decode_PPFRecord) ],
    "CONTEXT 81": [ "cPFRecord", $._decode_implicit<CPFRecord>(() => _decode_CPFRecord) ]
}); }
    return _cached_decoder_for_POCRecord(el);
}

let _cached_encoder_for_POCRecord: $.ASN1Encoder<POCRecord> | null = null;

/**
 * @summary Encodes a(n) POCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_POCRecord (value: POCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_POCRecord) { _cached_encoder_for_POCRecord = $._encode_choice<POCRecord>({
    "pPFRecord": $._encode_implicit(_TagClass.context, 80, () => _encode_PPFRecord, $.BER),
    "cPFRecord": $._encode_implicit(_TagClass.context, 81, () => _encode_CPFRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_POCRecord(value, elGetter);
}


/* eslint-enable */
