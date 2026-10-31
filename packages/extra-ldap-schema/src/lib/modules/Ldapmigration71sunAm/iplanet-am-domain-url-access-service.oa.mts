/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_domain_url_access_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-domain-url-access-service.va.mjs";
import { iplanet_am_domain_url_access_allow } from "../Ldapmigration71sunAm/iplanet-am-domain-url-access-allow.oa.mjs";

/**
 * @summary iplanet_am_domain_url_access_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-domain-url-access-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-domain-url-access-allow }
 *   LDAP-NAME                 {"iplanet-am-domain-url-access-service"}
 *   LDAP-DESC                 "Domain URL Access Service OC"
 *   ID                        id-oc-iplanet-am-domain-url-access-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_domain_url_access_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iplanet_am_domain_url_access_allow] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanet-am-domain-url-access-service"],
    "&ldapDesc": "Domain URL Access Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_domain_url_access_service /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
