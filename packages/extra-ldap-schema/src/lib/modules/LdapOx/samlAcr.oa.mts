/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_samlAcr } from "../LdapOx/id-oc-samlAcr.va.mjs";
import { classRef } from "./classRef.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { parent } from "./parent.oa.mjs";

/**
 * @summary samlAcr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samlAcr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { parent
 *                               | classRef
 *                               | inum }
 *   LDAP-NAME                 {"samlAcr"}
 *   ID                        id-oc-samlAcr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samlAcr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [parent, classRef, inum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["samlAcr"],
    "&id": id_oc_samlAcr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
