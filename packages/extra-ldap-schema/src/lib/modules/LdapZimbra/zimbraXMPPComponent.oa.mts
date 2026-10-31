/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraXMPPComponent } from "../LdapZimbra/id-oc-zimbraXMPPComponent.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraDomainId } from "./zimbraDomainId.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraServerId } from "./zimbraServerId.oa.mjs";
import { zimbraXMPPComponentCategory } from "./zimbraXMPPComponentCategory.oa.mjs";
import { zimbraXMPPComponentClassName } from "./zimbraXMPPComponentClassName.oa.mjs";
import { zimbraXMPPComponentFeatures } from "./zimbraXMPPComponentFeatures.oa.mjs";
import { zimbraXMPPComponentName } from "./zimbraXMPPComponentName.oa.mjs";
import { zimbraXMPPComponentType } from "./zimbraXMPPComponentType.oa.mjs";

/**
 * @summary zimbraXMPPComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraXMPPComponent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraDomainId
 *                               | zimbraId
 *                               | zimbraServerId
 *                               | zimbraXMPPComponentCategory
 *                               | zimbraXMPPComponentClassName
 *                               | zimbraXMPPComponentType }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraCreateTimestamp
 *                               | zimbraXMPPComponentFeatures
 *                               | zimbraXMPPComponentName }
 *   LDAP-NAME                 {"zimbraXMPPComponent"}
 *   LDAP-DESC                 "XMPP Component Configuration Record"
 *   ID                        id-oc-zimbraXMPPComponent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraXMPPComponent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraDomainId, zimbraId, zimbraServerId, zimbraXMPPComponentCategory, zimbraXMPPComponentClassName, zimbraXMPPComponentType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraCreateTimestamp, zimbraXMPPComponentFeatures, zimbraXMPPComponentName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraXMPPComponent"],
    "&ldapDesc": "XMPP Component Configuration Record" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraXMPPComponent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
