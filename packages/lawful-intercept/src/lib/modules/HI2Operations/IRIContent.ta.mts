/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../HI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../HI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary IRIContent
 * @description
 * 
 * One IRI record. BEGIN is the first event of a communication attempt and opens
 * the IRI transaction. END is the end of a communication or communication
 * attempt and closes it. CONTINUE is any time during the communication or
 * attempt. REPORT is for non-communication events, such as
 * subscriber-controlled input, and may report a simple unsuccessful attempt.
 * Types BEGIN, CONTINUE, and END follow the communication phase. They are not
 * tied to particular signalling messages; the causing events are carried in
 * other parameters.
 *
 * BEGIN, CONTINUE, and REPORT must include at least one optional parameter. The
 * END alternative's comment does not state that requirement. Clause A.3.5 adds
 * no further ban on which parameters appear in which type, apart from the
 * mandatory parameters. A called party number is normally absent from END
 * because it was sent earlier.
 *
 * GSM circuit-switched table A.8.1: establishment BEGIN; answer, supplementary
 * service, and handover CONTINUE; release END; location update,
 * subscriber-controlled input, SMS, and serving system REPORT. Sending
 * redundant information on later events is an implementation option. GPRS table
 * B.5.1: attach, detach, unsuccessful PDP-context activation, cell or RA
 * update, SMS, and end of intercept with an active PDP context are REPORT;
 * successful activation is BEGIN; start of intercept with an active context is
 * BEGIN or optionally CONTINUE; modification is CONTINUE; deactivation is END.
 * While a PDP context is active, CONTINUE carries CC-relevant IRI and REPORT is
 * used otherwise. If interception starts on a context the IAP already knows, an
 * IRI-BEGIN with `startOfInterceptionWithPDPContextActive` is recommended. If
 * it ends while the context is still active, a national option is an IRI-REPORT
 * with `endOfInterceptionWithPDPContextActive`, or no such REPORT and another
 * indication such as HI1 `liDeactivated`.
 *
 * Clause A.9.2 assigns TETRA events to these four types in table A.9.1. For
 * those events `nature-Of-The-intercepted-call` shall be `tETRA-circuit-call`.
 * This module's `TetraLocation` is not the current TETRA location mechanism.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 8.2, clause A.3.5, clause A.8.4,
 * clause A.9.2, clause B.5.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIContent  ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Begin-Record.
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Continue-record        [3] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Continue-Record.
 *     iRI-Report-record        [4] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Report-Record.
 *     ...
 * }
 * ```
 */
export
type IRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IRIContent: $.ASN1Decoder<IRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIContent (el: _Element): IRIContent {
    if (!_cached_decoder_for_IRIContent) { _cached_decoder_for_IRIContent = $._decode_extensible_choice<IRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_IRIContent(el);
}

let _cached_encoder_for_IRIContent: $.ASN1Encoder<IRIContent> | null = null;

/**
 * @summary Encodes a(n) IRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIContent (value: IRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIContent) { _cached_encoder_for_IRIContent = $._encode_choice<IRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_IRIContent(value, elGetter);
}


/* eslint-enable */
