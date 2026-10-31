/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxUmaResourcePermission } from "../LdapOx/id-oc-oxUmaResourcePermission.va.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxAttributes } from "./oxAttributes.oa.mjs";
import { oxAuthUmaScope } from "./oxAuthUmaScope.oa.mjs";
import { oxConfigurationCode } from "./oxConfigurationCode.oa.mjs";
import { oxResourceSetId } from "./oxResourceSetId.oa.mjs";
import { oxStatus } from "./oxStatus.oa.mjs";
import { oxTicket } from "./oxTicket.oa.mjs";

/**
 * @summary oxUmaResourcePermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxUmaResourcePermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { exp
 *                               | del
 *                               | oxAuthUmaScope
 *                               | oxConfigurationCode
 *                               | oxResourceSetId
 *                               | oxAttributes
 *                               | oxTicket
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxUmaResourcePermission"}
 *   ID                        id-oc-oxUmaResourcePermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxUmaResourcePermission: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [exp, del, oxAuthUmaScope, oxConfigurationCode, oxResourceSetId, oxAttributes, oxTicket, oxStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxUmaResourcePermission"],
    "&id": id_oc_oxUmaResourcePermission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
