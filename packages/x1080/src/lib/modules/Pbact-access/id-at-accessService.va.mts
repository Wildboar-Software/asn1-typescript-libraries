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
import { id_x1080_0_attr } from '../Pbact-access/id-x1080-0-attr.va.mjs';

/**
 * @summary id_at_accessService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-accessService OBJECT IDENTIFIER ::= { id-x1080-0-attr 1 }
 * ```
 *
 * @constant
 */
export const id_at_accessService: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_x1080_0_attr
);

/* eslint-enable */
