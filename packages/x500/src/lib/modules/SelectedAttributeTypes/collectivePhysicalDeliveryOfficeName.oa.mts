/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_collectivePhysicalDeliveryOfficeName } from "../SelectedAttributeTypes/id-at-collectivePhysicalDeliveryOfficeName.va.mjs";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.mjs";
/**
 * @summary collectivePhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePhysicalDeliveryOfficeName ATTRIBUTE ::= {
 *   SUBTYPE OF               physicalDeliveryOfficeName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-PhysicalDeliveryOfficeName"}
 *   ID                       id-at-collectivePhysicalDeliveryOfficeName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePhysicalDeliveryOfficeName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": physicalDeliveryOfficeName /* OBJECT_FIELD_SETTING */,
    "&collective": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["c-PhysicalDeliveryOfficeName"],
    "&id": id_at_collectivePhysicalDeliveryOfficeName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
