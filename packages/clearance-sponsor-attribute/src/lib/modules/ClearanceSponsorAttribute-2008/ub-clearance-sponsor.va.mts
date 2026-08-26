/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";

/**
 * @summary ub_clearance_sponsor
 * @description
 *
 * Upper size bound for the Clearance Sponsor `DirectoryString` value:
 * maximum of 64 characters ([RFC 5917 §2](https://datatracker.ietf.org/doc/html/rfc5917#section-2)).
 * The attribute type is `DirectoryString { ub-clearance-sponsor }` with
 * `utf8String` required and a minimum size of 1 character.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-clearance-sponsor INTEGER ::= 64
 * ```
 *
 * @constant
 */
export
const ub_clearance_sponsor: INTEGER = 64;

/* eslint-enable */
