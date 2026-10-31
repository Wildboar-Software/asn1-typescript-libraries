/* eslint-disable */
import { mailGroup } from "../InetMailSchema/mailGroup.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_soniaMailGroup } from "../Ldapmigration97sonia/id-oc-soniaMailGroup.va.mjs";
import { soniaMailGroupUid } from "../Ldapmigration97sonia/soniaMailGroupUid.oa.mjs";
import { soniaMailGroupStatus } from "./soniaMailGroupStatus.oa.mjs";
import { soniaMailGroupSubscribeType } from "./soniaMailGroupSubscribeType.oa.mjs";

/**
 * @summary soniaMailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { mailGroup }
 *   MUST CONTAIN              { soniaMailGroupUid }
 *   MAY CONTAIN               { soniaMailGroupStatus
 *                               | soniaMailGroupSubscribeType }
 *   LDAP-NAME                 {"soniaMailGroup"}
 *   ID                        id-oc-soniaMailGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [mailGroup] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [soniaMailGroupUid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaMailGroupStatus, soniaMailGroupSubscribeType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaMailGroup"],
    "&id": id_oc_soniaMailGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
