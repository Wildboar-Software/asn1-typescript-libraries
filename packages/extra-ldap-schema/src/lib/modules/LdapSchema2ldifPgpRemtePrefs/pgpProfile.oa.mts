/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pgpProfile } from "../LdapSchema2ldifPgpRemtePrefs/id-oc-pgpProfile.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";

/**
 * @summary pgpProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pgpProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | owner }
 *   LDAP-NAME                 {"pgpProfile"}
 *   LDAP-DESC                 "PGP defined objectclass of a collection admin prefs"
 *   ID                        id-oc-pgpProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pgpProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, owner] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pgpProfile"],
    "&ldapDesc": "PGP defined objectclass of a collection admin prefs" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pgpProfile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
