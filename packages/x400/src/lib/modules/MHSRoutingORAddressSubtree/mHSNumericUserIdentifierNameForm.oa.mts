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
import { mHSNumericUserIdentifier } from '../MHSRoutingORAddressSubtree/mHSNumericUserIdentifier.oa.mjs';
import { mHSNumericUserIdentifierAttribute } from '../MHSRoutingORAddressSubtree/mHSNumericUserIdentifierAttribute.oa.mjs';
import { id_nf_mhs_numeric_user_identifier } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-numeric-user-identifier.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSNumericUserIdentifierNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSNumericUserIdentifierNameForm NAME-FORM ::= {
 *   NAMES            mHSNumericUserIdentifier
 *   WITH ATTRIBUTES  {mHSNumericUserIdentifierAttribute}
 *   ID               id-nf-mhs-numeric-user-identifier
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSNumericUserIdentifierNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSNumericUserIdentifier /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSNumericUserIdentifierAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_numeric_user_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
