/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_authenticator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-authenticator OBJECT IDENTIFIER ::= { id-regCtrl 2 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_authenticator: OBJECT_IDENTIFIER = _OID.fromParts(
    [2],
    id_regCtrl
);

/* eslint-enable */
