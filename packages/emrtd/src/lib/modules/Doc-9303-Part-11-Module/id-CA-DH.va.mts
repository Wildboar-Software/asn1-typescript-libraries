/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";
// export { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";


/**
 * @summary id_CA_DH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-DH                    OBJECT IDENTIFIER ::= {id-CA 1}
 * ```
 * 
 * @constant
 */
export
const id_CA_DH: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_CA);

/* eslint-enable */
