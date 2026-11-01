/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxUmaResource } from "../LdapOx/id-oc-oxUmaResource.va.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { oxAssociatedClient } from "../LdapOx/oxAssociatedClient.oa.mjs";
import { oxAuthUmaScope } from "../LdapOx/oxAuthUmaScope.oa.mjs";
import { oxFaviconImage } from "../LdapOx/oxFaviconImage.oa.mjs";
import { oxGroup } from "../LdapOx/oxGroup.oa.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { oxResource } from "../LdapOx/oxResource.oa.mjs";
import { oxRevision } from "../LdapOx/oxRevision.oa.mjs";
import { oxType } from "../LdapOx/oxType.oa.mjs";
import { oxScopeExpression } from "../LdapOx/oxScopeExpression.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_oxUmaResource } from "../LdapOx/id-oc-oxUmaResource.va.mjs";


/**
 * @summary oxUmaResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxUmaResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { displayName
 *                               | inum
 *                               | owner
 *                               | oxAssociatedClient
 *                               | oxAuthUmaScope
 *                               | oxFaviconImage
 *                               | oxGroup
 *                               | oxId
 *                               | oxResource
 *                               | oxRevision
 *                               | oxType
 *                               | oxScopeExpression
 *                               | iat
 *                               | exp
 *                               | del
 *                               | description }
 *   LDAP-NAME                 {"oxUmaResource"}
 *   ID                        id-oc-oxUmaResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxUmaResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, inum, owner, oxAssociatedClient, oxAuthUmaScope, oxFaviconImage, oxGroup, oxId, oxResource, oxRevision, oxType, oxScopeExpression, iat, exp, del, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxUmaResource" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxUmaResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
