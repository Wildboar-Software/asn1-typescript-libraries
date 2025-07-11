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
import { mHSCountry } from '../MHSRoutingORAddressSubtree/mHSCountry.oa.mjs';
import { id_oc_mhs_physical_delivery_country_name } from '../MHSRoutingObjectIdentifiers/id-oc-mhs-physical-delivery-country-name.va.mjs';
/**
 * @summary mHSPhysicalDeliveryCountry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPhysicalDeliveryCountry OBJECT-CLASS ::= {
 *   SUBCLASS OF  {mHSCountry}
 *   KIND         structural
 *   ID           id-oc-mhs-physical-delivery-country-name
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mHSPhysicalDeliveryCountry: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [mHSCountry] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_physical_delivery_country_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
