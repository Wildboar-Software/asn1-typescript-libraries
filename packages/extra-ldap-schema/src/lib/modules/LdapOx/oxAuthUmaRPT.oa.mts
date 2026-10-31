/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthUmaRPT } from "../LdapOx/id-oc-oxAuthUmaRPT.va.mjs";
import { authnTime } from "./authnTime.oa.mjs";
import { clnId } from "./clnId.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { oxUmaPermission } from "./oxUmaPermission.oa.mjs";
import { tknCde } from "./tknCde.oa.mjs";
import { uuid } from "./uuid.oa.mjs";

/**
 * @summary oxAuthUmaRPT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthUmaRPT OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { authnTime
 *                               | clnId
 *                               | iat
 *                               | exp
 *                               | del
 *                               | tknCde
 *                               | oxAuthUserId
 *                               | oxUmaPermission
 *                               | uuid }
 *   LDAP-NAME                 {"oxAuthUmaRPT"}
 *   ID                        id-oc-oxAuthUmaRPT }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthUmaRPT: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [authnTime, clnId, iat, exp, del, tknCde, oxAuthUserId, oxUmaPermission, uuid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthUmaRPT"],
    "&id": id_oc_oxAuthUmaRPT /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
