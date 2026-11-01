/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_pgpReconElement } from "../LdapSchema2ldifPgpRecon/id-oc-pgpReconElement.va.mjs";
import { pgpReconCertID } from "../LdapSchema2ldifPgpRecon/pgpReconCertID.oa.mjs";
import { pgpReconData } from "../LdapSchema2ldifPgpRecon/pgpReconData.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";


/**
 * @summary pgpReconElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pgpReconElement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { pgpReconCertID
 *                               | pgpReconData
 *                               | owner }
 *   LDAP-NAME                 {"pgpReconElement"}
 *   LDAP-DESC                 "PGP defined objectclass of a reconstruction data object"
 *   ID                        id-oc-pgpReconElement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pgpReconElement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ pgpReconCertID, pgpReconData, owner, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pgpReconElement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "PGP defined objectclass of a reconstruction data object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pgpReconElement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

