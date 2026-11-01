/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";



/**
 * @summary id_nf_transportTableNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nf-transportTableNameForm    OBJECT IDENTIFIER ::= { id-nf 15 }
 * ```
 * 
 * @constant
 */
export
const id_nf_transportTableNameForm: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], id_nf);

/* eslint-enable */
