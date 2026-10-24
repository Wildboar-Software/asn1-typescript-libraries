/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMEI, _decode_IMEI, _encode_IMEI } from "../Common-Parameters/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../Common-Parameters/IMEI.ta.mjs";


/**
 * @summary PEIIMEI
 * @description
 *
 * Permanent Equipment Identifier, as defined in 3GPP TS 23.501,
 * clause 5.9.3, in IMEI representation without the final check digit
 * or spare digit. In 3GPP Release 15 a PEI is either an IMEI or an
 * IMEISV. This form is the IMEI without that final digit. The value
 * follows `IMEI`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.42, citing 3GPP TS 23.501,
 * clause 5.9.3, and 3GPP TS 23.003, clause 6.2.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEIIMEI  ::=  IMEI
 * ```
 */
export
type PEIIMEI = IMEI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PEIIMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PEIIMEI: $.ASN1Decoder<PEIIMEI> = _decode_IMEI;

/**
 * @summary Encodes a(n) PEIIMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEIIMEI, encoded as an ASN.1 Element.
 */
export const _encode_PEIIMEI: $.ASN1Encoder<PEIIMEI> = _encode_IMEI;


/* eslint-enable */
