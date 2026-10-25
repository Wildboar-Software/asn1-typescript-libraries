/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_challengeResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-challengeResponse OBJECT IDENTIFIER ::= {id-at challengeResponse(12)}
 * ```
 * 
 * @constant
 */
export
const id_at_challengeResponse: OBJECT_IDENTIFIER = _OID.fromParts([
    /* challengeResponse */ 12,
], id_at);

/* eslint-enable */
