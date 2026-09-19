/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA_DH } from "../Doc-9303-Part-11-Module/id-CA-DH.va.mjs";
// export { id_CA_DH } from "../Doc-9303-Part-11-Module/id-CA-DH.va.mjs";


/**
 * @summary id_CA_DH_AES_CBC_CMAC_128
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-DH-AES-CBC-CMAC-128   OBJECT IDENTIFIER ::= {id-CA-DH 2}
 * ```
 * 
 * @constant
 */
export
const id_CA_DH_AES_CBC_CMAC_128: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_CA_DH);

/* eslint-enable */
