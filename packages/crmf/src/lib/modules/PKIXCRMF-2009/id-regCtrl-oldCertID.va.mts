/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_oldCertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-oldCertID  OBJECT IDENTIFIER ::= { id-regCtrl 5 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_oldCertID: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_regCtrl
);

/* eslint-enable */
