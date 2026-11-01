/* eslint-disable */
import { groupOfNamesExt } from "../OrganizationAndGroupSchema/groupOfNamesExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";

/**
 * @summary groupOfNamesExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfNamesExtNameForm NAME-FORM ::= {
 *     NAMES                groupOfNamesExt
 *     WITH ATTRIBUTES        gONNameForm.&MandatoryAttributes -- commonName
 *     LDAP-NAME            {"groupOfNamesExtNameForm"}
 *     ID                    id-nf-groupOfNamesExtNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const groupOfNamesExtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": groupOfNamesExt /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupOfNamesExtNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_groupOfNamesExtNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
