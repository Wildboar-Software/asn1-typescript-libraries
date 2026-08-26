/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_contentLocations
 * @description
 *
 * OID for the contentLocations profile attribute. (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
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
