/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_soa_nameForms } from "../SchemaAdministration/id-soa-nameForms.va.js";
import {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta.js";
import { nameFormDescription } from "../SelectedAttributeTypes/nameFormDescription.oa.js";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
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
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_soa_nameForms } from "../SchemaAdministration/id-soa-nameForms.va.js";
export {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta.js";
export { nameFormDescription } from "../SelectedAttributeTypes/nameFormDescription.oa.js";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION nameForms */
/**
 * @summary nameForms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForms ATTRIBUTE ::= {
 *   WITH SYNTAX              NameFormDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              nameFormDescription.&id
 *   LDAP-NAME                {"nameForms"}
 *   ID                       id-soa-nameForms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<NameFormDescription>}
 * @implements {ATTRIBUTE<NameFormDescription>}
 */
export const nameForms: ATTRIBUTE<NameFormDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameFormDescription,
    },
    encoderFor: {
        "&Type": _encode_NameFormDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameFormDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nameForms"],
    "&id": id_soa_nameForms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameForms */

/* eslint-enable */
