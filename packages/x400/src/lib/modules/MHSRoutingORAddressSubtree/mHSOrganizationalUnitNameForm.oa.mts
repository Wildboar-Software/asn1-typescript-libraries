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
import { mHSOrganizationalUnit } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnit.oa.mjs';
import { mHSOrganizationalUnitName } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnitName.oa.mjs';
import { id_nf_mhs_organizational_unit } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-organizational-unit.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mHSOrganizationalUnitNameForm */
/**
 * @summary mHSOrganizationalUnitNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSOrganizationalUnitNameForm NAME-FORM ::= {
 *   NAMES            mHSOrganizationalUnit
 *   WITH ATTRIBUTES  {mHSOrganizationalUnitName}
 *   ID               id-nf-mhs-organizational-unit
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSOrganizationalUnitNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSOrganizationalUnit /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSOrganizationalUnitName,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_organizational_unit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mHSOrganizationalUnitNameForm */

/* eslint-enable */
