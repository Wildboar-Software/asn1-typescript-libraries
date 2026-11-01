/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_nf } from "../ISSS-Schema/euro-nf.va.mjs";
// export { euro_nf } from "../ISSS-Schema/euro-nf.va.mjs";


/**
 * @summary id_euro_nf_resPersNF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-nf-resPersNF        OBJECT IDENTIFIER ::= { euro-nf 3 }
 * ```
 * 
 * @constant
 */
export
const id_euro_nf_resPersNF: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], euro_nf);

/* eslint-enable */
