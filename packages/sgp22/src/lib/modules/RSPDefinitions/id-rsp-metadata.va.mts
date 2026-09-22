/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp } from "../RSPDefinitions/id-rsp.va.mjs";
// export { id_rsp } from "../RSPDefinitions/id-rsp.va.mjs";


/**
 * @summary id_rsp_metadata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-metadata OBJECT IDENTIFIER ::= { id-rsp metadata(3)}
 * ```
 * 
 * @constant
 */
export
const id_rsp_metadata: OBJECT_IDENTIFIER = _OID.fromParts([
    /* metadata */ 3,
], id_rsp);

/* eslint-enable */
