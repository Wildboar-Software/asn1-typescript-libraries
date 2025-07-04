/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_tagLocation } from "../SelectedAttributeTypes/id-at-tagLocation.va.mjs";
import { utmCoordinates } from "../SelectedAttributeTypes/utmCoordinates.oa.mjs";
import { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa.mjs";
/**
 * @summary tagLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagLocation ATTRIBUTE ::= {
 *   SUBTYPE OF               utmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"tagLocation"}
 *   ID                       id-at-tagLocation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagLocation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": utmCoordinates /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tagLocation"],
    "&id": id_at_tagLocation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
