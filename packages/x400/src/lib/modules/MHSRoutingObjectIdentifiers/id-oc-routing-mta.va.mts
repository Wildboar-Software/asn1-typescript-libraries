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
import { id_oc } from '../MHSRoutingObjectIdentifiers/id-oc.va.mjs';
/**
 * @summary id_oc_routing_mta
 * @description
 *
 * A routing-MTA is an MTA that participates in MHS-routing as defined in this
 * Recommendation | International Standard. By definition, a routing-MTA is the smallest
 * instance of a routing-collective and occupies the lowest level in the routing-collective
 * hierarchy, i.e. See ITU-T X.412 (1999), §6.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-routing-mta ID ::= {id-oc  23}
 * ```
 *
 * @constant
 */
export const id_oc_routing_mta: ID = _OID.fromParts([23], id_oc);

/* eslint-enable */
