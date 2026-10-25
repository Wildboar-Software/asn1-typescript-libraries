/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta.mjs";
/**
 * @summary ShadowSupplierInitiatedDISP_OSI_PDUs
 * @description
 *
 * `OSI-PDU{shadowSupplierInitiatedAC}`: supplier-initiated synchronous
 * DISP. No `requestShadowUpdate` on this association.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowSupplierInitiatedDISP-OSI-PDUs  ::=  OSI-PDU{shadowSupplierInitiatedAC}
 * ```
 */
export type ShadowSupplierInitiatedDISP_OSI_PDUs = OSI_PDU; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ShadowSupplierInitiatedDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowSupplierInitiatedDISP_OSI_PDUs} The decoded data structure.
 */
export const _decode_ShadowSupplierInitiatedDISP_OSI_PDUs: $.ASN1Decoder<ShadowSupplierInitiatedDISP_OSI_PDUs> = _decode_OSI_PDU;

/**
 * @summary Encodes a(n) ShadowSupplierInitiatedDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowSupplierInitiatedDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_ShadowSupplierInitiatedDISP_OSI_PDUs: $.ASN1Encoder<ShadowSupplierInitiatedDISP_OSI_PDUs> = _encode_OSI_PDU;


/* eslint-enable */
