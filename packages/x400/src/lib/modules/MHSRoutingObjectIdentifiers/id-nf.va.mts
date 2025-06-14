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
import { id_mhs_routing } from '../MHSRoutingObjectIdentifiers/id-mhs-routing.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_nf */
/**
 * @summary id_nf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf ID ::= {id-mhs-routing  2}
 * ```
 *
 * @constant
 */
export const id_nf: ID = new _OID([2], id_mhs_routing);
/* END_OF_SYMBOL_DEFINITION id_nf */

/* eslint-enable */
