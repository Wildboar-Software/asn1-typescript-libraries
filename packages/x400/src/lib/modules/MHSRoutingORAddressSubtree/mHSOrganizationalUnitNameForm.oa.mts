/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import { mHSOrganizationalUnit } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnit.oa.mjs';
export { mHSOrganizationalUnit } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnit.oa.mjs';
import { mHSOrganizationalUnitName } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnitName.oa.mjs';
export { mHSOrganizationalUnitName } from '../MHSRoutingORAddressSubtree/mHSOrganizationalUnitName.oa.mjs';
import { id_nf_mhs_organizational_unit } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-organizational-unit.va.mjs';
export { id_nf_mhs_organizational_unit } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-organizational-unit.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
export { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';

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
