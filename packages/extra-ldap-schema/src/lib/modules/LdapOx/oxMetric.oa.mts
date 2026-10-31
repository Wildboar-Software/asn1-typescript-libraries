/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxMetric } from "../LdapOx/id-oc-oxMetric.va.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxApplicationType } from "./oxApplicationType.oa.mjs";
import { oxData } from "./oxData.oa.mjs";
import { oxEndDate } from "./oxEndDate.oa.mjs";
import { oxHost } from "./oxHost.oa.mjs";
import { oxMetricType } from "./oxMetricType.oa.mjs";
import { oxStartDate } from "./oxStartDate.oa.mjs";

/**
 * @summary oxMetric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxMetric OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { uniqueIdentifier
 *                               | oxStartDate
 *                               | oxEndDate
 *                               | oxApplicationType
 *                               | oxMetricType
 *                               | creationDate
 *                               | del
 *                               | exp
 *                               | oxData
 *                               | oxHost }
 *   LDAP-NAME                 {"oxMetric"}
 *   ID                        id-oc-oxMetric }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxMetric: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uniqueIdentifier, oxStartDate, oxEndDate, oxApplicationType, oxMetricType, creationDate, del, exp, oxData, oxHost] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxMetric"],
    "&id": id_oc_oxMetric /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
