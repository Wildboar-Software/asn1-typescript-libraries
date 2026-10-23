/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_avc } from "../IN-Contexts/id-avc.va.mjs";
// export { id_avc } from "../IN-Contexts/id-avc.va.mjs";


/**
 * @summary id_avc_basicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc-basicService OBJECT IDENTIFIER ::= {id-avc 30}
 * ```
 * 
 * @constant
 */
export
const id_avc_basicService: OBJECT_IDENTIFIER = _OID.fromParts([
    30,
], id_avc);

/* eslint-enable */
