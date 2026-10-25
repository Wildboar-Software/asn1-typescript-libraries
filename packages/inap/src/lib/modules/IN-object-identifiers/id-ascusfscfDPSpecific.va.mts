/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_ascusfscfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ascusfscfDPSpecific OBJECT IDENTIFIER ::= {id-as cusf-scf-DPSpecific(24)}
 * ```
 * 
 * @constant
 */
export
const id_ascusfscfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf-scf-DPSpecific */ 24,
], id_as);

/* eslint-enable */
