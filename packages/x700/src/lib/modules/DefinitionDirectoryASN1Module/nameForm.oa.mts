/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import { caseExactMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary nameForm
 * @description
 *
 * Symbolic name of the numeric OID arc stored in `commonName` of a
 * Registered information entry. ID `{mkmDirectoryAttributeType 30}`.
 * ITU-T Rec. X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I), Table 17,
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForm ATTRIBUTE ::= {
 *   WITH SYNTAX             PrintableString
 *   EQUALITY MATCHING RULE  caseExactMatch
 *   SINGLE VALUE            TRUE
 *   ID                      {mkmDirectoryAttributeType  30}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const nameForm: ATTRIBUTE<PrintableString> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodePrintableString,
    },
    encoderFor: {
        '&Type': $._encodePrintableString,
    },
    '&equality-match': caseExactMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [30],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
