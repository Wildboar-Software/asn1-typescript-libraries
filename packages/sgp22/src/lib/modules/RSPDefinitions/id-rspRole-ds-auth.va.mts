/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_ds_auth
 * @description
 * 
 * Variant O Certificate Policies value for CERT.DSauth.SIG, the SM-DS
 * authentication certificate. ES11 mutual authentication uses the same
 * ES10b.AuthenticateServer check as ES9+, and the eUICC accepts a server
 * certificate only when its policy OID is DPauth or DSauth. The arc
 * `{id-rspRole 7}` is what SGP.22 v3.1 Annex H calls `id-rspRole-ds-auth-v2`.
 * §5.8 and §5.7.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-ds-auth OBJECT IDENTIFIER ::= {id-rspRole 7}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_ds_auth: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_rspRole);

/* eslint-enable */
