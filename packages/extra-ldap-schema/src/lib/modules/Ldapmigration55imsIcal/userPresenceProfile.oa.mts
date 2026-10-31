/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { vacationenddate } from "../Ldapmigration50nsMail/vacationenddate.oa.mjs";
import { vacationstartdate } from "../Ldapmigration50nsMail/vacationstartdate.oa.mjs";
import { id_oc_userPresenceProfile } from "../Ldapmigration55imsIcal/id-oc-userPresenceProfile.va.mjs";

/**
 * @summary userPresenceProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userPresenceProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { vacationstartdate
 *                               | vacationenddate }
 *   LDAP-NAME                 {"userPresenceProfile"}
 *   LDAP-DESC                 "auxiliary class for vacation start end dates"
 *   ID                        id-oc-userPresenceProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const userPresenceProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [vacationstartdate, vacationenddate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userPresenceProfile"],
    "&ldapDesc": "auxiliary class for vacation start end dates" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_userPresenceProfile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
