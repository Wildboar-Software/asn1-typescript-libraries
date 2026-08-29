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
import { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa.mjs';
import { commonName } from '@wildboar/x500/SelectedAttributeTypes';
import { mkmDirectoryNameForm } from '../MKMD/mkmDirectoryNameForm.va.mjs';
import { type NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary registeredInformationNameForm
 * @description
 *
 * Names `registeredInformation` with `commonName` (last OID component).
 * Example DIT structure rules using this name form are in Annex H. ID
 * `{mkmDirectoryNameForm 1}`. ITU-T Rec. X.750 (10/96)
 * [§7.2.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredInformationNameForm NAME-FORM ::= {
 *   NAMES            registeredInformation
 *   WITH ATTRIBUTES  {commonName}
 *   ID               {mkmDirectoryNameForm  1}
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const registeredInformationNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': registeredInformation /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [commonName] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [1],
        mkmDirectoryNameForm
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
