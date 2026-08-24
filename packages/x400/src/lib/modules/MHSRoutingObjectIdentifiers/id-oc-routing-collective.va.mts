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
 * @summary id_oc_routing_collective
 * @description
 *
 * OBJECT IDENTIFIER `id_oc_routing_collective`. A routing-collective is a collection of
 * one or more MTAs, under common management, which has collective responsibility for a
 * portion of the OR-address name-space, and is capable of routing a message to any MTA
 * managed within the collective. Therefore a routing-collective represents the
 * management structure of some part of the MHS in the context of routing. See ITU-T
 * X.412 (1999), §6.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-routing-collective ID ::= {id-oc  22}
 * ```
 *
 * @constant
 */
export const id_oc_routing_collective: ID = _OID.fromParts([22], id_oc);

/* eslint-enable */
