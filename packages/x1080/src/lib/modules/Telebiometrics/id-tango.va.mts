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
} from '@wildboar/asn1';
import { id_modalities } from '../Telebiometrics/id-modalities.va.mjs';

/**
 * @summary id_tango
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tango                  OBJECT IDENTIFIER ::= {id-modalities tango(1)}
 * ```
 *
 * @constant
 */
export const id_tango: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* tango */ 1],
    id_modalities
);

/* eslint-enable */
