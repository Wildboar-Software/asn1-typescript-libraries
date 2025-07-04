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
import { mHSCommonName } from '../MHSRoutingORAddressSubtree/mHSCommonName.oa.mjs';
import { mHSCommonNameAttribute } from '../MHSRoutingORAddressSubtree/mHSCommonNameAttribute.oa.mjs';
import { id_nf_mhs_common_name } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-common-name.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSCommonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSCommonNameForm NAME-FORM ::= {
 *   NAMES            mHSCommonName
 *   WITH ATTRIBUTES  {mHSCommonNameAttribute}
 *   ID               id-nf-mhs-common-name
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSCommonNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSCommonName /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSCommonNameAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_common_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
