/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";
// export { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";


/**
 * @summary id_rsp_expDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-expDate OBJECT IDENTIFIER ::= {id-rspExt 1}
 * ```
 * 
 * @constant
 */
export
const id_rsp_expDate: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_rspExt);

/* eslint-enable */
