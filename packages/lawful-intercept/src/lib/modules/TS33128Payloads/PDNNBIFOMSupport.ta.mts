/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNNBIFOMSupport
 * @description
 * 
 * Shall be present if the NBIFOM Support Indication is set to 1 in the message
 * that triggered the generation of the xIRI or known at the context (see TS
 * 29.274 [87] clauses 7.2.1, 7.2.7 and 8.12).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNNBIFOMSupport  ::=  BOOLEAN
 * ```
 */
export
type PDNNBIFOMSupport = BOOLEAN; // BooleanType
export const _decode_PDNNBIFOMSupport: $.ASN1Decoder<PDNNBIFOMSupport> = $._decodeBoolean;
export const _encode_PDNNBIFOMSupport: $.ASN1Encoder<PDNNBIFOMSupport> = $._encodeBoolean;


/* eslint-enable */
