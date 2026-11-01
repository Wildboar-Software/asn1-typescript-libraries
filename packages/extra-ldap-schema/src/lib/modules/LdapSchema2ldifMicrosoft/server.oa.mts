/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_server } from "../LdapSchema2ldifMicrosoft/id-oc-server.va.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { serverReference } from "../MSUser/serverReference.oa.mjs";
import { dNSHostName } from "../MSUser/dNSHostName.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { mailAddress } from "../MSUser/mailAddress.oa.mjs";
import { bridgeheadTransportList } from "../MSUser/bridgeheadTransportList.oa.mjs";
// export { id_oc_server } from "../LdapSchema2ldifMicrosoft/id-oc-server.va.mjs";


/**
 * @summary server
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * server OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { serialNumber
 *                               | serverReference
 *                               | dNSHostName
 *                               | managedBy
 *                               | mailAddress
 *                               | bridgeheadTransportList }
 *   LDAP-NAME                 {"server"}
 *   ID                        id-oc-server }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const server: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, serverReference, dNSHostName, managedBy, mailAddress, bridgeheadTransportList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "server" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_server /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
