/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_mozillaHomeLocalityName } from "../LdapMozilla/id-at-mozillaHomeLocalityName.va.mjs";


/**
 * @summary mozillaHomeLocalityName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mozillaHomeLocalityName ATTRIBUTE ::= {
 *   LDAP-NAME                 {"mozillaHomeLocalityName", "SINGLE-VALUE"}
 *   ID                        id-at-mozillaHomeLocalityName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const mozillaHomeLocalityName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&ldapName": [ "mozillaHomeLocalityName", "SINGLE-VALUE" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mozillaHomeLocalityName /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

