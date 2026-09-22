/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";
// export { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";


/**
 * @summary id_rsp_totalPartialCrlNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-totalPartialCrlNumber OBJECT IDENTIFIER ::= {id-rspExt 2}
 * ```
 * 
 * @constant
 */
export
const id_rsp_totalPartialCrlNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_rspExt);

/* eslint-enable */
