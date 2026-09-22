/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp } from "../RSPDefinitions/id-rsp.va.mjs";
// export { id_rsp } from "../RSPDefinitions/id-rsp.va.mjs";


/**
 * @summary id_rsp_cert_objects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-cert-objects OBJECT IDENTIFIER ::= {id-rsp cert-objects(2)}
 * ```
 * 
 * @constant
 */
export
const id_rsp_cert_objects: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cert-objects */ 2,
], id_rsp);

/* eslint-enable */
