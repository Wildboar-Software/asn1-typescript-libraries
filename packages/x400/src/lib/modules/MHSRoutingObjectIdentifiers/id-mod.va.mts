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
 * @summary id_mod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod ID ::= {id-mhs-routing  0}
 * ```
 *
 * @constant
 */
export const id_mod: ID = new _OID([0], id_mhs_routing);

/* eslint-enable */
