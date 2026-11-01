/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_attributeSyntax } from "../MSUser/id-at-attributeSyntax.va.mjs";


/**
 * @summary attributeSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeSyntax ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"attributeSyntax"}
 *   ID                        id-at-attributeSyntax }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const attributeSyntax: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "attributeSyntax" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeSyntax /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

