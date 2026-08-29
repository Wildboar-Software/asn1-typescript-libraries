/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';


/**
 * @summary network_layer
 * @description
 *
 * Root of Network-layer OIDs: `{joint-iso-itu-t network-layer(13)}` (written
 * `joint-iso-ccitt` in the Recommendation).
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * network-layer OBJECT IDENTIFIER ::= {joint-iso-itu-t network-layer(13)}
 * ```
 *
 * @constant
 */
export const network_layer: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* network-layer */ 13],
    joint_iso_itu_t
);

/* eslint-enable */
