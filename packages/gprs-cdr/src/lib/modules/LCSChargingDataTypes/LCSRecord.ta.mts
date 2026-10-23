/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSGMORecord, _decode_LCSGMORecord, _encode_LCSGMORecord } from "../LCSChargingDataTypes/LCSGMORecord.ta.mjs";
import { LCSRGMTRecord, _decode_LCSRGMTRecord, _encode_LCSRGMTRecord } from "../LCSChargingDataTypes/LCSRGMTRecord.ta.mjs";
import { LCSHGMTRecord, _decode_LCSHGMTRecord, _encode_LCSHGMTRecord } from "../LCSChargingDataTypes/LCSHGMTRecord.ta.mjs";
import { LCSVGMTRecord, _decode_LCSVGMTRecord, _encode_LCSVGMTRecord } from "../LCSChargingDataTypes/LCSVGMTRecord.ta.mjs";
import { LCSGNIRecord, _decode_LCSGNIRecord, _encode_LCSGNIRecord } from "../LCSChargingDataTypes/LCSGNIRecord.ta.mjs";


/**
 * @summary LCSRecord
 * @description
 *
 * Offline charging data record produced by a Gateway Mobile
 * Location Centre (GMLC). The GMLC collects it so that a network
 * requesting location information may be charged by the network
 * that provides the location. The GMLC collects:
 *
 * - the subscriber to be located, and the entity that requested
 *   the location;
 * - the GMLC or PLMN serving the LCS client;
 * - the location QoS that was requested and the QoS delivered;
 * - the date and time the LCS client requested the procedure;
 * - the location service types the client is allowed to use for
 *   that UE;
 * - use of continuous or periodic tracking;
 * - location-based service information beyond the location
 *   resource data above.
 *
 * The alternative is the GMLC role and the request type:
 *
 * - `lCSGMORecord`: mobile originated location request. The UE
 *   obtains its own location, or has it sent to another LCS
 *   client. The R-GMLC, H-GMLC, and V-GMLC are the same, because
 *   no privacy check is performed. The CDR is processed when the
 *   GMLC acknowledges the MAP Subscriber Location Report.
 * - `lCSRGMTRecord`: mobile terminated location request at the
 *   requesting GMLC. An external LCS client asks for the location
 *   of a target UE. The CDR is processed when the H-GMLC sends
 *   the location service response to the R-GMLC.
 * - `lCSHGMTRecord`: the same MT-LR, at the home GMLC. The CDR is
 *   processed after the H-GMLC privacy check, when the V-GMLC
 *   sends the location service response.
 * - `lCSVGMTRecord`: the same MT-LR, at the visited GMLC. The CDR
 *   is processed when the MSC or SGSN acknowledges the MAP
 *   Provider Subscriber Location Report.
 * - `lCSGNIRecord`: network induced location request, positioning
 *   the UE for an emergency call. The CDR is processed when the
 *   GMLC transfers the location to the LCS client.
 *
 * A record is produced when that CDR type is enabled, for a
 * request performed via that GMLC.
 *
 * The charging trigger function, charging data function, and
 * charging gateway function all reside in the GMLC. The GMLC
 * transfers CDR files to the billing domain on Bl, the LCS form
 * of Bx. Fully qualified partial CDRs are mandatory on Bl;
 * reduced partial CDRs are optional. The first partial CDR is a
 * fully qualified partial CDR. A vendor that implements a separate
 * CDF and CGF should keep those interfaces aligned with Rf and Ga
 * (TS 32.299 and TS 32.295).
 *
 * Field categories in clause 6.1.0:
 *
 * - **M** — always present in the CDR.
 * - **C** — present when the conditions stated for that field are
 *   met.
 * - **Om** — operator provisionable. When provisioned to be
 *   present, it is always included.
 * - **Oc** — operator provisionable. When provisioned to be
 *   present, it is included when its conditions are met.
 *
 * A vendor has to be able to supply every parameter. An operator
 * may suppress Om and Oc parameters that it does not need.
 *
 * Online charging of the same location requests uses Debit /
 * Reserve Units on Ro (clause 5.3). For an MO-LR the party to
 * charge is the UE.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 4.2, 5.1, 5.2.3, 5.2.5, 5.3,
 * and 6.1.0.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSRecord   ::=  CHOICE {
 *    lCSGMORecord      [71] IMPLICIT LCSGMORecord,
 *    lCSRGMTRecord     [72] IMPLICIT LCSRGMTRecord,
 *    lCSHGMTRecord     [73] IMPLICIT LCSHGMTRecord,
 *    lCSVGMTRecord     [74] IMPLICIT LCSVGMTRecord,
 *    lCSGNIRecord      [75] IMPLICIT LCSGNIRecord}
 * ```
 */
export
type LCSRecord =
    { lCSGMORecord: LCSGMORecord } /* CHOICE_ALT_ROOT */
    | { lCSRGMTRecord: LCSRGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSHGMTRecord: LCSHGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSVGMTRecord: LCSVGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSGNIRecord: LCSGNIRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LCSRecord: $.ASN1Decoder<LCSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSRecord (el: _Element): LCSRecord {
    if (!_cached_decoder_for_LCSRecord) { _cached_decoder_for_LCSRecord = $._decode_inextensible_choice<LCSRecord>({
    "CONTEXT 71": [ "lCSGMORecord", $._decode_implicit<LCSGMORecord>(() => _decode_LCSGMORecord) ],
    "CONTEXT 72": [ "lCSRGMTRecord", $._decode_implicit<LCSRGMTRecord>(() => _decode_LCSRGMTRecord) ],
    "CONTEXT 73": [ "lCSHGMTRecord", $._decode_implicit<LCSHGMTRecord>(() => _decode_LCSHGMTRecord) ],
    "CONTEXT 74": [ "lCSVGMTRecord", $._decode_implicit<LCSVGMTRecord>(() => _decode_LCSVGMTRecord) ],
    "CONTEXT 75": [ "lCSGNIRecord", $._decode_implicit<LCSGNIRecord>(() => _decode_LCSGNIRecord) ]
}); }
    return _cached_decoder_for_LCSRecord(el);
}

let _cached_encoder_for_LCSRecord: $.ASN1Encoder<LCSRecord> | null = null;

/**
 * @summary Encodes a(n) LCSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LCSRecord (value: LCSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSRecord) { _cached_encoder_for_LCSRecord = $._encode_choice<LCSRecord>({
    "lCSGMORecord": $._encode_implicit(_TagClass.context, 71, () => _encode_LCSGMORecord, $.BER),
    "lCSRGMTRecord": $._encode_implicit(_TagClass.context, 72, () => _encode_LCSRGMTRecord, $.BER),
    "lCSHGMTRecord": $._encode_implicit(_TagClass.context, 73, () => _encode_LCSHGMTRecord, $.BER),
    "lCSVGMTRecord": $._encode_implicit(_TagClass.context, 74, () => _encode_LCSVGMTRecord, $.BER),
    "lCSGNIRecord": $._encode_implicit(_TagClass.context, 75, () => _encode_LCSGNIRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_LCSRecord(value, elGetter);
}


/* eslint-enable */
