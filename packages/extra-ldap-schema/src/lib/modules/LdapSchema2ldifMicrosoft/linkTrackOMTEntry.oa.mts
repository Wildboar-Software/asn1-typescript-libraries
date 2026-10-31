/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_linkTrackOMTEntry } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackOMTEntry.va.mjs";
import { birthLocation } from "../MSUser/birthLocation.oa.mjs";
import { currentLocation } from "../MSUser/currentLocation.oa.mjs";
import { oMTGuid } from "../MSUser/oMTGuid.oa.mjs";
import { oMTIndxGuid } from "../MSUser/oMTIndxGuid.oa.mjs";
import { timeRefresh } from "../MSUser/timeRefresh.oa.mjs";

/**
 * @summary linkTrackOMTEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * linkTrackOMTEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { birthLocation
 *                               | oMTIndxGuid
 *                               | currentLocation
 *                               | timeRefresh
 *                               | oMTGuid }
 *   LDAP-NAME                 {"linkTrackOMTEntry"}
 *   ID                        id-oc-linkTrackOMTEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const linkTrackOMTEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [leaf] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [birthLocation, oMTIndxGuid, currentLocation, timeRefresh, oMTGuid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["linkTrackOMTEntry"],
    "&id": id_oc_linkTrackOMTEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
