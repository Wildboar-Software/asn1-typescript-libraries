/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cibaRequest } from "../LdapOx/id-oc-cibaRequest.va.mjs";
import { authReqId } from "./authReqId.oa.mjs";
import { clnId } from "./clnId.oa.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { oxStatus } from "./oxStatus.oa.mjs";

/**
 * @summary cibaRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cibaRequest OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { authReqId
 *                               | clnId
 *                               | oxAuthUserId
 *                               | creationDate
 *                               | exp
 *                               | oxStatus }
 *   LDAP-NAME                 {"cibaRequest"}
 *   ID                        id-oc-cibaRequest }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cibaRequest: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [authReqId, clnId, oxAuthUserId, creationDate, exp, oxStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cibaRequest"],
    "&id": id_oc_cibaRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
