/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { id_oc_volume } from "../LdapSchema2ldifMicrosoft/id-oc-volume.va.mjs";
import { contentIndexingAllowed } from "../MSUser/contentIndexingAllowed.oa.mjs";
import { lastContentIndexed } from "../MSUser/lastContentIndexed.oa.mjs";
import { uNCName } from "../MSUser/uNCName.oa.mjs";

/**
 * @summary volume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * volume OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { uNCName }
 *   MAY CONTAIN               { contentIndexingAllowed
 *                               | lastContentIndexed }
 *   LDAP-NAME                 {"volume"}
 *   ID                        id-oc-volume }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const volume: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [connectionPoint] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uNCName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [contentIndexingAllowed, lastContentIndexed] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["volume"],
    "&id": id_oc_volume /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
