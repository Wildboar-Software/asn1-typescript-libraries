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
/**
 * @summary id_oc_mta_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-mta-information ID ::= {id-oc  20}
 * ```
 *
 * @constant
 */
export const id_oc_mta_information: ID = new _OID([20], id_oc);

/* eslint-enable */
