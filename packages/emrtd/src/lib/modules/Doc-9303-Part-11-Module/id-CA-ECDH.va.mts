/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";
// export { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";


/**
 * @summary id_CA_ECDH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-ECDH                  OBJECT IDENTIFIER ::= {id-CA 2}
 * ```
 * 
 * @constant
 */
export
const id_CA_ECDH: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_CA);

/* eslint-enable */
