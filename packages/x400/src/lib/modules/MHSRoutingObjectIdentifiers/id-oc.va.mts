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
/* START_OF_SYMBOL_DEFINITION id_oc */
/**
 * @summary id_oc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc ID ::= {id-mhs-routing  1}
 * ```
 *
 * @constant
 */
export const id_oc: ID = new _OID([1], id_mhs_routing);
/* END_OF_SYMBOL_DEFINITION id_oc */

/* eslint-enable */
