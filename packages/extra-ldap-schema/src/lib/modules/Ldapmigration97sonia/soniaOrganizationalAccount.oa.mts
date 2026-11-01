/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_soniaOrganizationalAccount } from "../Ldapmigration97sonia/id-oc-soniaOrganizationalAccount.va.mjs";
import { soniaDepartment } from "../Ldapmigration97sonia/soniaDepartment.oa.mjs";
import { soniaInstitute } from "../Ldapmigration97sonia/soniaInstitute.oa.mjs";
import { soniaEducationalDepartment } from "../Ldapmigration97sonia/soniaEducationalDepartment.oa.mjs";
import { soniaCampus } from "../Ldapmigration97sonia/soniaCampus.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";


/**
 * @summary soniaOrganizationalAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaOrganizationalAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { soniaDepartment
 *                               | soniaInstitute
 *                               | soniaEducationalDepartment
 *                               | soniaCampus
 *                               | localityName }
 *   LDAP-NAME                 {"soniaOrganizationalAccount"}
 *   ID                        id-oc-soniaOrganizationalAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaOrganizationalAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaDepartment, soniaInstitute, soniaEducationalDepartment, soniaCampus, localityName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaOrganizationalAccount" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaOrganizationalAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

