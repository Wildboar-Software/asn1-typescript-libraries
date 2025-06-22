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
} from '@wildboar/asn1';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_nf } from '../MHSRoutingObjectIdentifiers/id-nf.va.mjs';
/**
 * @summary id_nf_mhs_extended_network_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-mhs-extended-network-address ID ::= {id-nf  4}
 * ```
 *
 * @constant
 */
export const id_nf_mhs_extended_network_address: ID = _OID.fromParts([4], id_nf);

/* eslint-enable */
