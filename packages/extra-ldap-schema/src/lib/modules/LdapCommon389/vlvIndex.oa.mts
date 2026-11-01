/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vlvIndex } from "../LdapCommon389/id-oc-vlvIndex.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { vlvSort } from "../LdapCommon389/vlvSort.oa.mjs";
import { vlvEnabled } from "../LdapCommon389/vlvEnabled.oa.mjs";
import { vlvUses } from "../LdapCommon389/vlvUses.oa.mjs";


/**
 * @summary vlvIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vlvIndex OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | vlvSort }
 *   MAY CONTAIN               { vlvEnabled
 *                               | vlvUses }
 *   LDAP-NAME                 {"vlvIndex"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-vlvIndex }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vlvIndex: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, vlvSort, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ vlvEnabled, vlvUses, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "vlvIndex" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vlvIndex /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

