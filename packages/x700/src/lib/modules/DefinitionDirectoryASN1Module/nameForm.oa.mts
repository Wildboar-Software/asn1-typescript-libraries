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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import { caseExactMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseExactMatch.oa.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary nameForm
 * @description
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
    '&id': new _OID(
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
