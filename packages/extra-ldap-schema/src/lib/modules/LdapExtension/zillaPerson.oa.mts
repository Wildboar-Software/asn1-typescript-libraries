/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { officePerson } from "../LdapExtension/officePerson.oa.mjs";
import { id_oc_zillaPerson } from "../LdapExtension/id-oc-zillaPerson.va.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uRL } from "../LdapExtension/uRL.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { xmozillanickname } from "../LdapExtension/xmozillanickname.oa.mjs";
import { xmozillausehtmlmail } from "../LdapExtension/xmozillausehtmlmail.oa.mjs";


/**
 * @summary zillaPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zillaPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { officePerson }
 *   MAY CONTAIN               { mobile
 *                               | pager
 *                               | description
 *                               | uRL
 *                               | telephoneNumber
 *                               | xmozillanickname
 *                               | xmozillausehtmlmail }
 *   LDAP-NAME                 {"zillaPerson"}
 *   LDAP-DESC                 "Netscape Communicator Extensions"
 *   ID                        id-oc-zillaPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zillaPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ officePerson, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mobile, pager, description, uRL, telephoneNumber, xmozillanickname, xmozillausehtmlmail, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zillaPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape Communicator Extensions" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zillaPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

