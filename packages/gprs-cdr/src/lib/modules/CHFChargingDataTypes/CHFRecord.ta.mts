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
 * If enabled, CHF records shall be produced for chargeable events, with or
 * without quota management. A CHF-CDR shall be opened when the CHF receives
 * Charging Data Request [Initial]. As an alternative to the default CHF
 * behaviour, the "Individual Partial record" mechanism can be used based on
 * Operator's policy configured in the CHF. In this case a new CDR shall be
 * opened for each Charging Data Request [Initial, Update, Termination],
 * charging information shall be added and the CDR shall then be closed. The
 * Sequence Number will be incremented for each Charging Data Request
 * [Initial, Update, Termination] received by the CHF. The generic fields in
 * the record are specified in table 5.1.5.0.1. The NF specific parts will be
 * concatenated to this e.g. the PDU Session Information, PDU Container
 * Information and Roaming QBC Information are concatenated for the SMF.
 * Table 5.1.5.0.1: CHF record (CHF-CDR)
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.5.0.
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
