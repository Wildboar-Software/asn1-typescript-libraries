/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_shadowSupplierInitiatedAsynchronousAC
 * @description
 *
 * {id-ac 8}. Same ops as `shadowSupplierInitiatedAC`; ROS mode is
 * asynchronous. Optional if the DSA already supports the sync
 * supplier-initiated AC. IDM DISP has no separate async protocol —
 * IDM is always async.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAsynchronousAC   OBJECT IDENTIFIER ::= {id-ac 8}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAsynchronousAC: OBJECT_IDENTIFIER = _OID.fromParts(
    [8],
    id_ac
);

/* eslint-enable */
