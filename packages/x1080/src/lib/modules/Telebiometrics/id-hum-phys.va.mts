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
import { id_telebio } from '../Telebiometrics/id-telebio.va.mjs';

/**
 * @summary id_hum_phys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hum-phys               OBJECT IDENTIFIER ::= { id-telebio human-phy(2) }
 * ```
 *
 * @constant
 */
export const id_hum_phys: OBJECT_IDENTIFIER = new _OID(
    [/* human-phy */ 2],
    id_telebio
);

/* eslint-enable */
