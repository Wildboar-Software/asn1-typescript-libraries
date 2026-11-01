/* eslint-disable */
import { groupOfUniqueNamesExt } from "../OrganizationAndGroupSchema/groupOfUniqueNamesExt.oa.mjs";
// export { groupOfUniqueNamesExt } from "../OrganizationAndGroupSchema/groupOfUniqueNamesExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
/**
 * @summary groupOfUniqueNamesExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfUniqueNamesExtNameForm NAME-FORM ::= {
 *     NAMES                groupOfUniqueNamesExt
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"groupOfUniqueNamesExtNameForm"}
 *     ID                    id-nf-groupOfUniqueNamesExtNameFo
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const groupOfUniqueNamesExtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": groupOfUniqueNamesExt /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupOfUniqueNamesExtNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_groupOfUniqueNamesExtNameFo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
