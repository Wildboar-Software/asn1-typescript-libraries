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
import { mHSInitials } from '../MHSRoutingORAddressSubtree/mHSInitials.oa.mjs';
import { mHSInitialsAttribute } from '../MHSRoutingORAddressSubtree/mHSInitialsAttribute.oa.mjs';
import { id_nf_mhs_initials } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-initials.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mHSInitialsNameForm */
/**
 * @summary mHSInitialsNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSInitialsNameForm NAME-FORM ::= {
 *   NAMES            mHSInitials
 *   WITH ATTRIBUTES  {mHSInitialsAttribute}
 *   ID               id-nf-mhs-initials
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSInitialsNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSInitials /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSInitialsAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_initials /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mHSInitialsNameForm */

/* eslint-enable */
