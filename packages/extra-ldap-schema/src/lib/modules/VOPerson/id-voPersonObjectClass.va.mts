/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonRoot } from "../VOPerson/id-voPersonRoot.va.mjs";
// export { id_voPersonRoot } from "../VOPerson/id-voPersonRoot.va.mjs";


/**
 * @summary id_voPersonObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-voPersonObjectClass              ID ::= {id-voPersonRoot 1}
 * ```
 * 
 * @constant
 */
export
const id_voPersonObjectClass: ID = _OID.fromParts([
    1,
], id_voPersonRoot);

/* eslint-enable */
