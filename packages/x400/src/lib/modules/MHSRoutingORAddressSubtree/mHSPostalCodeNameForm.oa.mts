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
import { mHSPostalCode } from '../MHSRoutingORAddressSubtree/mHSPostalCode.oa.mjs';
import { mHSPostalCodeAttribute } from '../MHSRoutingORAddressSubtree/mHSPostalCodeAttribute.oa.mjs';
import { id_nf_mhs_postal_code } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-postal-code.va.mjs';
import { NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSPostalCodeNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPostalCodeNameForm NAME-FORM ::= {
 *   NAMES            mHSPostalCode
 *   WITH ATTRIBUTES  {mHSPostalCodeAttribute}
 *   ID               id-nf-mhs-postal-code
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSPostalCodeNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSPostalCode /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSPostalCodeAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_postal_code /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
