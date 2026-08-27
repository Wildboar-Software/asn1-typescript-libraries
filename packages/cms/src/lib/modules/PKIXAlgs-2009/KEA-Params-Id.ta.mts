/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KEA_Params_Id
 * @description
 *
 * OCTET STRING KEA parameter identifier
 * ([RFC 3279 §2.3.3](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEA-Params-Id  ::=  OCTET STRING
 * ```
 */
export type KEA_Params_Id = OCTET_STRING; // OctetStringType




export const _decode_KEA_Params_Id = $._decodeOctetString;




export const _encode_KEA_Params_Id = $._encodeOctetString;


/* eslint-enable */
