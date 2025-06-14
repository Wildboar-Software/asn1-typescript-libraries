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
import { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa.mjs';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
import { mkmDirectoryNameForm } from '../MKMD/mkmDirectoryNameForm.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/* START_OF_SYMBOL_DEFINITION registeredInformationNameForm */
/**
 * @summary registeredInformationNameForm
 * @description
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
    '&id': new _OID(
        [1],
        mkmDirectoryNameForm
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION registeredInformationNameForm */

/* eslint-enable */
