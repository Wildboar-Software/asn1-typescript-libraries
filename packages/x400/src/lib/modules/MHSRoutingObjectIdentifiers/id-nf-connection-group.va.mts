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
 * @summary id_nf_connection_group
 * @description
 *
 * OBJECT IDENTIFIER `id_nf_connection_group`. A connection-group is a group of
 * connections over which messages may be directly exchanged between members of a set of
 * MTAs, using a specific MHS transfer protocol over a common network. It therefore
 * represents the topology of the MHS, i.e., how the MTAs are physically interconnected.
 * See ITU-T X.412 (1999), §6.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-connection-group ID ::= {id-nf  0}
 * ```
 *
 * @constant
 */
export const id_nf_connection_group: ID = _OID.fromParts([0], id_nf);

/* eslint-enable */
