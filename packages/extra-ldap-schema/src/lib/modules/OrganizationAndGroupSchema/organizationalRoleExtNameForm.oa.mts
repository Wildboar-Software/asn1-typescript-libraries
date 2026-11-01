/* eslint-disable */
import { organizationalRoleExt } from "../OrganizationAndGroupSchema/organizationalRoleExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";

/**
 * @summary organizationalRoleExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalRoleExtNameForm NAME-FORM ::= {
 *     NAMES                organizationalRoleExt
 *     WITH ATTRIBUTES        orgRoleNameForm.&MandatoryAttributes -- commonName
 *     LDAP-NAME            {"organizationalRoleExtNameForm"}
 *     ID                    id-nf-organizationalRoleExtNameFo
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const organizationalRoleExtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": organizationalRoleExt /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "organizationalRoleExtNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_organizationalRoleExtNameFo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
