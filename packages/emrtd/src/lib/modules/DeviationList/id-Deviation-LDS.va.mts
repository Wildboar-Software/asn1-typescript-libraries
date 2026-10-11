/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";
// export { id_icao_DeviationList } from "../DeviationList/id-icao-DeviationList.va.mjs";


/**
 * @summary id_Deviation_LDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-LDS                        OBJECT IDENTIFIER ::= {id-icao-DeviationList 2}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_LDS: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_icao_DeviationList);

/* eslint-enable */
