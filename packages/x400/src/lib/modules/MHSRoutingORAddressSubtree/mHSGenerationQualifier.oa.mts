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
import { mHSGenerationQualifierAttribute } from '../MHSRoutingORAddressSubtree/mHSGenerationQualifierAttribute.oa.mjs';
import { id_oc_mhs_generation_qualifier } from '../MHSRoutingObjectIdentifiers/id-oc-mhs-generation-qualifier.va.mjs';
/**
 * @summary mHSGenerationQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSGenerationQualifier OBJECT-CLASS ::= {
 *   SUBCLASS OF   {oRAddressElement}
 *   KIND          structural
 *   MUST CONTAIN  {mHSGenerationQualifierAttribute}
 *   ID            id-oc-mhs-generation-qualifier
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mHSGenerationQualifier: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [oRAddressElement] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSGenerationQualifierAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_generation_qualifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
