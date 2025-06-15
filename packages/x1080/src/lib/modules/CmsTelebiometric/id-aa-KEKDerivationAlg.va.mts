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
import { id_aa } from '../CmsTelebiometric/id-aa.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_aa_KEKDerivationAlg */
/**
 * @summary id_aa_KEKDerivationAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-KEKDerivationAlg OBJECT IDENTIFIER ::= { id-aa 32 }
 * ```
 *
 * @constant
 */
export const id_aa_KEKDerivationAlg: OBJECT_IDENTIFIER = new _OID([32], id_aa);
/* END_OF_SYMBOL_DEFINITION id_aa_KEKDerivationAlg */

/* eslint-enable */
