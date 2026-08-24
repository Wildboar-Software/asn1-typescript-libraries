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
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/**
 * @summary id_at_mhs_routing_advice
 * @description
 *
 * OBJECT IDENTIFIER `id_at_mhs_routing_advice`. The routing-advice present in an entry
 * in an OR-address-subtree provides advice to the routing-MTA that assists it in
 * arriving at a routing decision for the OR-address corresponding to the entry. It
 * specifies one of the following actions: a) Transfer the message to the target
 * routing-collective indicated. See ITU-T X.412 (1999), §6.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-routing-advice ID ::= {id-at  26}
 * ```
 *
 * @constant
 */
export const id_at_mhs_routing_advice: ID = _OID.fromParts([26], id_at);

/* eslint-enable */
