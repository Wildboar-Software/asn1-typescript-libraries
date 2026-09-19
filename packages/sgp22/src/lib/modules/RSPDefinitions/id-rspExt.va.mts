/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";
// export { id_rsp_cert_objects } from "../RSPDefinitions/id-rsp-cert-objects.va.mjs";


/**
 * @summary id_rspExt
 * @description
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
