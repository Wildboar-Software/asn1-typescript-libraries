/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_et
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-et ID ::= {id-mmhs  7}
 * ```
 * 
 * @constant
 */
export
const id_et: ID = _OID.fromParts([
    7,
], id_mmhs);

/* eslint-enable */
