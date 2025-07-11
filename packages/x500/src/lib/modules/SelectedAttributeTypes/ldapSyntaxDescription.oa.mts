/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_ldapSyntaxDescription } from "../SelectedAttributeTypes/id-lsx-ldapSyntaxDescription.va.mjs";
/**
 * @summary ldapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "LDAP Syntax Description"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-ldapSyntaxDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const ldapSyntaxDescription: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "LDAP Syntax Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ldapSyntaxDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
