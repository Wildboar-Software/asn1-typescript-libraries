/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { dbEKM } from "../CMSObjectIdentifiers/dbEKM.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_UniqueIdentifier
 * @description
 *
 * OID for DBEKM unique-identifier attribute (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2).
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
