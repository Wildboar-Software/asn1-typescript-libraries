/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_regToken
 * @description
 *
 * OID for the `regToken` control: `{ id-regCtrl 1 }`
 * ([RFC 4211 §6.1](https://datatracker.ietf.org/doc/html/rfc4211#section-6.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-regToken OBJECT IDENTIFIER ::= { id-regCtrl 1 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_regToken: OBJECT_IDENTIFIER = _OID.fromParts([1], id_regCtrl);

/* eslint-enable */
