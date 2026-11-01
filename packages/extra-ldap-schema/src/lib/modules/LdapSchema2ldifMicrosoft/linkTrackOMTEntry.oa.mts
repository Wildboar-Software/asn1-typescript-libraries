/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_linkTrackOMTEntry } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackOMTEntry.va.mjs";
import { birthLocation } from "../MSUser/birthLocation.oa.mjs";
import { oMTIndxGuid } from "../MSUser/oMTIndxGuid.oa.mjs";
import { currentLocation } from "../MSUser/currentLocation.oa.mjs";
import { timeRefresh } from "../MSUser/timeRefresh.oa.mjs";
import { oMTGuid } from "../MSUser/oMTGuid.oa.mjs";
// export { id_oc_linkTrackOMTEntry } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackOMTEntry.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ birthLocation, oMTIndxGuid, currentLocation, timeRefresh, oMTGuid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "linkTrackOMTEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_linkTrackOMTEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
