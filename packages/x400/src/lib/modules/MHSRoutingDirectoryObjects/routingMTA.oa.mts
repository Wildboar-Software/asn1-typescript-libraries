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
import { type OBJECT_CLASS } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/InformationFramework';
import { routingCollective } from '../MHSRoutingDirectoryObjects/routingCollective.oa.mjs';
import { oRAddressSubtrees } from '../MHSRoutingDirectoryObjects/oRAddressSubtrees.oa.mjs';
import { mHSMessageTransferAgentName } from '../MHSRoutingDirectoryObjects/mHSMessageTransferAgentName.oa.mjs';
import { id_oc_routing_mta } from '../MHSRoutingObjectIdentifiers/id-oc-routing-mta.va.mjs';
/**
 * @summary routingMTA
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
 * routingMTA OBJECT-CLASS ::= {
 *   SUBCLASS OF   {routingCollective}
 *   MUST CONTAIN  {oRAddressSubtrees | mHSMessageTransferAgentName}
 *   ID            id-oc-routing-mta
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const routingMTA: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [routingCollective] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        oRAddressSubtrees,
        mHSMessageTransferAgentName,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_routing_mta /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
