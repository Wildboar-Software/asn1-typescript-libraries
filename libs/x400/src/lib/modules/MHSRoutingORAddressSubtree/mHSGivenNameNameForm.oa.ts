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
import * as $ from 'asn1-ts/dist/node/functional';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { mHSGivenName } from '../MHSRoutingORAddressSubtree/mHSGivenName.oa';
export { mHSGivenName } from '../MHSRoutingORAddressSubtree/mHSGivenName.oa';
import { mHSGivenNameAttribute } from '../MHSRoutingORAddressSubtree/mHSGivenNameAttribute.oa';
export { mHSGivenNameAttribute } from '../MHSRoutingORAddressSubtree/mHSGivenNameAttribute.oa';
import { id_nf_mhs_given_name } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-given-name.va';
export { id_nf_mhs_given_name } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-given-name.va';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca';
export { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca';

/* START_OF_SYMBOL_DEFINITION mHSGivenNameNameForm */
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
/* END_OF_SYMBOL_DEFINITION mHSGivenNameNameForm */

/* eslint-enable */
