/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_samba } from "../SambaSchema/id-samba.va.mjs";

/**
 * @summary id_samba_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-samba-at     OBJECT IDENTIFIER ::= { id-samba 2 1 }
 * ```
 * 
 * @constant
 */
export
const id_samba_at: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    1,
], id_samba);

/* eslint-enable */
