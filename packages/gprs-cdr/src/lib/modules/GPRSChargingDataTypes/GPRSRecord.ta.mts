/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SGSNPDPRecord, _decode_SGSNPDPRecord, _encode_SGSNPDPRecord } from "../GPRSChargingDataTypes/SGSNPDPRecord.ta.mjs";
import { SGSNMMRecord, _decode_SGSNMMRecord, _encode_SGSNMMRecord } from "../GPRSChargingDataTypes/SGSNMMRecord.ta.mjs";
import { SGSNSMORecord, _decode_SGSNSMORecord, _encode_SGSNSMORecord } from "../GPRSChargingDataTypes/SGSNSMORecord.ta.mjs";
import { SGSNSMTRecord, _decode_SGSNSMTRecord, _encode_SGSNSMTRecord } from "../GPRSChargingDataTypes/SGSNSMTRecord.ta.mjs";
import { SGSNMTLCSRecord, _decode_SGSNMTLCSRecord, _encode_SGSNMTLCSRecord } from "../GPRSChargingDataTypes/SGSNMTLCSRecord.ta.mjs";
import { SGSNMOLCSRecord, _decode_SGSNMOLCSRecord, _encode_SGSNMOLCSRecord } from "../GPRSChargingDataTypes/SGSNMOLCSRecord.ta.mjs";
import { SGSNNILCSRecord, _decode_SGSNNILCSRecord, _encode_SGSNNILCSRecord } from "../GPRSChargingDataTypes/SGSNNILCSRecord.ta.mjs";
import { SGSNMBMSRecord, _decode_SGSNMBMSRecord, _encode_SGSNMBMSRecord } from "../GPRSChargingDataTypes/SGSNMBMSRecord.ta.mjs";
import { GGSNMBMSRecord, _decode_GGSNMBMSRecord, _encode_GGSNMBMSRecord } from "../GPRSChargingDataTypes/GGSNMBMSRecord.ta.mjs";
import { SGWRecord, _decode_SGWRecord, _encode_SGWRecord } from "../GPRSChargingDataTypes/SGWRecord.ta.mjs";
import { PGWRecord, _decode_PGWRecord, _encode_PGWRecord } from "../GPRSChargingDataTypes/PGWRecord.ta.mjs";
import { GWMBMSRecord, _decode_GWMBMSRecord, _encode_GWMBMSRecord } from "../GPRSChargingDataTypes/GWMBMSRecord.ta.mjs";
import { TDFRecord, _decode_TDFRecord, _encode_TDFRecord } from "../GPRSChargingDataTypes/TDFRecord.ta.mjs";
import { IPERecord, _decode_IPERecord, _encode_IPERecord } from "../GPRSChargingDataTypes/IPERecord.ta.mjs";
import { EPDGRecord, _decode_EPDGRecord, _encode_EPDGRecord } from "../GPRSChargingDataTypes/EPDGRecord.ta.mjs";
import { TWAGRecord, _decode_TWAGRecord, _encode_TWAGRecord } from "../GPRSChargingDataTypes/TWAGRecord.ta.mjs";


/**
 * @summary GPRSRecord
 * @description
 *
 * Choice of the PS-domain CDRs in clause 5.2.1.0. The SGSN produces the
 * S-CDR, M-CDR, S-SMO-CDR, S-SMT-CDR, LCS-MO-CDR, LCS-MT-CDR, LCS-NI-CDR,
 * and S-MB-CDR. The MME also produces the S-SMO-CDR and S-SMT-CDR. The
 * S-GW produces the SGW-CDR, the ePDG the ePDG-CDR, the TWAG the TWAG-CDR,
 * the P-GW the PGW-CDR and the G-MB-CDR, the MBMS GW the MBMS-GW-CDR, and
 * the TDF the TDF-CDR. Annex D adds the IPE-CDR from the IP-Edge [PCEF].
 * The PCN uses Charging Characteristics to activate CDR generation and to
 * set the time, volume, and charging-condition limits (clause 5.2.3.0).
 * Charging Characteristics are not used for MBMS CDRs. Field categories
 * and the triggers that open, extend, and close each CDR are in clauses
 * 5.2.3 and 6.1. Full parameter definitions are in TS 32.298.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSRecord  ::=  CHOICE {
 *    sgsnPDPRecord       [20] IMPLICIT SGSNPDPRecord,
 *    sgsnMMRecord        [22] IMPLICIT SGSNMMRecord,
 *    sgsnSMORecord       [23] IMPLICIT SGSNSMORecord,
 *    sgsnSMTRecord       [24] IMPLICIT SGSNSMTRecord,
 *    sgsnMTLCSRecord     [25] IMPLICIT SGSNMTLCSRecord,
 *    sgsnMOLCSRecord     [26] IMPLICIT SGSNMOLCSRecord,
 *    sgsnNILCSRecord     [27] IMPLICIT SGSNNILCSRecord,
 *    sgsnMBMSRecord      [76] IMPLICIT SGSNMBMSRecord,
 *    ggsnMBMSRecord      [77] IMPLICIT GGSNMBMSRecord,
 *    sGWRecord           [78] IMPLICIT SGWRecord,
 *    pGWRecord           [79] IMPLICIT PGWRecord,
 *    gwMBMSRecord        [86] IMPLICIT GWMBMSRecord,
 *    tDFRecord           [92] IMPLICIT TDFRecord,
 *    iPERecord           [95] IMPLICIT IPERecord,
 *    ePDGRecord          [96] IMPLICIT EPDGRecord,
 *    tWAGRecord          [97] IMPLICIT TWAGRecord}
 * ```
 */
export
type GPRSRecord =
    { sgsnPDPRecord: SGSNPDPRecord } /* CHOICE_ALT_ROOT */
    | { sgsnMMRecord: SGSNMMRecord } /* CHOICE_ALT_ROOT */
    | { sgsnSMORecord: SGSNSMORecord } /* CHOICE_ALT_ROOT */
    | { sgsnSMTRecord: SGSNSMTRecord } /* CHOICE_ALT_ROOT */
    | { sgsnMTLCSRecord: SGSNMTLCSRecord } /* CHOICE_ALT_ROOT */
    | { sgsnMOLCSRecord: SGSNMOLCSRecord } /* CHOICE_ALT_ROOT */
    | { sgsnNILCSRecord: SGSNNILCSRecord } /* CHOICE_ALT_ROOT */
    | { sgsnMBMSRecord: SGSNMBMSRecord } /* CHOICE_ALT_ROOT */
    | { ggsnMBMSRecord: GGSNMBMSRecord } /* CHOICE_ALT_ROOT */
    | { sGWRecord: SGWRecord } /* CHOICE_ALT_ROOT */
    | { pGWRecord: PGWRecord } /* CHOICE_ALT_ROOT */
    | { gwMBMSRecord: GWMBMSRecord } /* CHOICE_ALT_ROOT */
    | { tDFRecord: TDFRecord } /* CHOICE_ALT_ROOT */
    | { iPERecord: IPERecord } /* CHOICE_ALT_ROOT */
    | { ePDGRecord: EPDGRecord } /* CHOICE_ALT_ROOT */
    | { tWAGRecord: TWAGRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GPRSRecord: $.ASN1Decoder<GPRSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSRecord (el: _Element): GPRSRecord {
    if (!_cached_decoder_for_GPRSRecord) { _cached_decoder_for_GPRSRecord = $._decode_inextensible_choice<GPRSRecord>({
    "CONTEXT 20": [ "sgsnPDPRecord", $._decode_implicit<SGSNPDPRecord>(() => _decode_SGSNPDPRecord) ],
    "CONTEXT 22": [ "sgsnMMRecord", $._decode_implicit<SGSNMMRecord>(() => _decode_SGSNMMRecord) ],
    "CONTEXT 23": [ "sgsnSMORecord", $._decode_implicit<SGSNSMORecord>(() => _decode_SGSNSMORecord) ],
    "CONTEXT 24": [ "sgsnSMTRecord", $._decode_implicit<SGSNSMTRecord>(() => _decode_SGSNSMTRecord) ],
    "CONTEXT 25": [ "sgsnMTLCSRecord", $._decode_implicit<SGSNMTLCSRecord>(() => _decode_SGSNMTLCSRecord) ],
    "CONTEXT 26": [ "sgsnMOLCSRecord", $._decode_implicit<SGSNMOLCSRecord>(() => _decode_SGSNMOLCSRecord) ],
    "CONTEXT 27": [ "sgsnNILCSRecord", $._decode_implicit<SGSNNILCSRecord>(() => _decode_SGSNNILCSRecord) ],
    "CONTEXT 76": [ "sgsnMBMSRecord", $._decode_implicit<SGSNMBMSRecord>(() => _decode_SGSNMBMSRecord) ],
    "CONTEXT 77": [ "ggsnMBMSRecord", $._decode_implicit<GGSNMBMSRecord>(() => _decode_GGSNMBMSRecord) ],
    "CONTEXT 78": [ "sGWRecord", $._decode_implicit<SGWRecord>(() => _decode_SGWRecord) ],
    "CONTEXT 79": [ "pGWRecord", $._decode_implicit<PGWRecord>(() => _decode_PGWRecord) ],
    "CONTEXT 86": [ "gwMBMSRecord", $._decode_implicit<GWMBMSRecord>(() => _decode_GWMBMSRecord) ],
    "CONTEXT 92": [ "tDFRecord", $._decode_implicit<TDFRecord>(() => _decode_TDFRecord) ],
    "CONTEXT 95": [ "iPERecord", $._decode_implicit<IPERecord>(() => _decode_IPERecord) ],
    "CONTEXT 96": [ "ePDGRecord", $._decode_implicit<EPDGRecord>(() => _decode_EPDGRecord) ],
    "CONTEXT 97": [ "tWAGRecord", $._decode_implicit<TWAGRecord>(() => _decode_TWAGRecord) ]
}); }
    return _cached_decoder_for_GPRSRecord(el);
}

let _cached_encoder_for_GPRSRecord: $.ASN1Encoder<GPRSRecord> | null = null;

/**
 * @summary Encodes a(n) GPRSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSRecord (value: GPRSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSRecord) { _cached_encoder_for_GPRSRecord = $._encode_choice<GPRSRecord>({
    "sgsnPDPRecord": $._encode_implicit(_TagClass.context, 20, () => _encode_SGSNPDPRecord, $.BER),
    "sgsnMMRecord": $._encode_implicit(_TagClass.context, 22, () => _encode_SGSNMMRecord, $.BER),
    "sgsnSMORecord": $._encode_implicit(_TagClass.context, 23, () => _encode_SGSNSMORecord, $.BER),
    "sgsnSMTRecord": $._encode_implicit(_TagClass.context, 24, () => _encode_SGSNSMTRecord, $.BER),
    "sgsnMTLCSRecord": $._encode_implicit(_TagClass.context, 25, () => _encode_SGSNMTLCSRecord, $.BER),
    "sgsnMOLCSRecord": $._encode_implicit(_TagClass.context, 26, () => _encode_SGSNMOLCSRecord, $.BER),
    "sgsnNILCSRecord": $._encode_implicit(_TagClass.context, 27, () => _encode_SGSNNILCSRecord, $.BER),
    "sgsnMBMSRecord": $._encode_implicit(_TagClass.context, 76, () => _encode_SGSNMBMSRecord, $.BER),
    "ggsnMBMSRecord": $._encode_implicit(_TagClass.context, 77, () => _encode_GGSNMBMSRecord, $.BER),
    "sGWRecord": $._encode_implicit(_TagClass.context, 78, () => _encode_SGWRecord, $.BER),
    "pGWRecord": $._encode_implicit(_TagClass.context, 79, () => _encode_PGWRecord, $.BER),
    "gwMBMSRecord": $._encode_implicit(_TagClass.context, 86, () => _encode_GWMBMSRecord, $.BER),
    "tDFRecord": $._encode_implicit(_TagClass.context, 92, () => _encode_TDFRecord, $.BER),
    "iPERecord": $._encode_implicit(_TagClass.context, 95, () => _encode_IPERecord, $.BER),
    "ePDGRecord": $._encode_implicit(_TagClass.context, 96, () => _encode_EPDGRecord, $.BER),
    "tWAGRecord": $._encode_implicit(_TagClass.context, 97, () => _encode_TWAGRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_GPRSRecord(value, elGetter);
}


/* eslint-enable */
