/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxLiteralNode } from "../LdapOx/id-oc-oxLiteralNode.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { literalBinaryValue } from "./literalBinaryValue.oa.mjs";
import { literalValue } from "./literalValue.oa.mjs";
import { organizationalOwner } from "./organizationalOwner.oa.mjs";
import { targetRelationalXdiStatement } from "./targetRelationalXdiStatement.oa.mjs";
import { x } from "./x.oa.mjs";
import { xdiStatement } from "./xdiStatement.oa.mjs";
import { xri } from "./xri.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [literalBinaryValue, literalValue, organizationalOwner, owner, targetRelationalXdiStatement, x, xdiStatement, xri] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxLiteralNode"],
    "&id": id_oc_oxLiteralNode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
