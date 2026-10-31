/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipsecBase } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecBase.va.mjs";
import { ipsecData } from "../MSUser/ipsecData.oa.mjs";
import { ipsecDataType } from "../MSUser/ipsecDataType.oa.mjs";
import { ipsecID } from "../MSUser/ipsecID.oa.mjs";
import { ipsecName } from "../MSUser/ipsecName.oa.mjs";
import { ipsecOwnersReference } from "../MSUser/ipsecOwnersReference.oa.mjs";

/**
 * @summary ipsecBase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecBase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { ipsecName
 *                               | ipsecID
 *                               | ipsecDataType
 *                               | ipsecData
 *                               | ipsecOwnersReference }
 *   LDAP-NAME                 {"ipsecBase"}
 *   ID                        id-oc-ipsecBase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecBase: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipsecName, ipsecID, ipsecDataType, ipsecData, ipsecOwnersReference] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipsecBase"],
    "&id": id_oc_ipsecBase /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
