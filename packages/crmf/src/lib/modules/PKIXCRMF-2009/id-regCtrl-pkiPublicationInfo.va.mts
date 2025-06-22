/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_regCtrl } from "../PKIXCRMF-2009/id-regCtrl.va.mjs";

/**
 * @summary id_regCtrl_pkiPublicationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl-pkiPublicationInfo OBJECT IDENTIFIER ::= { id-regCtrl 3 }
 * ```
 *
 * @constant
 */
export const id_regCtrl_pkiPublicationInfo: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_regCtrl
);

/* eslint-enable */
