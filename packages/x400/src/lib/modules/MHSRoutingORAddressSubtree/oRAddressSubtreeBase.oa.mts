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
import { commonName } from '@wildboar/x500/SelectedAttributeTypes';
import { id_oc_oraddress_subtree_base } from '../MHSRoutingObjectIdentifiers/id-oc-oraddress-subtree-base.va.mjs';
/**
 * @summary oRAddressSubtreeBase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRAddressSubtreeBase OBJECT-CLASS ::= {
 *   SUBCLASS OF   {oRAddressElement}
 *   KIND          structural
 *   MUST CONTAIN  {commonName}
 *   ID            id-oc-oraddress-subtree-base
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oRAddressSubtreeBase: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [oRAddressElement] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [commonName] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_oraddress_subtree_base /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
