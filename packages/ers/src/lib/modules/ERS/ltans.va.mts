/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ltans
 * @description
 *
 * LTANS object identifier tree root (RFC 4998 §2.3). Used as the
 * base arc for LTANS modules and related identifiers, including the
 * ERS ASN.1 modules under `id-mod`.
 *
 * Value `{ iso(1) identified-organization(3) dod(6) internet(1)
 * security(5) mechanisms(5) ltans(11) }`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ltans OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6)
 *     internet(1) security(5) mechanisms(5) ltans(11) }
 * ```
 *
 * @constant
 */
export
const ltans: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* ltans */ 11,
]);

/* eslint-enable */
