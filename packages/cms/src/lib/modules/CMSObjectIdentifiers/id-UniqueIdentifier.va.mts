/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { dbEKM } from "../CMSObjectIdentifiers/dbEKM.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-UniqueIdentifier OID ::= { dbEKM uid(2) }
 * ```
 *
 * @constant
 */
export const id_UniqueIdentifier: OID = _OID.fromParts([/* uid */ 2], dbEKM);

/* eslint-enable */
