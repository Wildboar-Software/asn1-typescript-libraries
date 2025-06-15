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
import { mHSPDSName } from '../MHSRoutingORAddressSubtree/mHSPDSName.oa.mjs';
import { mHSPDSNameAttribute } from '../MHSRoutingORAddressSubtree/mHSPDSNameAttribute.oa.mjs';
import { id_nf_mhs_pds_name } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-pds-name.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSPDSNameNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPDSNameNameForm NAME-FORM ::= {
 *   NAMES            mHSPDSName
 *   WITH ATTRIBUTES  {mHSPDSNameAttribute}
 *   ID               id-nf-mhs-pds-name
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSPDSNameNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSPDSName /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSPDSNameAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_pds_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
