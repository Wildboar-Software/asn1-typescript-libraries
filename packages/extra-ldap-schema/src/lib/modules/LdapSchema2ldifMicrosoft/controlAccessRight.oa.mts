/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_controlAccessRight } from "../LdapSchema2ldifMicrosoft/id-oc-controlAccessRight.va.mjs";
import { appliesTo } from "../MSUser/appliesTo.oa.mjs";
import { localizationDisplayId } from "../MSUser/localizationDisplayId.oa.mjs";
import { rightsGuid } from "../MSUser/rightsGuid.oa.mjs";
import { validAccesses } from "../MSUser/validAccesses.oa.mjs";

/**
 * @summary controlAccessRight
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * controlAccessRight OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { rightsGuid
 *                               | appliesTo
 *                               | localizationDisplayId
 *                               | validAccesses }
 *   LDAP-NAME                 {"controlAccessRight"}
 *   ID                        id-oc-controlAccessRight }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const controlAccessRight: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rightsGuid, appliesTo, localizationDisplayId, validAccesses] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["controlAccessRight"],
    "&id": id_oc_controlAccessRight /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
