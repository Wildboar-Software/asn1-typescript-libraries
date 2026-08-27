/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_smime } from "../SecureMimeMessageV3dot1-2009/id-smime.va.mjs";

/**
 * @summary id_cap
 * @description
 *
 * S/MIME capabilities arc (`id-cap`)
 * ([RFC 5751 §2.5.2](https://datatracker.ietf.org/doc/html/rfc5751#section-2.5.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cap  OBJECT IDENTIFIER ::= { id-smime 11 }
 * ```
 *
 * @constant
 */
export const id_cap: OBJECT_IDENTIFIER = _OID.fromParts([11], id_smime);

/* eslint-enable */
