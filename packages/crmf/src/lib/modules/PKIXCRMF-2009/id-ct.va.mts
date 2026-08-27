/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_smime } from "../PKIXCRMF-2009/id-smime.va.mjs";

/**
 * @summary id_ct
 * @description
 *
 * CMS content-types arc: `{ id-smime 1 }`
 * ([RFC 4211 Appendix B](https://datatracker.ietf.org/doc/html/rfc4211#appendix-B)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct   OBJECT IDENTIFIER ::= { id-smime  1 }
 * ```
 *
 * @constant
 */
export const id_ct: OBJECT_IDENTIFIER = _OID.fromParts([1], id_smime);

/* eslint-enable */
