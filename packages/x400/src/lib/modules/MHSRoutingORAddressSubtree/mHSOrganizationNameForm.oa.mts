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
import { mHSOrganization } from '../MHSRoutingORAddressSubtree/mHSOrganization.oa.mjs';
import { mHSOrganizationName } from '../MHSRoutingORAddressSubtree/mHSOrganizationName.oa.mjs';
import { id_nf_mhs_organization } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-organization.va.mjs';
import { type NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSOrganizationNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSOrganizationNameForm NAME-FORM ::= {
 *   NAMES            mHSOrganization
 *   WITH ATTRIBUTES  {mHSOrganizationName}
 *   ID               id-nf-mhs-organization
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSOrganizationNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSOrganization /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSOrganizationName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_organization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
