/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_nTDSConnection } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSConnection.va.mjs";
import { enabledConnection } from "../MSUser/enabledConnection.oa.mjs";
import { fromServer } from "../MSUser/fromServer.oa.mjs";
import { generatedConnection } from "../MSUser/generatedConnection.oa.mjs";
import { mS_DS_ReplicatesNCReason } from "../MSUser/mS-DS-ReplicatesNCReason.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { transportType } from "../MSUser/transportType.oa.mjs";

/**
 * @summary nTDSConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSConnection OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { enabledConnection
 *                               | fromServer
 *                               | options }
 *   MAY CONTAIN               { generatedConnection
 *                               | schedule
 *                               | transportType
 *                               | mS-DS-ReplicatesNCReason }
 *   LDAP-NAME                 {"nTDSConnection"}
 *   ID                        id-oc-nTDSConnection }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSConnection: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [leaf] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [enabledConnection, fromServer, options] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [generatedConnection, schedule, transportType, mS_DS_ReplicatesNCReason] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nTDSConnection"],
    "&id": id_oc_nTDSConnection /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
