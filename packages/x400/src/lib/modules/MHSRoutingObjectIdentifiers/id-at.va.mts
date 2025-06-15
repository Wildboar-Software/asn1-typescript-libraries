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
/**
 * @summary id_at
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at ID ::= {id-mhs-routing  3}
 * ```
 *
 * @constant
 */
export const id_at: ID = new _OID([3], id_mhs_routing);

/* eslint-enable */
