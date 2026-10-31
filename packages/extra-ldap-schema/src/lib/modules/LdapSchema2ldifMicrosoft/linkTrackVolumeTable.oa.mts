/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { fileLinkTracking } from "../LdapSchema2ldifMicrosoft/fileLinkTracking.oa.mjs";
import { id_oc_linkTrackVolumeTable } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackVolumeTable.va.mjs";

/**
 * @summary linkTrackVolumeTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * linkTrackVolumeTable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { fileLinkTracking }
 *   LDAP-NAME                 {"linkTrackVolumeTable"}
 *   ID                        id-oc-linkTrackVolumeTable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const linkTrackVolumeTable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [fileLinkTracking] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["linkTrackVolumeTable"],
    "&id": id_oc_linkTrackVolumeTable /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
