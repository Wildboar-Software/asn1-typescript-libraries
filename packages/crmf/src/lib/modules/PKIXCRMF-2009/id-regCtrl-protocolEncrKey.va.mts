/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_protocolEncrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-protocolEncrKey    OBJECT IDENTIFIER ::= { id-regCtrl 6 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_protocolEncrKey: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_regCtrl
);

/* eslint-enable */
