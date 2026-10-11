/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";
// export { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";


/**
 * @summary id_Deviation_Chip
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-Chip                       OBJECT IDENTIFIER ::= {id-icao-DeviationList 4}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_Chip: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_icao_DeviationList);

/* eslint-enable */
