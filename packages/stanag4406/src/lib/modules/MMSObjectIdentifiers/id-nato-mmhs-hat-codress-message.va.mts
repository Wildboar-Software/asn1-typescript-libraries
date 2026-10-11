/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_codress_message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-codress-message ID ::= {id-hat  9}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_codress_message: ID = _OID.fromParts([
    9,
], id_hat);

/* eslint-enable */
