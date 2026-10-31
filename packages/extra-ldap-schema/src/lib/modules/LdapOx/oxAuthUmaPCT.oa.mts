/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthUmaPCT } from "../LdapOx/id-oc-oxAuthUmaPCT.va.mjs";
import { clnId } from "./clnId.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { oxClaimValues } from "./oxClaimValues.oa.mjs";
import { tknCde } from "./tknCde.oa.mjs";

/**
 * @summary oxAuthUmaPCT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthUmaPCT OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { clnId
 *                               | iat
 *                               | exp
 *                               | del
 *                               | tknCde
 *                               | oxClaimValues }
 *   LDAP-NAME                 {"oxAuthUmaPCT"}
 *   ID                        id-oc-oxAuthUmaPCT }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthUmaPCT: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [clnId, iat, exp, del, tknCde, oxClaimValues] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthUmaPCT"],
    "&id": id_oc_oxAuthUmaPCT /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
