/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_sambaTrustedDomain } from "../LdapSchema2ldifSamba/id-oc-sambaTrustedDomain.va.mjs";
import { sambaTrustType } from "../LdapSchema2ldifSamba/sambaTrustType.oa.mjs";
import { sambaTrustAttributes } from "../LdapSchema2ldifSamba/sambaTrustAttributes.oa.mjs";
import { sambaTrustDirection } from "../LdapSchema2ldifSamba/sambaTrustDirection.oa.mjs";
import { sambaTrustPartner } from "../LdapSchema2ldifSamba/sambaTrustPartner.oa.mjs";
import { sambaFlatName } from "../LdapSchema2ldifSamba/sambaFlatName.oa.mjs";
import { sambaTrustAuthOutgoing } from "../LdapSchema2ldifSamba/sambaTrustAuthOutgoing.oa.mjs";
import { sambaTrustAuthIncoming } from "../LdapSchema2ldifSamba/sambaTrustAuthIncoming.oa.mjs";
import { sambaSecurityIdentifier } from "../LdapSchema2ldifSamba/sambaSecurityIdentifier.oa.mjs";
import { sambaTrustForestTrustInfo } from "../LdapSchema2ldifSamba/sambaTrustForestTrustInfo.oa.mjs";
// export { id_oc_sambaTrustedDomain } from "../LdapSchema2ldifSamba/id-oc-sambaTrustedDomain.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sambaTrustType, sambaTrustAttributes, sambaTrustDirection, sambaTrustPartner, sambaFlatName, sambaTrustAuthOutgoing, sambaTrustAuthIncoming, sambaSecurityIdentifier, sambaTrustForestTrustInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaTrustedDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Trusted Domain Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sambaTrustedDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
