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
import { mHSGivenName } from '../MHSRoutingORAddressSubtree/mHSGivenName.oa.mjs';
import { mHSGivenNameAttribute } from '../MHSRoutingORAddressSubtree/mHSGivenNameAttribute.oa.mjs';
import { id_nf_mhs_given_name } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-given-name.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSGivenNameNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSGivenNameNameForm NAME-FORM ::= {
 *   NAMES            mHSGivenName
 *   WITH ATTRIBUTES  {mHSGivenNameAttribute}
 *   ID               id-nf-mhs-given-name
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSGivenNameNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSGivenName /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSGivenNameAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_given_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
