/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_dcPosixOwnerURL } from "../LdapDovecot/id-at-dcPosixOwnerURL.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";

/**
 * @summary dcPosixOwnerURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcPosixOwnerURL ATTRIBUTE ::= {
 *   SUBTYPE OF                labeledURI
 *   LDAP-NAME                 {"dcPosixOwnerURL"}
 *   LDAP-DESC                 "Identifies an URL associated with the posixOwner of the entry. Any type of labeled URL can be used."
 *   ID                        id-at-dcPosixOwnerURL }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dcPosixOwnerURL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": labeledURI /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dcPosixOwnerURL"],
    "&ldapDesc": "Identifies an URL associated with the posixOwner of the entry. Any type of labeled URL can be used." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dcPosixOwnerURL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
