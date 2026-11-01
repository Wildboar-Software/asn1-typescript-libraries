/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";
// export { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";


/**
 * @summary id_at_voPersonExternalAffiliation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-voPersonExternalAffiliation   ID ::= { id-voPersonObjectClass 11 }
 * ```
 * 
 * @constant
 */
export
const id_at_voPersonExternalAffiliation: ID = _OID.fromParts([
    11,
], id_voPersonObjectClass);

/* eslint-enable */
