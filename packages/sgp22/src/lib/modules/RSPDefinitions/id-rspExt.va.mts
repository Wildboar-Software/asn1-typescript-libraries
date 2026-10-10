/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";


/**
 * @summary id_rspExt
 * @description
 * 
 * v2 certificate-extension arc `{id-rsp-cert-objects 0}`. SGP.22 v3.1 Annex H
 * records that this value was assigned in v2 and defines `id-rsp-extensions` at
 * `{id-rsp-cert-objects 2}` for v3 extensions. The partial-CRL and
 * expiration-date OIDs in this module hang off this v2 arc, and v3.1 does not
 * define them.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspExt OBJECT IDENTIFIER ::= {id-rsp-cert-objects 0}
 * ```
 * 
 * @constant
 */
export
const id_rspExt: OBJECT_IDENTIFIER = _OID.fromParts([
    0,
], id_rsp_cert_objects);

/* eslint-enable */
