/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enum_permissive } from "../LabelingObjectIdentifiers/id-enum-permissive.va.mjs";


/**
 * @summary id_nonnato_orgs_and_countries
 * @description
 * 
 * Tag name for the enumerated permissive releasability integers,
 * `{id-enum-permissive 0}`. The values are `NONNATOOrgsAndCountries`. STANAG
 * 4406 (Ed. 2), Annex H.3.4 and H.4.
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
