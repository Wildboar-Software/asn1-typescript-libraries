/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mcont } from "../MMSObjectIdentifiers/id-mcont.va.mjs";


/**
 * @summary id_mct_p772
 * @description
 * 
 * P772 content type for use by the message store, `{id-mcont 1}`. The X.411
 * annex assigns the same arc to `id-nato-mmhs-cont-mm88`, the
 * military-messaging-1988 content. Clause 20.2 requires military messaging to
 * use that content type. STANAG 4406 (Ed. 2), Annex A, Annex D and clause 20.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mct-p772 ID ::= {id-mcont  1}
 * ```
 * 
 * @constant
 */
export
const id_mct_p772: ID = _OID.fromParts([
    1,
], id_mcont);

/* eslint-enable */
