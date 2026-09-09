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
import { type CallResult, _decode_CallResult, _encode_CallResult } from "../CAP-datatypes/CallResult.ta.mjs";



/**
 * @summary ApplyChargingReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingReportArg {PARAMETERS-BOUND : bound}  ::=  CallResult {bound}
 * ```
 */
export
type ApplyChargingReportArg = CallResult; // DefinedType

let _cached_decoder_for_ApplyChargingReportArg: $.ASN1Decoder<ApplyChargingReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingReportArg (el: _Element): ApplyChargingReportArg {
    if (!_cached_decoder_for_ApplyChargingReportArg) { _cached_decoder_for_ApplyChargingReportArg = _decode_CallResult; }
    return _cached_decoder_for_ApplyChargingReportArg(el);
}

let _cached_encoder_for_ApplyChargingReportArg: $.ASN1Encoder<ApplyChargingReportArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingReportArg (value: ApplyChargingReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingReportArg) { _cached_encoder_for_ApplyChargingReportArg = _encode_CallResult; }
    return _cached_encoder_for_ApplyChargingReportArg(value, elGetter);
}


/* eslint-enable */
