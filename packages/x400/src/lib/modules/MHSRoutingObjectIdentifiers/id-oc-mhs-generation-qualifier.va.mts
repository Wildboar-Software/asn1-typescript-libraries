/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_oc } from '../MHSRoutingObjectIdentifiers/id-oc.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_oc_mhs_generation_qualifier */
/**
 * @summary id_oc_mhs_generation_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-mhs-generation-qualifier ID ::= {id-oc  5}
 * ```
 *
 * @constant
 */
export const id_oc_mhs_generation_qualifier: ID = new _OID([5], id_oc);
/* END_OF_SYMBOL_DEFINITION id_oc_mhs_generation_qualifier */

/* eslint-enable */
