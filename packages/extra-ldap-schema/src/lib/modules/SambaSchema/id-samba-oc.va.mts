/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_samba } from "../SambaSchema/id-samba.va.mjs";


/**
 * @summary id_samba_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-samba-oc     OBJECT IDENTIFIER ::= { id-samba 2 2 }
 * ```
 * 
 * @constant
 */
export
const id_samba_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    2,
], id_samba);

/* eslint-enable */

