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
import { type OBJECT_CLASS } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/InformationFramework';
import { top } from '@wildboar/x500/InformationFramework';
import { commonName } from '@wildboar/x500/SelectedAttributeTypes';
import { nameForm } from '../DefinitionDirectoryASN1Module/nameForm.oa.mjs';
import { informationStatus } from '../DefinitionDirectoryASN1Module/informationStatus.oa.mjs';
import { additionalInformation } from '../DefinitionDirectoryASN1Module/additionalInformation.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary registeredInformation
 * @description
 *
 * Structural Directory class for an information object that has an
 * object identifier (X.680 OID tree). `commonName` is the last OID
 * arc and is the RDN; the DN of the arcs is the OID (a DIT prefix may
 * be added — Annex H). MAY CONTAIN `nameForm` (symbolic arc name),
 * `informationStatus`, and `additionalInformation`. Auxiliary classes
 * from `registeredManagementInformationCR` add template-specific
 * attributes. ID `{mkmDirectoryObjectClass 3}`. ITU-T Rec. X.750
 * (10/96)
 * [§7.2.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredInformation OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {nameForm | informationStatus | additionalInformation}
 *   ID            {mkmDirectoryObjectClass  3}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const registeredInformation: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [commonName] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        nameForm,
        informationStatus,
        additionalInformation,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [3],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
