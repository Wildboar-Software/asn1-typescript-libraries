/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";
// export { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";


/**
 * @summary id_at_voPersonAuthorName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-voPersonAuthorName            ID ::= { id-voPersonObjectClass 2 }
 * ```
 * 
 * @constant
 */
export
const id_at_voPersonAuthorName: ID = _OID.fromParts([
    2,
], id_voPersonObjectClass);

/* eslint-enable */
