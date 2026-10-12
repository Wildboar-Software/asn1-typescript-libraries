/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_upper_bounds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-upper-bounds ID ::= {id-mod  0}
 * ```
 * 
 * @constant
 */
export
const id_mod_upper_bounds: ID = _OID.fromParts([
    0,
], id_mod);

/* eslint-enable */
