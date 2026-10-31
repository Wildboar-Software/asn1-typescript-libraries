/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxUmaResource } from "../LdapOx/id-oc-oxUmaResource.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAssociatedClient } from "./oxAssociatedClient.oa.mjs";
import { oxAuthUmaScope } from "./oxAuthUmaScope.oa.mjs";
import { oxFaviconImage } from "./oxFaviconImage.oa.mjs";
import { oxGroup } from "./oxGroup.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxResource } from "./oxResource.oa.mjs";
import { oxRevision } from "./oxRevision.oa.mjs";
import { oxScopeExpression } from "./oxScopeExpression.oa.mjs";
import { oxType } from "./oxType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [displayName, inum, owner, oxAssociatedClient, oxAuthUmaScope, oxFaviconImage, oxGroup, oxId, oxResource, oxRevision, oxType, oxScopeExpression, iat, exp, del, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxUmaResource"],
    "&id": id_oc_oxUmaResource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
