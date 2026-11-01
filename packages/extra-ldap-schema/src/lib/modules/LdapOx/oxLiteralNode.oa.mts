/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxLiteralNode } from "../LdapOx/id-oc-oxLiteralNode.va.mjs";

import { literalBinaryValue } from "../LdapOx/literalBinaryValue.oa.mjs";
import { literalValue } from "../LdapOx/literalValue.oa.mjs";
import { organizationalOwner } from "../LdapOx/organizationalOwner.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { targetRelationalXdiStatement } from "../LdapOx/targetRelationalXdiStatement.oa.mjs";
import { x } from "../LdapOx/x.oa.mjs";
import { xdiStatement } from "../LdapOx/xdiStatement.oa.mjs";
import { xri } from "../LdapOx/xri.oa.mjs";
/**
 * @summary oxLiteralNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxLiteralNode OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { literalBinaryValue
 *                               | literalValue
 *                               | organizationalOwner
 *                               | owner
 *                               | targetRelationalXdiStatement
 *                               | x
 *                               | xdiStatement
 *                               | xri }
 *   LDAP-NAME                 {"oxLiteralNode"}
 *   ID                        id-oc-oxLiteralNode }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxLiteralNode: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ literalBinaryValue, literalValue, organizationalOwner, owner, targetRelationalXdiStatement, x, xdiStatement, xri, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxLiteralNode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxLiteralNode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
