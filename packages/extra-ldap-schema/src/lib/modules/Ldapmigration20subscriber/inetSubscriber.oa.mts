/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetSubscriber } from "../Ldapmigration20subscriber/id-oc-inetSubscriber.va.mjs";
import { inetSubscriberAccountId } from "./inetSubscriberAccountId.oa.mjs";
import { inetSubscriberChallenge } from "./inetSubscriberChallenge.oa.mjs";
import { inetSubscriberResponse } from "./inetSubscriberResponse.oa.mjs";

/**
 * @summary inetSubscriber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetSubscriber OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { inetSubscriberAccountId
 *                               | inetSubscriberChallenge
 *                               | inetSubscriberResponse }
 *   LDAP-NAME                 {"inetSubscriber"}
 *   ID                        id-oc-inetSubscriber }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetSubscriber: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inetSubscriberAccountId, inetSubscriberChallenge, inetSubscriberResponse] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetSubscriber"],
    "&id": id_oc_inetSubscriber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
