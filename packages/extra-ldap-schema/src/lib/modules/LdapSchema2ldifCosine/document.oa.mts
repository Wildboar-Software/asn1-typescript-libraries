/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { documentIdentifier } from "../LdapSchema2ldifCosine/documentIdentifier.oa.mjs";
import { id_oc_document } from "../LdapSchema2ldifCosine/id-oc-document.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { documentTitle } from "../LdapSchema2ldifCosine/documentTitle.oa.mjs";
import { documentVersion } from "../LdapSchema2ldifCosine/documentVersion.oa.mjs";
import { documentAuthor } from "../LdapSchema2ldifCosine/documentAuthor.oa.mjs";
import { documentLocation } from "../LdapSchema2ldifCosine/documentLocation.oa.mjs";
import { documentPublisher } from "../LdapSchema2ldifCosine/documentPublisher.oa.mjs";
/**
 * @summary document
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * document OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { documentIdentifier }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | seeAlso
 *                               | localityName
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | documentTitle
 *                               | documentVersion
 *                               | documentAuthor
 *                               | documentLocation
 *                               | documentPublisher }
 *   LDAP-NAME                 {"document"}
 *   ID                        id-oc-document }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const document: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ documentIdentifier, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, seeAlso, localityName, organizationName, organizationalUnitName, documentTitle, documentVersion, documentAuthor, documentLocation, documentPublisher, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "document" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_document /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
