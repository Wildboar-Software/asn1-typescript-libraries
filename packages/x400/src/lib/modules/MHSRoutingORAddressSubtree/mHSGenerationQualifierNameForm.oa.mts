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
import { mHSGenerationQualifier } from '../MHSRoutingORAddressSubtree/mHSGenerationQualifier.oa.mjs';
import { mHSGenerationQualifierAttribute } from '../MHSRoutingORAddressSubtree/mHSGenerationQualifierAttribute.oa.mjs';
import { id_nf_mhs_generation_qualifier } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-generation-qualifier.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mHSGenerationQualifierNameForm */
/**
 * @summary mHSGenerationQualifierNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSGenerationQualifierNameForm NAME-FORM ::= {
 *   NAMES            mHSGenerationQualifier
 *   WITH ATTRIBUTES  {mHSGenerationQualifierAttribute}
 *   ID               id-nf-mhs-generation-qualifier
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSGenerationQualifierNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSGenerationQualifier /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSGenerationQualifierAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_generation_qualifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mHSGenerationQualifierNameForm */

/* eslint-enable */
