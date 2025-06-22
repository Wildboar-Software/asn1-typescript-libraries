/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary id_contentLocations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentLocations OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24)
 * cms-profile(894) attribute(2) contentLocations(3)}
 * ```
 *
 * @constant
 */
export const id_contentLocations: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* contentLocations */ 3,
    ],
    itu_t
);

/* eslint-enable */
