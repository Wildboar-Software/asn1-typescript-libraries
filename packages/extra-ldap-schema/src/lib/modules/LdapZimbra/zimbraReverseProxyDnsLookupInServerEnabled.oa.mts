/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraReverseProxyDnsLookupInServerEnabled } from "../LdapZimbra/id-at-zimbraReverseProxyDnsLookupInServerEnabled.va.mjs";
// export { id_at_zimbraReverseProxyDnsLookupInServerEnabled } from "../LdapZimbra/id-at-zimbraReverseProxyDnsLookupInServerEnabled.va.mjs";


/**
 * @summary zimbraReverseProxyDnsLookupInServerEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyDnsLookupInServerEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraReverseProxyDnsLookupInServerEnabled"}
 *   LDAP-DESC                 "Control whether force the server side do the DNS lookup and send the result IP back to proxy. If set false, the raw address configured (e.g. zimbraMailHost) is directly sent to proxy."
 *   ID                        id-at-zimbraReverseProxyDnsLookupInServerEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraReverseProxyDnsLookupInServerEnabled: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraReverseProxyDnsLookupInServerEnabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Control whether force the server side do the DNS lookup and send the result IP back to proxy. If set false, the raw address configured (e.g. zimbraMailHost) is directly sent to proxy." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyDnsLookupInServerEnabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
