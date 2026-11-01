/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_nsds } from "../DynGroup/id-nsds.va.mjs";
// export { id_nsds } from "../DynGroup/id-nsds.va.mjs";


/**
 * @summary id_nsdsat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nsdsat           OBJECT IDENTIFIER ::= { id-nsds 1 }
 * ```
 * 
 * @constant
 */
export
const id_nsdsat: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_nsds);

/* eslint-enable */
