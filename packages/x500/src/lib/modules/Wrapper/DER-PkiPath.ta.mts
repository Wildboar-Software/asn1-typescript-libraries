/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary DER_PkiPath
 * @description
 *
 * OCTET STRING containing a PkiPath **DER**-encoded so the outer WrPDU
 * need not be DER. First element = CA certificate issued by a trust
 * anchor the relying party trusts; last = end-entity certificate that
 * verifies the signature. Special case: EE certificate issued directly
 * by the trust anchor.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-PkiPath  ::=  OCTET STRING
 *   (CONTAINING PkiPath ENCODED BY der)
 * ```
 */
export type DER_PkiPath = OCTET_STRING; // OctetStringType


export const _decode_DER_PkiPath = $._decodeOctetString;


export const _encode_DER_PkiPath = $._encodeOctetString;


/* eslint-enable */
