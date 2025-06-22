/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mp } from "../DirectoryManagement/id-mp.va.mjs";
/**
 * @summary id_mp_chainedReadPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedReadPackage OBJECT IDENTIFIER ::= {id-mp 10}
 * ```
 *
 * @constant
 */
export const id_mp_chainedReadPackage: OBJECT_IDENTIFIER = _OID.fromParts(
    [10],
    id_mp
);

/* eslint-enable */
