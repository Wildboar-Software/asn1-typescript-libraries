/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";


/**
 * @summary id_rspRole
 * @description
 * 
 * Parent of the Certificate Policies OIDs that name an RSP role (RFC 5280
 * certificatePolicies, critical). SGP.22 v3.1 §4.5.2.1. The arcs in this module
 * are the Variant O assignment. v3.1 Annex H keeps `id-rspRole-ci` at
 * `{id-rspRole 0}` and renames the other flat arcs with a `-v2` suffix; the
 * unqualified v3 names sit further down the tree (CI SubCA, EUM, SM-DP+ SubCA,
 * SM-DS SubCA).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole OBJECT IDENTIFIER ::= {id-rsp-cert-objects 1}
 * ```
 * 
 * @constant
 */
export
const id_rspRole: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_rsp_cert_objects);

/* eslint-enable */
