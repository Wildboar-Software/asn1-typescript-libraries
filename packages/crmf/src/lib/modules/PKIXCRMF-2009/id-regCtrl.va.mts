/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkip } from "../PKIXCRMF-2009/id-pkip.va.mjs";

/**
 * @summary id_regCtrl
 * @description
 *
 * Arc for CRMF registration controls: `{ id-pkip 1 }`
 * ([RFC 4211 §8](https://datatracker.ietf.org/doc/html/rfc4211#section-8)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl OBJECT IDENTIFIER ::= { id-pkip 1 }
 * ```
 *
 * @constant
 */
export const id_regCtrl: OBJECT_IDENTIFIER = _OID.fromParts([1], id_pkip);

/* eslint-enable */
