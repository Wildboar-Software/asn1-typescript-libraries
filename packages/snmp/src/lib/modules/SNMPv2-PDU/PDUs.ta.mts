/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetRequest_PDU, _decode_GetRequest_PDU, _encode_GetRequest_PDU } from "../SNMPv2-PDU/GetRequest-PDU.ta.mjs";
import { GetNextRequest_PDU, _decode_GetNextRequest_PDU, _encode_GetNextRequest_PDU } from "../SNMPv2-PDU/GetNextRequest-PDU.ta.mjs";
import { GetBulkRequest_PDU, _decode_GetBulkRequest_PDU, _encode_GetBulkRequest_PDU } from "../SNMPv2-PDU/GetBulkRequest-PDU.ta.mjs";
import { Response_PDU, _decode_Response_PDU, _encode_Response_PDU } from "../SNMPv2-PDU/Response-PDU.ta.mjs";
import { SetRequest_PDU, _decode_SetRequest_PDU, _encode_SetRequest_PDU } from "../SNMPv2-PDU/SetRequest-PDU.ta.mjs";
import { InformRequest_PDU, _decode_InformRequest_PDU, _encode_InformRequest_PDU } from "../SNMPv2-PDU/InformRequest-PDU.ta.mjs";
import { SNMPv2_Trap_PDU, _decode_SNMPv2_Trap_PDU, _encode_SNMPv2_Trap_PDU } from "../SNMPv2-PDU/SNMPv2-Trap-PDU.ta.mjs";
import { Report_PDU, _decode_Report_PDU, _encode_Report_PDU } from "../SNMPv2-PDU/Report-PDU.ta.mjs";
/**
 * @summary PDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUs  ::=  CHOICE {
 *     get-request      GetRequest-PDU,
 *     get-next-request GetNextRequest-PDU,
 *     get-bulk-request GetBulkRequest-PDU,
 *     response         Response-PDU,
 *     set-request      SetRequest-PDU,
 *     inform-request   InformRequest-PDU,
 *     snmpV2-trap      SNMPv2-Trap-PDU,
 *     report           Report-PDU }
 * ```
 */
export
type PDUs =
    { get_request: GetRequest_PDU } /* CHOICE_ALT_ROOT */
    | { get_next_request: GetNextRequest_PDU } /* CHOICE_ALT_ROOT */
    | { get_bulk_request: GetBulkRequest_PDU } /* CHOICE_ALT_ROOT */
    | { response: Response_PDU } /* CHOICE_ALT_ROOT */
    | { set_request: SetRequest_PDU } /* CHOICE_ALT_ROOT */
    | { inform_request: InformRequest_PDU } /* CHOICE_ALT_ROOT */
    | { snmpV2_trap: SNMPv2_Trap_PDU } /* CHOICE_ALT_ROOT */
    | { report: Report_PDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PDUs: $.ASN1Decoder<PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUs} The decoded data structure.
 */
export
function _decode_PDUs (el: _Element) {
    if (!_cached_decoder_for_PDUs) { _cached_decoder_for_PDUs = $._decode_inextensible_choice<PDUs>({
    "CONTEXT 0": [ "get_request", _decode_GetRequest_PDU ],
    "CONTEXT 1": [ "get_next_request", _decode_GetNextRequest_PDU ],
    "CONTEXT 5": [ "get_bulk_request", _decode_GetBulkRequest_PDU ],
    "CONTEXT 2": [ "response", _decode_Response_PDU ],
    "CONTEXT 3": [ "set_request", _decode_SetRequest_PDU ],
    "CONTEXT 6": [ "inform_request", _decode_InformRequest_PDU ],
    "CONTEXT 7": [ "snmpV2_trap", _decode_SNMPv2_Trap_PDU ],
    "CONTEXT 8": [ "report", _decode_Report_PDU ]
}); }
    return _cached_decoder_for_PDUs(el);
}

let _cached_encoder_for_PDUs: $.ASN1Encoder<PDUs> | null = null;

/**
 * @summary Encodes a(n) PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_PDUs (value: PDUs, elGetter: $.ASN1Encoder<PDUs>) {
    if (!_cached_encoder_for_PDUs) { _cached_encoder_for_PDUs = $._encode_choice<PDUs>({
    "get_request": _encode_GetRequest_PDU,
    "get_next_request": _encode_GetNextRequest_PDU,
    "get_bulk_request": _encode_GetBulkRequest_PDU,
    "response": _encode_Response_PDU,
    "set_request": _encode_SetRequest_PDU,
    "inform_request": _encode_InformRequest_PDU,
    "snmpV2_trap": _encode_SNMPv2_Trap_PDU,
    "report": _encode_Report_PDU,
}, $.BER); }
    return _cached_encoder_for_PDUs(value, elGetter);
}


/* eslint-enable */
