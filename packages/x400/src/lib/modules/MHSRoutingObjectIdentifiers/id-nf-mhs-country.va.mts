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
import { id_nf } from '../MHSRoutingObjectIdentifiers/id-nf.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_nf_mhs_country */
/**
 * @summary id_nf_mhs_country
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-mhs-country ID ::= {id-nf  3}
 * ```
 *
 * @constant
 */
export const id_nf_mhs_country: ID = new _OID([3], id_nf);
/* END_OF_SYMBOL_DEFINITION id_nf_mhs_country */

/* eslint-enable */
