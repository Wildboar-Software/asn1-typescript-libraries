/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallResult, _decode_CallResult, _encode_CallResult } from "../IN-CS2-datatypes/CallResult.ta.mjs";
// export { CallResult, _decode_CallResult, _encode_CallResult } from "../IN-CS2-datatypes/CallResult.ta.mjs";


/**
 * @summary ApplyChargingReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingReportArg  ::= 
 *   CallResult
 * ```
 */
export
type ApplyChargingReportArg = CallResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ApplyChargingReportArg: $.ASN1Decoder<ApplyChargingReportArg> = _decode_CallResult;

/**
 * @summary Encodes a(n) ApplyChargingReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingReportArg, encoded as an ASN.1 Element.
 */
export const _encode_ApplyChargingReportArg: $.ASN1Encoder<ApplyChargingReportArg> = _encode_CallResult;


/* eslint-enable */
