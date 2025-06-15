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
import { id_modalities } from '../Telebiometrics/id-modalities.va.mjs';

/**
 * @summary id_calor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-calor                  OBJECT IDENTIFIER ::= {id-modalities calor(6)}
 * ```
 *
 * @constant
 */
export const id_calor: OBJECT_IDENTIFIER = new _OID(
    [/* calor */ 6],
    id_modalities
);

/* eslint-enable */
