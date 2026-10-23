/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary ServiceManagementSSF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceManagementSSF-SCF-PDUs  ::= 
 *   TCMessage{{SsfToScfServiceManagementInvokable}, {EmptyReturnable}}
 * ```
 */
export
type ServiceManagementSSF_SCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceManagementSSF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceManagementSSF_SCF_PDUs: $.ASN1Decoder<ServiceManagementSSF_SCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) ServiceManagementSSF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceManagementSSF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_ServiceManagementSSF_SCF_PDUs: (value: ServiceManagementSSF_SCF_PDUs, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TCMessage;


/* eslint-enable */
