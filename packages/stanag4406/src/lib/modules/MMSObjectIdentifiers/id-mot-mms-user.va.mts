/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_mms_user
 * @description
 * 
 * Primary object: the MMS user, consumer of origination, reception, and
 * management. STANAG 4406 (Ed. 2), Annex A, Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-mms-user ID ::= {id-mot  1}
 * ```
 * 
 * @constant
 */
export
const id_mot_mms_user: ID = _OID.fromParts([
    1,
], id_mot);

/* eslint-enable */
