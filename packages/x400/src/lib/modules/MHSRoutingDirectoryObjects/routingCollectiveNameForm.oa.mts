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
import { routingCollective } from '../MHSRoutingDirectoryObjects/routingCollective.oa.mjs';
import { routingCollectiveName } from '../MHSRoutingDirectoryObjects/routingCollectiveName.oa.mjs';
import { id_nf_routing_collective } from '../MHSRoutingObjectIdentifiers/id-nf-routing-collective.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary routingCollectiveNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * routingCollectiveNameForm NAME-FORM ::= {
 *   NAMES            routingCollective
 *   WITH ATTRIBUTES  {routingCollectiveName}
 *   ID               id-nf-routing-collective
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const routingCollectiveNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': routingCollective /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [routingCollectiveName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_routing_collective /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
