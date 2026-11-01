/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";
// export { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";


/**
 * @summary id_at_voPersonVerifiedEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-voPersonVerifiedEmail         ID ::= { id-voPersonObjectClass 14 }
 * ```
 * 
 * @constant
 */
export
const id_at_voPersonVerifiedEmail: ID = _OID.fromParts([
    14,
], id_voPersonObjectClass);

/* eslint-enable */
