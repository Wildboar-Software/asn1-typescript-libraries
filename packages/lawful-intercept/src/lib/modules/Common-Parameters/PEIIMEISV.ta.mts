/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../Common-Parameters/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../Common-Parameters/IMEISV.ta.mjs";


/**
 * @summary PEIIMEISV
 * @description
 *
 * Permanent Equipment Identifier, as defined in 3GPP TS 23.501,
 * clause 5.9.3, in IMEISV representation. In 3GPP Release 15 a PEI is
 * either an IMEI or an IMEISV. This form is the IMEISV: decimal digits
 * with a software version number in place of a Luhn check digit. The
 * value follows `IMEISV`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.44, citing 3GPP TS 23.501
 * and 3GPP TS 23.003, clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEIIMEISV  ::=  IMEISV
 * ```
 */
export
type PEIIMEISV = IMEISV; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PEIIMEISV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PEIIMEISV: $.ASN1Decoder<PEIIMEISV> = _decode_IMEISV;

/**
 * @summary Encodes a(n) PEIIMEISV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEIIMEISV, encoded as an ASN.1 Element.
 */
export const _encode_PEIIMEISV: (value: PEIIMEISV, elGetter: $.ASN1Encoder<any>) => _Element = _encode_IMEISV;


/* eslint-enable */
