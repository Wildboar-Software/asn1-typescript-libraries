/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_shadowConsumerInitiatedAC
 * @description
 *
 * {id-ac 4}. DISP, consumer-initiated, synchronous. Ops:
 * `requestShadowUpdate` and `updateShadow` — not
 * `coordinateShadowUpdate`. Conformance minimum is this or the
 * supplier-initiated sync AC; async ACs are optional extras.
 * DISP Bind version constrains all subsequent PDUs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAC               OBJECT IDENTIFIER ::= {id-ac 4}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAC: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    id_ac
);

/* eslint-enable */
