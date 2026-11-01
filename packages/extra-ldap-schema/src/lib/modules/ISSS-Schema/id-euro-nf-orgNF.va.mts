/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_nf } from "../ISSS-Schema/euro-nf.va.mjs";


/**
 * @summary id_euro_nf_orgNF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-nf-orgNF            OBJECT IDENTIFIER ::= { euro-nf 1 }
 * ```
 * 
 * @constant
 */
export
const id_euro_nf_orgNF: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], euro_nf);

/* eslint-enable */

