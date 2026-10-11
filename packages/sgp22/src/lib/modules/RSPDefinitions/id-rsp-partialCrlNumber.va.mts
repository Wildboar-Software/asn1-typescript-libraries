/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";


/**
 * @summary id_rsp_partialCrlNumber
 * @description
 * 
 * v2 extension OID `{id-rspExt 3}` for `PartialCrlNumber`. SGP.22 v3.1 does not
 * define partial CRLs. See `id-rspExt`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-partialCrlNumber OBJECT IDENTIFIER ::= {id-rspExt 3}
 * ```
 * 
 * @constant
 */
export
const id_rsp_partialCrlNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_rspExt);

/* eslint-enable */
