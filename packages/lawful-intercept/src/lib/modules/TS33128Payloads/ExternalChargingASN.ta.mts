/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary ExternalChargingASN
 * @description
 * 
 * Information related to the charging data event provided by the charging data
 * function. The external ASN type shall be encoded in BER format (see TS 32.297
 * [149] clause 6.1.2.4) and shall be populated per the guidelines for selecting
 * the corresponding service specific ASN file found in TS 32.298 [150] clause
 * 5.2.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalChargingASN  ::=  ExternalASNType
 * ```
 */
export
type ExternalChargingASN = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalChargingASN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ExternalChargingASN: $.ASN1Decoder<ExternalChargingASN> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) ExternalChargingASN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalChargingASN, encoded as an ASN.1 Element.
 */
export const _encode_ExternalChargingASN: $.ASN1Encoder<ExternalChargingASN> = _encode_ExternalASNType;


/* eslint-enable */
