/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mcont } from "../MMSObjectIdentifiers/id-mcont.va.mjs";
// export { id_mcont } from "../MMSObjectIdentifiers/id-mcont.va.mjs";


/**
 * @summary id_mct_p772
 * @description
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
