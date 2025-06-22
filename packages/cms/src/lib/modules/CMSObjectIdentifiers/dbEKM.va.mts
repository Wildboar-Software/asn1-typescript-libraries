/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary dbEKM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dbEKM OID ::= {joint-iso-itu-t(2) country(16) us(840) organization(1) wfbna(114171)
 * lobs(4) eisArchitecture(1) techniques(2) dbEKM(0)}
 * ```
 *
 * @constant
 */
export const dbEKM: OID = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* wfbna */ 114171,
    /* lobs */ 4,
    /* eisArchitecture */ 1,
    /* techniques */ 2,
    /* dbEKM */ 0,
]);

/* eslint-enable */
