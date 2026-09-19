/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao } from "../DeviationList/id-icao.va.mjs";
// export { id_icao } from "../DeviationList/id-icao.va.mjs";


/**
 * @summary id_icao_mrtd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-mrtd                            OBJECT IDENTIFIER ::= {id-icao 1}
 * ```
 * 
 * @constant
 */
export
const id_icao_mrtd: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao);

/* eslint-enable */
