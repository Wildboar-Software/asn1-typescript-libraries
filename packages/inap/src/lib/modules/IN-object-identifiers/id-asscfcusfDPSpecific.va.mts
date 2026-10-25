/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_asscfcusfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-asscfcusfDPSpecific OBJECT IDENTIFIER ::= {id-as scf-cusf-DPSpecific(23)}
 * ```
 * 
 * @constant
 */
export
const id_asscfcusfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-DPSpecific */ 23,
], id_as);

/* eslint-enable */
