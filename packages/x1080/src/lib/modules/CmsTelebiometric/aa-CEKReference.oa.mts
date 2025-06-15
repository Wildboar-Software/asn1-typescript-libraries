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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    CEKReference,
    _decode_CEKReference,
    _encode_CEKReference,
} from '../CmsTelebiometric/CEKReference.ta.mjs';
import { octetStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/octetStringMatch.oa.mjs';
import { id_aa_CEKReference } from '../CmsTelebiometric/id-aa-CEKReference.va.mjs';
/* START_OF_SYMBOL_DEFINITION aa_CEKReference */
/**
 * @summary aa_CEKReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-CEKReference ATTRIBUTE ::= {
 *   WITH SYNTAX            CEKReference
 *   EQUALITY MATCHING RULE octetStringMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-aa-CEKReference }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CEKReference>}
 * @implements {ATTRIBUTE<CEKReference>}
 */
export const aa_CEKReference: ATTRIBUTE<CEKReference> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CEKReference,
    },
    encoderFor: {
        '&Type': _encode_CEKReference,
    },
    '&equality-match': octetStringMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_aa_CEKReference /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_CEKReference */

/* eslint-enable */
