/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_nameForms } from "../SchemaAdministration/id-soa-nameForms.va.mjs";
import {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta.mjs";
import { nameFormDescription } from "../SelectedAttributeTypes/nameFormDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
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

/* eslint-enable */
