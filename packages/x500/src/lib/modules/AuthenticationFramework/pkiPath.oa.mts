/* eslint-disable */
import { id_at_pkiPath } from "../AuthenticationFramework/id-at-pkiPath.va.mjs";
import {
    PkiPath,
    _decode_PkiPath,
    _encode_PkiPath,
} from "../AuthenticationFramework/PkiPath.ta.mjs";
import { pkiPathMatch } from "../CertificateExtensions/pkiPathMatch.oa.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { id_at_pkiPath } from "../AuthenticationFramework/id-at-pkiPath.va.mjs";
export {
    PkiPath,
    _decode_PkiPath,
    _encode_PkiPath,
} from "../AuthenticationFramework/PkiPath.ta.mjs";
export { pkiPathMatch } from "../CertificateExtensions/pkiPathMatch.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";

/* START_OF_SYMBOL_DEFINITION pkiPath */
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
export const pkiPath: ATTRIBUTE<PkiPath> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PkiPath,
    },
    encoderFor: {
        "&Type": _encode_PkiPath,
    },
    "&equality-match": pkiPathMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_pkiPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiPath */

/* eslint-enable */
