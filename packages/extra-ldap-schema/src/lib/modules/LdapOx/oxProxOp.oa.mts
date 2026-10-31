/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxProxOp } from "../LdapOx/id-oc-oxProxOp.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxDomain } from "./oxDomain.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxX509PEM } from "./oxX509PEM.oa.mjs";
import { oxX509URL } from "./oxX509URL.oa.mjs";

/**
 * @summary oxProxOp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxProxOp OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | displayName
 *                               | inum
 *                               | localityName
 *                               | oxDomain
 *                               | oxId
 *                               | oxX509PEM
 *                               | oxX509URL }
 *   LDAP-NAME                 {"oxProxOp"}
 *   ID                        id-oc-oxProxOp }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxProxOp: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, displayName, inum, localityName, oxDomain, oxId, oxX509PEM, oxX509URL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxProxOp"],
    "&id": id_oc_oxProxOp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
