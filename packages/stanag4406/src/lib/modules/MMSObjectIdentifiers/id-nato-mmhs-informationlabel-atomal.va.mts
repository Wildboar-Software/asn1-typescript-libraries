/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_informationlabel } from "../MMSObjectIdentifiers/id-informationlabel.va.mjs";


/**
 * @summary id_nato_mmhs_informationlabel_atomal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-informationlabel-atomal ID ::= {id-informationlabel  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_informationlabel_atomal: ID = _OID.fromParts([
    1,
], id_informationlabel);

/* eslint-enable */
