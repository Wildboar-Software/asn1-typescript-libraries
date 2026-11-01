/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../VOPerson/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../VOPerson/ID.ta.mjs";
import { id_geant } from "../VOPerson/id-geant.va.mjs";
// export { id_geant } from "../VOPerson/id-geant.va.mjs";


/**
 * @summary id_voPersonRoot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-voPersonRoot                     ID ::= {id-geant 4}
 * ```
 * 
 * @constant
 */
export
const id_voPersonRoot: ID = _OID.fromParts([
    4,
], id_geant);

/* eslint-enable */
