/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";
// export { id_PK } from "../Doc-9303-Part-11-Module/id-PK.va.mjs";


/**
 * @summary id_PK_ECDH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PK-ECDH                  OBJECT IDENTIFIER ::= {id-PK 2}
 * ```
 * 
 * @constant
 */
export
const id_PK_ECDH: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_PK);

/* eslint-enable */
