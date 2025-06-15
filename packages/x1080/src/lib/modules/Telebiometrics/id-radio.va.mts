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
 * @summary id_radio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-radio                  OBJECT IDENTIFIER ::= {id-modalities radio(5)}
 * ```
 *
 * @constant
 */
export const id_radio: OBJECT_IDENTIFIER = new _OID(
    [/* radio */ 5],
    id_modalities
);

/* eslint-enable */
