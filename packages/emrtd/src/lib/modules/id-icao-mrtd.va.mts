/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao } from "./id-icao.va.mjs";

/**
 * @summary id_icao_mrtd
 * @description
 *
 * MRTD arc `{id-icao 1}` (2.23.136.1). Part 12, section 10.2. The same value
 * is used by the LDS security object module and by the deviation list
 * module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-icao-mrtd OBJECT IDENTIFIER ::= {id-icao 1}
 * ```
 *
 * @constant
 */
export
const id_icao_mrtd: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao);

/* eslint-enable */
