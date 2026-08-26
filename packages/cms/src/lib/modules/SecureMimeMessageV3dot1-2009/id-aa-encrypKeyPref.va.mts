/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_aa } from "../SecureMimeMessageV3dot1-2009/id-aa.va.mjs";

/**
 * @summary id_aa_encrypKeyPref
 * @description
 *
 * OID for the SMIMEEncryptionKeyPreference attribute (`id-aa` 11)
 * ([RFC 5751 §2.5.3](https://datatracker.ietf.org/doc/html/rfc5751#section-2.5.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-encrypKeyPref OBJECT IDENTIFIER ::= {id-aa 11}
 * ```
 *
 * @constant
 */
export const id_aa_encrypKeyPref: OBJECT_IDENTIFIER = _OID.fromParts([11], id_aa);

/* eslint-enable */
