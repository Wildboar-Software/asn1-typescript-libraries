/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sambaTrustedDomain } from "../LdapSchema2ldifSamba/id-oc-sambaTrustedDomain.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { sambaFlatName } from "./sambaFlatName.oa.mjs";
import { sambaSecurityIdentifier } from "./sambaSecurityIdentifier.oa.mjs";
import { sambaTrustAttributes } from "./sambaTrustAttributes.oa.mjs";
import { sambaTrustAuthIncoming } from "./sambaTrustAuthIncoming.oa.mjs";
import { sambaTrustAuthOutgoing } from "./sambaTrustAuthOutgoing.oa.mjs";
import { sambaTrustDirection } from "./sambaTrustDirection.oa.mjs";
import { sambaTrustForestTrustInfo } from "./sambaTrustForestTrustInfo.oa.mjs";
import { sambaTrustPartner } from "./sambaTrustPartner.oa.mjs";
import { sambaTrustType } from "./sambaTrustType.oa.mjs";

/**
 * @summary sambaTrustedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustedDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { sambaTrustType
 *                               | sambaTrustAttributes
 *                               | sambaTrustDirection
 *                               | sambaTrustPartner
 *                               | sambaFlatName
 *                               | sambaTrustAuthOutgoing
 *                               | sambaTrustAuthIncoming
 *                               | sambaSecurityIdentifier
 *                               | sambaTrustForestTrustInfo }
 *   LDAP-NAME                 {"sambaTrustedDomain"}
 *   LDAP-DESC                 "Samba Trusted Domain Object"
 *   ID                        id-oc-sambaTrustedDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaTrustedDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sambaTrustType, sambaTrustAttributes, sambaTrustDirection, sambaTrustPartner, sambaFlatName, sambaTrustAuthOutgoing, sambaTrustAuthIncoming, sambaSecurityIdentifier, sambaTrustForestTrustInfo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaTrustedDomain"],
    "&ldapDesc": "Samba Trusted Domain Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sambaTrustedDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
