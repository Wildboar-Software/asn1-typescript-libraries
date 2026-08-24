/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_shadowSupplierInitiatedAC
 * @description
 *
 * {id-ac 5}. DISP, supplier-initiated, synchronous. Ops:
 * `updateShadow` and `coordinateShadowUpdate` — not
 * `requestShadowUpdate`. {id-ac 6} and {id-ac 7} were reliable-shadow
 * ACs (withdrawn).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAC               OBJECT IDENTIFIER ::= {id-ac 5}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAC: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_ac
);

/* eslint-enable */
