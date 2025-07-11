/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { dbEKM } from "../CMSObjectIdentifiers/dbEKM.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_SimpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-SimpleString OID ::= { dbEKM ss(1) }
 * ```
 *
 * @constant
 */
export const id_SimpleString: OID = _OID.fromParts([/* ss */ 1], dbEKM);

/* eslint-enable */
