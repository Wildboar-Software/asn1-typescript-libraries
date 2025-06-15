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
import { mHSPRMD } from '../MHSRoutingORAddressSubtree/mHSPRMD.oa.mjs';
import { mHSPRMDName } from '../MHSRoutingORAddressSubtree/mHSPRMDName.oa.mjs';
import { id_nf_mhs_prmd } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-prmd.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSPRMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPRMDNameForm NAME-FORM ::= {
 *   NAMES            mHSPRMD
 *   WITH ATTRIBUTES  {mHSPRMDName}
 *   ID               id-nf-mhs-prmd
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSPRMDNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSPRMD /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSPRMDName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_prmd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
