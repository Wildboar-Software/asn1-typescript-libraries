/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { subtreeACI } from "../LdapSubtreeAci/subtreeACI.oa.mjs";
import { id_oc_nginfo } from "../Ldapmigration50nsNews/id-oc-nginfo.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ngcomponent } from "./ngcomponent.oa.mjs";
import { nsaclrole } from "./nsaclrole.oa.mjs";
import { nscreator } from "./nscreator.oa.mjs";
import { nsflags } from "./nsflags.oa.mjs";
import { nsnewsACL } from "./nsnewsACL.oa.mjs";
import { nsprettyname } from "./nsprettyname.oa.mjs";

/**
 * @summary nginfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nginfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass
 *                               | ngcomponent }
 *   MAY CONTAIN               { nsnewsACL
 *                               | subtreeACI
 *                               | description
 *                               | nsaclrole
 *                               | nsprettyname
 *                               | nsflags
 *                               | nscreator }
 *   LDAP-NAME                 {"nginfo"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nginfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nginfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass, ngcomponent] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsnewsACL, subtreeACI, description, nsaclrole, nsprettyname, nsflags, nscreator] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nginfo"],
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nginfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
