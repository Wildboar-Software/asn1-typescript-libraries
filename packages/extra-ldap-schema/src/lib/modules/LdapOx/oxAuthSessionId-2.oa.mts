/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxAuthSessionId_2 } from "../LdapOx/id-oc-oxAuthSessionId-2.va.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { sid } from "../LdapOx/sid.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { oxLastAccessTime } from "../LdapOx/oxLastAccessTime.oa.mjs";
import { oxAuthUserDN } from "../LdapOx/oxAuthUserDN.oa.mjs";
import { authnTime } from "../LdapOx/authnTime.oa.mjs";
import { oxState } from "../LdapOx/oxState.oa.mjs";
import { oxSessionState } from "../LdapOx/oxSessionState.oa.mjs";
import { oxAuthPermissionGranted } from "../LdapOx/oxAuthPermissionGranted.oa.mjs";
import { oxAsJwt } from "../LdapOx/oxAsJwt.oa.mjs";
import { oxJwt } from "../LdapOx/oxJwt.oa.mjs";
import { oxAuthPermissionGrantedMap } from "../LdapOx/oxAuthPermissionGrantedMap.oa.mjs";
import { oxInvolvedClients } from "../LdapOx/oxInvolvedClients.oa.mjs";
import { oxAuthSessionAttribute } from "../LdapOx/oxAuthSessionAttribute.oa.mjs";


/**
 * @summary oxAuthSessionId_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthSessionId-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | sid
 *                               | creationDate
 *                               | exp
 *                               | del
 *                               | oxLastAccessTime
 *                               | oxAuthUserDN
 *                               | authnTime
 *                               | oxState
 *                               | oxSessionState
 *                               | oxAuthPermissionGranted
 *                               | oxAsJwt
 *                               | oxJwt
 *                               | oxAuthPermissionGrantedMap
 *                               | oxInvolvedClients
 *                               | oxAuthSessionAttribute }
 *   LDAP-NAME                 {"oxAuthSessionId"}
 *   ID                        id-oc-oxAuthSessionId-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthSessionId_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, sid, creationDate, exp, del, oxLastAccessTime, oxAuthUserDN, authnTime, oxState, oxSessionState, oxAuthPermissionGranted, oxAsJwt, oxJwt, oxAuthPermissionGrantedMap, oxInvolvedClients, oxAuthSessionAttribute, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxAuthSessionId" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxAuthSessionId_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

