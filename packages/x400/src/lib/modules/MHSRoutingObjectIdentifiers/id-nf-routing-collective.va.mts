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
 * @summary id_nf_routing_collective
 * @description
 *
 * A routing-collective is a collection of one or more MTAs, under common management, which
 * has collective responsibility for a portion of the OR-address name-space, and is capable
 * of routing a message to any MTA managed within the collective. Therefore a
 * routing-collective represents the management structure of some part of the MHS in the
 * context of routing. See ITU-T X.412 (1999), §6.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-routing-collective ID ::= {id-nf  19}
 * ```
 *
 * @constant
 */
export const id_nf_routing_collective: ID = _OID.fromParts([19], id_nf);

/* eslint-enable */
