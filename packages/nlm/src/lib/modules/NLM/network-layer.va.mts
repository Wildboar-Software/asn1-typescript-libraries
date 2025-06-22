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
} from 'asn1-ts';


/**
 * @summary network_layer
 * @description
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
