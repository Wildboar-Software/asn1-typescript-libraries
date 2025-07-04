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
import { mHSSurname } from '../MHSRoutingORAddressSubtree/mHSSurname.oa.mjs';
import { mHSSurnameAttribute } from '../MHSRoutingORAddressSubtree/mHSSurnameAttribute.oa.mjs';
import { id_nf_mhs_surname } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-surname.va.mjs';
import { NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSSurnameNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSSurnameNameForm NAME-FORM ::= {
 *   NAMES            mHSSurname
 *   WITH ATTRIBUTES  {mHSSurnameAttribute}
 *   ID               id-nf-mhs-surname
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSSurnameNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSSurname /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mHSSurnameAttribute] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_surname /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
