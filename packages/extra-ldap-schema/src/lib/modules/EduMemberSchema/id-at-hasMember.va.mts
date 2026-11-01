/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduMember } from "../EduMemberSchema/id-eduMember.va.mjs";


/**
 * @summary id_at_hasMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-hasMember             OBJECT IDENTIFIER ::= { id-eduMember 1 2 }
 * ```
 * 
 * @constant
 */
export
const id_at_hasMember: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    2,
], id_eduMember);

/* eslint-enable */

