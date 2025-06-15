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
} from 'asn1-ts';
import { network_layer } from '../NLM/network-layer.va.mjs';

/**
 * @summary nl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nl OBJECT IDENTIFIER ::= {network-layer management(0)}
 * ```
 *
 * @constant
 */
export const nl: OBJECT_IDENTIFIER = new _OID(
    [/* management */ 0],
    network_layer
);

/* eslint-enable */
