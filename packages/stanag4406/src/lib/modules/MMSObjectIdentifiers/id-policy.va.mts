/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_policy
 * @description
 * 
 * Arc for the NATO security-policy identifier, `{id-mmhs 5}`. Edition 2 uses
 * `id-policy-v1` under this arc. STANAG 4406 (Ed. 2), Annex A, Annex D, and
 * Annex H.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-policy ID ::= {id-mmhs  5}
 * ```
 * 
 * @constant
 */
export
const id_policy: ID = _OID.fromParts([
    5,
], id_mmhs);

/* eslint-enable */
