/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspExt } from "../RSPDefinitions/id-rspExt.va.mjs";


/**
 * @summary id_rsp_expDate
 * @description
 * 
 * v2 extension OID `{id-rspExt 1}` for `ExpirationDate`. SGP.22 v3.1 Annex H
 * does not define this extension. See `id-rspExt`.
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
