/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";
// export { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";


/**
 * @summary id_rspRole
 * @description
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
