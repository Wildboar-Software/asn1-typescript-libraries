/* eslint-disable */
import {
    OCTET_STRING,
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
import { octetStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/octetStringMatch.oa.mjs';
import { id_messageDigest } from '../CmsTelebiometric/id-messageDigest.va.mjs';
/* START_OF_SYMBOL_DEFINITION messageDigest */
/**
 * @summary messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * messageDigest ATTRIBUTE ::= {
 *   WITH SYNTAX            OCTET STRING
 *   EQUALITY MATCHING RULE octetStringMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export const messageDigest: ATTRIBUTE<OCTET_STRING> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeOctetString,
    },
    encoderFor: {
        '&Type': $._encodeOctetString,
    },
    '&equality-match': octetStringMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION messageDigest */

/* eslint-enable */
