/* eslint-disable */
import {
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "asn1-ts";

/**
 * @summary id_acseAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-acseAS                                     OBJECT IDENTIFIER ::= {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(0) version(1)}
 * ```
 *
 * @constant
 */
export const id_acseAS: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* association-control */ 2,
        /* abstract-syntax */ 1,
        /* apdus */ 0,
        /* version */ 1,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
