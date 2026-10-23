/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../Common-Parameters/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../Common-Parameters/NAI.ta.mjs";


/**
 * @summary SUPINAI
 * @description
 *
 * Subscription Permanent Identifier, as defined in 3GPP TS 23.501,
 * clause 5.9.2, in NAI representation. In 3GPP Release 15 a SUPI is
 * either an IMSI or an NAI. This form is the NAI. The value follows
 * `NAI`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.40, citing 3GPP TS 23.501
 * and IETF RFC 7542.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.rfc-editor.org/rfc/rfc7542
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPINAI  ::=  NAI
 * ```
 */
export
type SUPINAI = NAI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SUPINAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SUPINAI: $.ASN1Decoder<SUPINAI> = _decode_NAI;

/**
 * @summary Encodes a(n) SUPINAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPINAI, encoded as an ASN.1 Element.
 */
export const _encode_SUPINAI: (value: SUPINAI, elGetter: $.ASN1Encoder<any>) => _Element = _encode_NAI;


/* eslint-enable */
