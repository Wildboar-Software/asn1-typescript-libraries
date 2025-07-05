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
import { mHSADMD } from '../MHSRoutingORAddressSubtree/mHSADMD.oa.mjs';
import { mHSADMDName } from '../MHSRoutingORAddressSubtree/mHSADMDName.oa.mjs';
import { id_nf_mhs_admd } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-admd.va.mjs';
import { type NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSADMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSADMDNameForm NAME-FORM ::= {
 *   NAMES            mHSADMD
 *   WITH ATTRIBUTES  {mHSADMDName}
 *   ID               id-nf-mhs-admd
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSADMDNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSADMD /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSADMDName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_admd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
