/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_xAttr } from "../LdapGfarm/id-oc-xAttr.va.mjs";
import { inumber } from "../LdapGfarm/inumber.oa.mjs";
import { attrname } from "../LdapGfarm/attrname.oa.mjs";
import { attrvalue } from "../LdapGfarm/attrvalue.oa.mjs";


/**
 * @summary xAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * xAttr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | attrname
 *                               | attrvalue }
 *   LDAP-NAME                 {"XAttr"}
 *   ID                        id-oc-xAttr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const xAttr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ inumber, attrname, attrvalue, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "XAttr" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_xAttr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

