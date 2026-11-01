/* eslint-disable */
import { organizationalUnitExt } from "../OrganizationAndGroupSchema/organizationalUnitExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";

/**
 * @summary organizationalUnitExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalUnitExtNameForm NAME-FORM ::= {
 *     NAMES                organizationalUnitExt
 *     WITH ATTRIBUTES        orgUnitNameForm.&MandatoryAttributes -- organizationalUnitName
 *     LDAP-NAME            {"organizationalUnitExtNameForm"}
 *     ID                    id-nf-organizationalUnitExtNameFo
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const organizationalUnitExtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": organizationalUnitExt /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "organizationalUnitExtNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_organizationalUnitExtNameFo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
