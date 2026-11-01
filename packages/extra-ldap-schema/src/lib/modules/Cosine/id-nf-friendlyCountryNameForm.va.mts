/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";



/**
 * @summary id_nf_friendlyCountryNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nf-friendlyCountryNameForm       OBJECT IDENTIFIER ::= { id-nf 58 }
 * ```
 * 
 * @constant
 */
export
const id_nf_friendlyCountryNameForm: OBJECT_IDENTIFIER = _OID.fromParts([
    58,
], id_nf);

/* eslint-enable */
