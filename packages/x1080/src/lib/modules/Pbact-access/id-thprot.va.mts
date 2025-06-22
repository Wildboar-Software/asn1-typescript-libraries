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
import { id_telebio } from '../Pbact-access/id-telebio.va.mjs';

/**
 * @summary id_thprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-thprot            OBJECT IDENTIFIER ::= { id-telebio thprot(10) }
 * ```
 *
 * @constant
 */
export const id_thprot: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* thprot */ 10],
    id_telebio
);

/* eslint-enable */
