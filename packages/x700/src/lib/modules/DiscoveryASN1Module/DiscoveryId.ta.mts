/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DiscoveryId
 * @description
 *
 * Naming attribute of a discovery managed object. The discovery–system
 * name binding requires the single value `"DSC1"` under a given
 * `system` object so managers can locate the discovery object by a
 * fixed RDN. ITU-T Rec. X.750 (10/96)
 * [§8.2.3.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.4.2–A.4.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscoveryId  ::=  GraphicString
 * ```
 */
export type DiscoveryId = GraphicString; // GraphicString


export const _decode_DiscoveryId = $._decodeGraphicString;


export const _encode_DiscoveryId = $._encodeGraphicString;


/* eslint-enable */
