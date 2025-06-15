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
import { id_tmm } from '../Telebiometrics/id-tmm.va.mjs';

/**
 * @summary id_modalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-modalities             OBJECT IDENTIFIER ::= {id-tmm sensory(3)}
 * ```
 *
 * @constant
 */
export const id_modalities: OBJECT_IDENTIFIER = new _OID(
    [/* sensory */ 3],
    id_tmm
);

/* eslint-enable */
