/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
import { id_oc_vlvSearch } from "../LdapCommon389/id-oc-vlvSearch.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { vlvBase } from "../LdapCommon389/vlvBase.oa.mjs";
import { vlvScope } from "../LdapCommon389/vlvScope.oa.mjs";
import { vlvFilter } from "../LdapCommon389/vlvFilter.oa.mjs";
/**
 * @summary vlvSearch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vlvSearch OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | vlvBase
 *                               | vlvScope
 *                               | vlvFilter }
 *   MAY CONTAIN               { multiLineDescription }
 *   LDAP-NAME                 {"vlvSearch"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-vlvSearch }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vlvSearch: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, vlvBase, vlvScope, vlvFilter, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ multiLineDescription, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "vlvSearch" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vlvSearch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
