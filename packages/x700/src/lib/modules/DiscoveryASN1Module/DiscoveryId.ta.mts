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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary DiscoveryId
 * @description
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
