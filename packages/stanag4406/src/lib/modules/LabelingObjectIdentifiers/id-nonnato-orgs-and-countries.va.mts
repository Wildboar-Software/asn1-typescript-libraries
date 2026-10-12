/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enum_permissive } from "../LabelingObjectIdentifiers/id-enum-permissive.va.mjs";
// export { id_enum_permissive } from "../LabelingObjectIdentifiers/id-enum-permissive.va.mjs";


/**
 * @summary id_nonnato_orgs_and_countries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nonnato-orgs-and-countries ID ::= {id-enum-permissive 0}
 * ```
 * 
 * @constant
 */
export
const id_nonnato_orgs_and_countries: ID = _OID.fromParts([
    0,
], id_enum_permissive);

/* eslint-enable */
