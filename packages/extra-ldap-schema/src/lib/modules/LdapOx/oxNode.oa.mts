/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxNode } from "../LdapOx/id-oc-oxNode.va.mjs";
import { organizationalOwner } from "../LdapOx/organizationalOwner.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { sourceRelationalXdiStatement } from "../LdapOx/sourceRelationalXdiStatement.oa.mjs";
import { targetRelationalXdiStatement } from "../LdapOx/targetRelationalXdiStatement.oa.mjs";
import { x } from "../LdapOx/x.oa.mjs";
import { xdiStatement } from "../LdapOx/xdiStatement.oa.mjs";
import { xri } from "../LdapOx/xri.oa.mjs";
// export { id_oc_oxNode } from "../LdapOx/id-oc-oxNode.va.mjs";


/**
 * @summary oxNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxNode OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalOwner
 *                               | owner
 *                               | sourceRelationalXdiStatement
 *                               | targetRelationalXdiStatement
 *                               | x
 *                               | xdiStatement
 *                               | xri }
 *   LDAP-NAME                 {"oxNode"}
 *   ID                        id-oc-oxNode }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxNode: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalOwner, owner, sourceRelationalXdiStatement, targetRelationalXdiStatement, x, xdiStatement, xri, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxNode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxNode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
