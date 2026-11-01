/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_apple_neighborhood } from "../LdapSchema2ldifApple/id-oc-apple-neighborhood.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { apple_generateduid } from "../LdapSchema2ldifApple/apple-generateduid.oa.mjs";
import { apple_category } from "../LdapSchema2ldifApple/apple-category.oa.mjs";
import { apple_nodepathxml } from "../LdapSchema2ldifApple/apple-nodepathxml.oa.mjs";
import { apple_neighborhoodalias } from "../LdapSchema2ldifApple/apple-neighborhoodalias.oa.mjs";
import { apple_computeralias } from "../LdapSchema2ldifApple/apple-computeralias.oa.mjs";
import { apple_keyword } from "../LdapSchema2ldifApple/apple-keyword.oa.mjs";
import { apple_realname } from "../LdapSchema2ldifApple/apple-realname.oa.mjs";
import { apple_xmlplist } from "../LdapSchema2ldifApple/apple-xmlplist.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
/**
 * @summary apple_neighborhood
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-neighborhood OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | apple-generateduid
 *                               | apple-category
 *                               | apple-nodepathxml
 *                               | apple-neighborhoodalias
 *                               | apple-computeralias
 *                               | apple-keyword
 *                               | apple-realname
 *                               | apple-xmlplist
 *                               | ttl }
 *   LDAP-NAME                 {"apple-neighborhood"}
 *   ID                        id-oc-apple-neighborhood }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_neighborhood: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, apple_generateduid, apple_category, apple_nodepathxml, apple_neighborhoodalias, apple_computeralias, apple_keyword, apple_realname, apple_xmlplist, ttl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-neighborhood" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_neighborhood /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
