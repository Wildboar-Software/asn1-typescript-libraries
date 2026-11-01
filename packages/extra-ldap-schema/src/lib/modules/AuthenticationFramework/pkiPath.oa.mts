/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type PkiPath, _decode_PkiPath, _encode_PkiPath } from "../AuthenticationFramework/PkiPath.ta.mjs";
// export { PkiPath, _decode_PkiPath, _encode_PkiPath } from "../AuthenticationFramework/PkiPath.ta.mjs";
import { id_at_pkiPath } from "../AuthenticationFramework/id-at-pkiPath.va.mjs";
// export { id_at_pkiPath } from "../AuthenticationFramework/id-at-pkiPath.va.mjs";


/**
 * @summary pkiPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiPath ATTRIBUTE ::= {
 *   WITH SYNTAX              PkiPath
 *   EQUALITY MATCHING RULE   pkiPathMatch
 *   ID                       id-at-pkiPath }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PkiPath>}
 * @implements {ATTRIBUTE<PkiPath>}
 */
export
const pkiPath: ATTRIBUTE<PkiPath> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PkiPath,
    },
    encoderFor: {
        "&Type": _encode_PkiPath,
    },
    "&equality-match": pkiPathMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_pkiPath /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
