/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";
// export { id_CA_ECDH } from "../Doc-9303-Part-11-Module/id-CA-ECDH.va.mjs";


/**
 * @summary id_CA_ECDH_3DES_CBC_CBC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-ECDH-3DES-CBC-CBC     OBJECT IDENTIFIER ::= {id-CA-ECDH 1}
 * ```
 * 
 * @constant
 */
export
const id_CA_ECDH_3DES_CBC_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_CA_ECDH);

/* eslint-enable */
