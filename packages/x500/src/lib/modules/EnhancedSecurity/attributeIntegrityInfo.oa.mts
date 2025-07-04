/* eslint-disable */
import {
    AttributeIntegrityInfo,
    _decode_AttributeIntegrityInfo,
    _encode_AttributeIntegrityInfo,
} from "../EnhancedSecurity/AttributeIntegrityInfo.ta.mjs";
import { id_at_attributeIntegrityInfo } from "../EnhancedSecurity/id-at-attributeIntegrityInfo.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary attributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeIntegrityInfo ATTRIBUTE ::= {
 *   WITH SYNTAX   AttributeIntegrityInfo
 *   SINGLE VALUE  TRUE
 *   ID            id-at-attributeIntegrityInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeIntegrityInfo>}
 * @implements {ATTRIBUTE<AttributeIntegrityInfo>}
 */
export const attributeIntegrityInfo: ATTRIBUTE<AttributeIntegrityInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeIntegrityInfo,
    },
    encoderFor: {
        "&Type": _encode_AttributeIntegrityInfo,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeIntegrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
