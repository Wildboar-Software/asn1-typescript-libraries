/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthSessionId_2 } from "../LdapOx/id-oc-oxAuthSessionId-2.va.mjs";
import { authnTime } from "./authnTime.oa.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxAsJwt } from "./oxAsJwt.oa.mjs";
import { oxAuthPermissionGranted } from "./oxAuthPermissionGranted.oa.mjs";
import { oxAuthPermissionGrantedMap } from "./oxAuthPermissionGrantedMap.oa.mjs";
import { oxAuthSessionAttribute } from "./oxAuthSessionAttribute.oa.mjs";
import { oxAuthUserDN } from "./oxAuthUserDN.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxInvolvedClients } from "./oxInvolvedClients.oa.mjs";
import { oxJwt } from "./oxJwt.oa.mjs";
import { oxLastAccessTime } from "./oxLastAccessTime.oa.mjs";
import { oxSessionState } from "./oxSessionState.oa.mjs";
import { oxState } from "./oxState.oa.mjs";
import { sid } from "./sid.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, sid, creationDate, exp, del, oxLastAccessTime, oxAuthUserDN, authnTime, oxState, oxSessionState, oxAuthPermissionGranted, oxAsJwt, oxJwt, oxAuthPermissionGrantedMap, oxInvolvedClients, oxAuthSessionAttribute] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthSessionId"],
    "&id": id_oc_oxAuthSessionId_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
