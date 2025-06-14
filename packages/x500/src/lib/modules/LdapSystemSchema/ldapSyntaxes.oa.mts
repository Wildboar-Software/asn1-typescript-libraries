/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_ldapSyntaxes } from "../LdapSystemSchema/id-soa-ldapSyntaxes.va.mjs";
import {
    LdapSyntaxDescription,
    _decode_LdapSyntaxDescription,
    _encode_LdapSyntaxDescription,
} from "../LdapSystemSchema/LdapSyntaxDescription.ta.mjs";
import { ldapSyntaxDescription } from "../SelectedAttributeTypes/ldapSyntaxDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/* START_OF_SYMBOL_DEFINITION ldapSyntaxes */
/**
 * @summary ldapSyntaxes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxes ATTRIBUTE ::= {
 *   WITH SYNTAX              LdapSyntaxDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              ldapSyntaxDescription.&id
 *   LDAP-NAME                {"ldapSyntax"}
 *   ID                       id-soa-ldapSyntaxes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<LdapSyntaxDescription>}
 * @implements {ATTRIBUTE<LdapSyntaxDescription>}
 */
export const ldapSyntaxes: ATTRIBUTE<LdapSyntaxDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_LdapSyntaxDescription,
    },
    encoderFor: {
        "&Type": _encode_LdapSyntaxDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ldapSyntaxDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ldapSyntax"],
    "&id": id_soa_ldapSyntaxes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapSyntaxes */

/* eslint-enable */
