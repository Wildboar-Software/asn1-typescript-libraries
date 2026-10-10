/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_ds_tls
 * @description
 * 
 * Variant O Certificate Policies value for CERT.DS.TLS, the SM-DS certificate
 * used to establish TLS. The arc `{id-rspRole 6}` is what SGP.22 v3.1 Annex H
 * calls `id-rspRole-ds-tls-v2`. §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-ds-tls OBJECT IDENTIFIER ::= {id-rspRole 6}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_ds_tls: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_rspRole);

/* eslint-enable */
