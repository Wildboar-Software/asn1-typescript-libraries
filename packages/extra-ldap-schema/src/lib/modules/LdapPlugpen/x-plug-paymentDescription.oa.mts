/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_at_x_plug_paymentDescription } from "../LdapPlugpen/id-at-x-plug-paymentDescription.va.mjs";

/**
 * @summary x_plug_paymentDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-plug-paymentDescription ATTRIBUTE ::= {
 *   SUBTYPE OF                description
 *   LDAP-NAME                 {"x-plug-paymentDescription"}
 *   LDAP-DESC                 "Payment Description"
 *   ID                        id-at-x-plug-paymentDescription }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const x_plug_paymentDescription: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": description /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "x-plug-paymentDescription" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Payment Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_x_plug_paymentDescription /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
