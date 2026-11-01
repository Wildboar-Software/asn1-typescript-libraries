/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_mace } from "../EduMemberSchema/id-mace.va.mjs";


/**
 * @summary id_eduMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-eduMember                OBJECT IDENTIFIER ::= { id-mace eduMember(5) }
 * ```
 * 
 * @constant
 */
export
const id_eduMember: OBJECT_IDENTIFIER = _OID.fromParts([
    /* eduMember */ 5,
], id_mace);

/* eslint-enable */

