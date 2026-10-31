/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxNode } from "../LdapOx/id-oc-oxNode.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { organizationalOwner } from "./organizationalOwner.oa.mjs";
import { sourceRelationalXdiStatement } from "./sourceRelationalXdiStatement.oa.mjs";
import { targetRelationalXdiStatement } from "./targetRelationalXdiStatement.oa.mjs";
import { x } from "./x.oa.mjs";
import { xdiStatement } from "./xdiStatement.oa.mjs";
import { xri } from "./xri.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalOwner, owner, sourceRelationalXdiStatement, targetRelationalXdiStatement, x, xdiStatement, xri] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxNode"],
    "&id": id_oc_oxNode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
