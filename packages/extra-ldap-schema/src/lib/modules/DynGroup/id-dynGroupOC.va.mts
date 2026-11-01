/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_dynGroupBase } from "../DynGroup/id-dynGroupBase.va.mjs";


/**
 * @summary id_dynGroupOC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dynGroupOC       OBJECT IDENTIFIER ::= { id-dynGroupBase 2 }
 * ```
 * 
 * @constant
 */
export
const id_dynGroupOC: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_dynGroupBase);

/* eslint-enable */

