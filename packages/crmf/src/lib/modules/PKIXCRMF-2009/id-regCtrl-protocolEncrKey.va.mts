/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_protocolEncrKey
 * @description
 *
 * OID for the `protocolEncrKey` control: `{ id-regCtrl 6 }`
 * ([RFC 4211 §6.6](https://datatracker.ietf.org/doc/html/rfc4211#section-6.6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-protocolEncrKey    OBJECT IDENTIFIER ::= { id-regCtrl 6 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_protocolEncrKey: OBJECT_IDENTIFIER = _OID.fromParts(
    [6],
    id_regCtrl
);

/* eslint-enable */
