/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxRp } from "../LdapOx/id-oc-oxRp.va.mjs";
import { dat } from "./dat.oa.mjs";
import { oxId } from "./oxId.oa.mjs";

/**
 * @summary oxRp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxRp OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | dat }
 *   LDAP-NAME                 {"oxRp"}
 *   ID                        id-oc-oxRp }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxRp: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, dat] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxRp"],
    "&id": id_oc_oxRp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
