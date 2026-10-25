/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_sf } from "../IN-object-identifiers/id-sf.va.mjs";
// export { id_sf } from "../IN-object-identifiers/id-sf.va.mjs";


/**
 * @summary id_sf_challengeResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sf-challengeResponse OBJECT IDENTIFIER ::= {id-sf challengeResponse(2)}
 * ```
 * 
 * @constant
 */
export
const id_sf_challengeResponse: OBJECT_IDENTIFIER = _OID.fromParts([
    /* challengeResponse */ 2,
], id_sf);

/* eslint-enable */
