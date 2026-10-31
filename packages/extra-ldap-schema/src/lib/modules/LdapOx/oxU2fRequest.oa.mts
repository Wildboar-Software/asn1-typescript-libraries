/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxU2fRequest } from "../LdapOx/id-oc-oxU2fRequest.va.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxRequest } from "./oxRequest.oa.mjs";
import { oxRequestId } from "./oxRequestId.oa.mjs";
import { oxSessionStateId } from "./oxSessionStateId.oa.mjs";
import { personInum } from "./personInum.oa.mjs";

/**
 * @summary oxU2fRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxU2fRequest OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | oxRequestId
 *                               | oxRequest
 *                               | oxSessionStateId
 *                               | del
 *                               | exp
 *                               | personInum
 *                               | creationDate }
 *   LDAP-NAME                 {"oxU2fRequest"}
 *   ID                        id-oc-oxU2fRequest }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxU2fRequest: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, oxRequestId, oxRequest, oxSessionStateId, del, exp, personInum, creationDate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxU2fRequest"],
    "&id": id_oc_oxU2fRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
