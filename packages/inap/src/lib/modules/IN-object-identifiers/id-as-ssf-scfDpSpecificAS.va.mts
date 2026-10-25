/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_ssf_scfDpSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-ssf-scfDpSpecificAS OBJECT IDENTIFIER ::= {id-as ssf-scfDpSpecificAS(5)}
 * ```
 * 
 * @constant
 */
export
const id_as_ssf_scfDpSpecificAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssf-scfDpSpecificAS */ 5,
], id_as);

/* eslint-enable */
