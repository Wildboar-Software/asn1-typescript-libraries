/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_fTDfs } from "../LdapSchema2ldifMicrosoft/id-oc-fTDfs.va.mjs";
import { pKT } from "../MSUser/pKT.oa.mjs";
import { pKTGuid } from "../MSUser/pKTGuid.oa.mjs";
import { remoteServerName } from "../MSUser/remoteServerName.oa.mjs";

/**
 * @summary fTDfs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fTDfs OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { remoteServerName
 *                               | pKTGuid
 *                               | pKT }
 *   LDAP-NAME                 {"fTDfs"}
 *   ID                        id-oc-fTDfs }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fTDfs: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [remoteServerName, pKTGuid, pKT] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["fTDfs"],
    "&id": id_oc_fTDfs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
