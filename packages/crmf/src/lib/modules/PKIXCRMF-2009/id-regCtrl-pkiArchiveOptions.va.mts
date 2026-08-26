/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_pkiArchiveOptions
 * @description
 *
 * OID for the `pkiArchiveOptions` control: `{ id-regCtrl 4 }`
 * ([RFC 4211 §6.4](https://datatracker.ietf.org/doc/html/rfc4211#section-6.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-pkiArchiveOptions OBJECT IDENTIFIER ::= { id-regCtrl 4 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_pkiArchiveOptions: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    id_regCtrl
);

/* eslint-enable */
