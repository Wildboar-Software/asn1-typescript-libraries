/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_server } from "../LdapKopano/id-oc-kopano-server.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoContainsPublic } from "./kopanoContainsPublic.oa.mjs";
import { kopanoFilePath } from "./kopanoFilePath.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";
import { kopanoHttpPort } from "./kopanoHttpPort.oa.mjs";
import { kopanoProxyURL } from "./kopanoProxyURL.oa.mjs";
import { kopanoSslPort } from "./kopanoSslPort.oa.mjs";

/**
 * @summary kopano_server
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-server OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoHttpPort
 *                               | kopanoSslPort
 *                               | kopanoFilePath
 *                               | kopanoContainsPublic
 *                               | kopanoProxyURL }
 *   LDAP-NAME                 {"kopano-server"}
 *   LDAP-DESC                 "KOPANO: a Kopano server"
 *   ID                        id-oc-kopano-server }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_server: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoAccount, kopanoHidden, kopanoHttpPort, kopanoSslPort, kopanoFilePath, kopanoContainsPublic, kopanoProxyURL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-server"],
    "&ldapDesc": "KOPANO: a Kopano server" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_server /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
