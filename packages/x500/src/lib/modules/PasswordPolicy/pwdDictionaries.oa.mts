/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_pwdDictionaries } from "../PasswordPolicy/id-oa-pwdDictionaries.va.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { uri } from "../SelectedAttributeTypes/uri.oa.mjs";
/**
 * @summary pwdDictionaries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdDictionaries ATTRIBUTE ::= {
 *   SUBTYPE OF               uri
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"pwdDictionaries"}
 *   ID                       id-oa-pwdDictionaries }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdDictionaries: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": uri /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdDictionaries"],
    "&id": id_oa_pwdDictionaries /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
