/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { mailGroup } from "../InetMailSchema/mailGroup.oa.mjs";
// export { mailGroup } from "../InetMailSchema/mailGroup.oa.mjs";
import { soniaMailGroupUid } from "../Ldapmigration97sonia/soniaMailGroupUid.oa.mjs";
// export { soniaMailGroupUid } from "../Ldapmigration97sonia/soniaMailGroupUid.oa.mjs";
import { id_oc_soniaMailGroup } from "../Ldapmigration97sonia/id-oc-soniaMailGroup.va.mjs";
import { soniaMailGroupStatus } from "../Ldapmigration97sonia/soniaMailGroupStatus.oa.mjs";
import { soniaMailGroupSubscribeType } from "../Ldapmigration97sonia/soniaMailGroupSubscribeType.oa.mjs";
// export { id_oc_soniaMailGroup } from "../Ldapmigration97sonia/id-oc-soniaMailGroup.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ mailGroup, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ soniaMailGroupUid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaMailGroupStatus, soniaMailGroupSubscribeType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaMailGroup" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaMailGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
