/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncryptedPsid
 * @description
 *
 * Octet string of the PSID encrypted under the CA public key
 * (`EPSID = E(PSID)`;
 * [ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 clauses 8.1.3 and 8.3). Ciphertext only; the
 * CA recovers the PSID with its private key (clause 8.1.4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPsid  ::=  OCTET STRING
 * ```
 */
export type EncryptedPsid = OCTET_STRING; // OctetStringType
export const _decode_EncryptedPsid: $.ASN1Decoder<EncryptedPsid> = $._decodeOctetString;
export const _encode_EncryptedPsid: $.ASN1Encoder<EncryptedPsid> = $._encodeOctetString;

/* eslint-enable */
