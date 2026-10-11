/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_extended_authorisation_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-extended-authorisation-info ID ::= {id-hat  5}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_extended_authorisation_info: ID = _OID.fromParts([
    5,
], id_hat);

/* eslint-enable */
