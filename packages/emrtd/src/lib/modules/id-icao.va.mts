/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_icao
 * @description
 *
 * ICAO arc `{joint-iso-itu-t(2) international(23) icao(136)}`. Part 12,
 * section 10.2, also writes it `{2 23 136}`. The same value is used by the
 * LDS security object module and by the deviation list module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-icao OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) international(23) icao(136)}
 * ```
 *
 * @constant
 */
export
const id_icao: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* international */ 23,
    /* icao */ 136,
]);

/* eslint-enable */
