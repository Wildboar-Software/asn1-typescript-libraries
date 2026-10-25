/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-SSF-SCF-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-SSF-SCF-datatypes/ResourceID.ta.mjs";


/**
 * @summary RequestCurrentStatusReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestCurrentStatusReportArg  ::= 
 *   ResourceID
 * ```
 */
export
type RequestCurrentStatusReportArg = ResourceID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RequestCurrentStatusReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestCurrentStatusReportArg: $.ASN1Decoder<RequestCurrentStatusReportArg> = _decode_ResourceID;

/**
 * @summary Encodes a(n) RequestCurrentStatusReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestCurrentStatusReportArg, encoded as an ASN.1 Element.
 */
export const _encode_RequestCurrentStatusReportArg: $.ASN1Encoder<RequestCurrentStatusReportArg> = _encode_ResourceID;


/* eslint-enable */
