/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunPresenceUser } from "../Ldapmigration65im/id-oc-sunPresenceUser.va.mjs";
import { sunPresenceAccessDenied } from "./sunPresenceAccessDenied.oa.mjs";
import { sunPresenceAccessPermitted } from "./sunPresenceAccessPermitted.oa.mjs";
import { sunPresenceDefaultAccess } from "./sunPresenceDefaultAccess.oa.mjs";
import { sunPresenceDevices } from "./sunPresenceDevices.oa.mjs";
import { sunPresenceEntityAccessDenied } from "./sunPresenceEntityAccessDenied.oa.mjs";
import { sunPresenceEntityAccessPermitted } from "./sunPresenceEntityAccessPermitted.oa.mjs";
import { sunPresenceEntityDefaultAccess } from "./sunPresenceEntityDefaultAccess.oa.mjs";
import { sunPresenceEntityDevices } from "./sunPresenceEntityDevices.oa.mjs";
import { sunPresencePrivacy } from "./sunPresencePrivacy.oa.mjs";
import { sunPresenceUserPrivacy } from "./sunPresenceUserPrivacy.oa.mjs";

/**
 * @summary sunPresenceUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunPresenceUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunPresenceUserPrivacy
 *                               | sunPresenceEntityDefaultAccess
 *                               | sunPresenceEntityAccessDenied
 *                               | sunPresenceEntityAccessPermitted
 *                               | sunPresenceEntityDevices
 *                               | sunPresencePrivacy
 *                               | sunPresenceDefaultAccess
 *                               | sunPresenceAccessDenied
 *                               | sunPresenceAccessPermitted
 *                               | sunPresenceDevices }
 *   LDAP-NAME                 {"sunPresenceUser"}
 *   LDAP-DESC                 "Presence Service User"
 *   ID                        id-oc-sunPresenceUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunPresenceUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunPresenceUserPrivacy, sunPresenceEntityDefaultAccess, sunPresenceEntityAccessDenied, sunPresenceEntityAccessPermitted, sunPresenceEntityDevices, sunPresencePrivacy, sunPresenceDefaultAccess, sunPresenceAccessDenied, sunPresenceAccessPermitted, sunPresenceDevices] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunPresenceUser"],
    "&ldapDesc": "Presence Service User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunPresenceUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
