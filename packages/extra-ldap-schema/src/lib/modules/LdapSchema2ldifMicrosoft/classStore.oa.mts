/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_classStore } from "../LdapSchema2ldifMicrosoft/id-oc-classStore.va.mjs";
import { appSchemaVersion } from "../MSUser/appSchemaVersion.oa.mjs";
import { lastUpdateSequence } from "../MSUser/lastUpdateSequence.oa.mjs";
import { nextLevelStore } from "../MSUser/nextLevelStore.oa.mjs";
import { versionNumber } from "../MSUser/versionNumber.oa.mjs";

/**
 * @summary classStore
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classStore OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { versionNumber
 *                               | nextLevelStore
 *                               | lastUpdateSequence
 *                               | appSchemaVersion }
 *   LDAP-NAME                 {"classStore"}
 *   ID                        id-oc-classStore }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classStore: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [versionNumber, nextLevelStore, lastUpdateSequence, appSchemaVersion] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["classStore"],
    "&id": id_oc_classStore /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
