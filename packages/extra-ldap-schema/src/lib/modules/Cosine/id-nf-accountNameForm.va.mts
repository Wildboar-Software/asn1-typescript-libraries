/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";



/**
 * @summary id_nf_accountNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nf-accountNameForm               OBJECT IDENTIFIER ::= { id-nf 53 }
 * ```
 * 
 * @constant
 */
export
const id_nf_accountNameForm: OBJECT_IDENTIFIER = _OID.fromParts([
    53,
], id_nf);

/* eslint-enable */
