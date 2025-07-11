/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_timeStamped
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-timeStamped OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24)
 * cms-profile(894) attribute(2) timeStamped(5)}
 * ```
 *
 * @constant
 */
export const id_timeStamped: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* timeStamped */ 5,
    ],
    itu_t
);

/* eslint-enable */
