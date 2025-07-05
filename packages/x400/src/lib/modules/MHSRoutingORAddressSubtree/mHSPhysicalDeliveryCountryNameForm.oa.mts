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
import { mHSPhysicalDeliveryCountry } from '../MHSRoutingORAddressSubtree/mHSPhysicalDeliveryCountry.oa.mjs';
import { mHSCountryName } from '../MHSRoutingORAddressSubtree/mHSCountryName.oa.mjs';
import { id_nf_mhs_physical_delivery_country } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-physical-delivery-country.va.mjs';
import { type NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSPhysicalDeliveryCountryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPhysicalDeliveryCountryNameForm NAME-FORM ::= {
 *   NAMES            mHSPhysicalDeliveryCountry
 *   WITH ATTRIBUTES  {mHSCountryName}
 *   ID               id-nf-mhs-physical-delivery-country
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSPhysicalDeliveryCountryNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSPhysicalDeliveryCountry /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSCountryName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_physical_delivery_country /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
