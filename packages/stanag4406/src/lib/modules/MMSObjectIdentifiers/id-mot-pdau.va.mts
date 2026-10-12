/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_pdau
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-pdau ID ::= {id-mot  6}
 * ```
 * 
 * @constant
 */
export
const id_mot_pdau: ID = _OID.fromParts([
    6,
], id_mot);

/* eslint-enable */
