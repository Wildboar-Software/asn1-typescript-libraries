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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { routingCollectiveName } from '../MHSRoutingDirectoryObjects/routingCollectiveName.oa.mjs';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa.mjs';
import { entryConnectionGroupName } from '../MHSRoutingDirectoryObjects/entryConnectionGroupName.oa.mjs';
import { localExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/localExitConnectionGroupName.oa.mjs';
import { transitExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/transitExitConnectionGroupName.oa.mjs';
import { id_oc_routing_collective } from '../MHSRoutingObjectIdentifiers/id-oc-routing-collective.va.mjs';
/**
 * @summary routingCollective
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * routingCollective OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {routingCollectiveName}
 *   MAY CONTAIN
 *     {description | entryConnectionGroupName | localExitConnectionGroupName |
 *       transitExitConnectionGroupName}
 *   --at least one entry-CG and exit-CG should be present
 *   ID            id-oc-routing-collective
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const routingCollective: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [routingCollectiveName] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        description,
        entryConnectionGroupName,
        localExitConnectionGroupName,
        transitExitConnectionGroupName,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_routing_collective /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
