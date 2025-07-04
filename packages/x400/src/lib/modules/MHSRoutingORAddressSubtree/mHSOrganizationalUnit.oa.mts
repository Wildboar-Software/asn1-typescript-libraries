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
import { oRAddressElement } from '../MHSRoutingORAddressSubtree/oRAddressElement.oa.mjs';
import { mHSOrganizationalUnitName } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnitName.oa.mjs';
import { id_oc_mhs_organizational_unit } from '../MHSRoutingObjectIdentifiers/id-oc-mhs-organizational-unit.va.mjs';
/**
 * @summary mHSOrganizationalUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSOrganizationalUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF   {oRAddressElement}
 *   KIND          structural
 *   MUST CONTAIN  {mHSOrganizationalUnitName}
 *   ID            id-oc-mhs-organizational-unit
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mHSOrganizationalUnit: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [oRAddressElement] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSOrganizationalUnitName,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_organizational_unit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
