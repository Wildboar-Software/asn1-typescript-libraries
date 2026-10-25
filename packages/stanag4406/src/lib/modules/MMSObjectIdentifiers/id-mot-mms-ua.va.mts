/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_mms_ua
 * @description
 * 
 * Secondary object: the military-messaging user agent. STANAG 4406 (Ed. 2),
 * Annex A, Annex F. The glossary calls this the MM-UA.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-mms-ua ID ::= {id-mot  3}
 * ```
 * 
 * @constant
 */
export
const id_mot_mms_ua: ID = _OID.fromParts([
    3,
], id_mot);

/* eslint-enable */
