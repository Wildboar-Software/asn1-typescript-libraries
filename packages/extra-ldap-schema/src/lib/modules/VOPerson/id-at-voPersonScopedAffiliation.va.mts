/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";
// export { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";


/**
 * @summary id_at_voPersonScopedAffiliation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-voPersonScopedAffiliation     ID ::= { id-voPersonObjectClass 12 }
 * ```
 * 
 * @constant
 */
export
const id_at_voPersonScopedAffiliation: ID = _OID.fromParts([
    12,
], id_voPersonObjectClass);

/* eslint-enable */
