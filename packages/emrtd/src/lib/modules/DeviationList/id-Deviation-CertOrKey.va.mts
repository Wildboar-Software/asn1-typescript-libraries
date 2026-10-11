/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";
// export { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";


/**
 * @summary id_Deviation_CertOrKey
 * @description
 *
 * Certificate or key deviations. `{id-icao-DeviationList 1}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-CertOrKey                  OBJECT IDENTIFIER ::= {id-icao-DeviationList 1}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_CertOrKey: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_DeviationList);

/* eslint-enable */
