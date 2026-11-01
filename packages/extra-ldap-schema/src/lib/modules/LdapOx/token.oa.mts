/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_token } from "../LdapOx/id-oc-token.va.mjs";
import { authnTime } from "../LdapOx/authnTime.oa.mjs";
import { authzCode } from "../LdapOx/authzCode.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { grtId } from "../LdapOx/grtId.oa.mjs";
import { grtTyp } from "../LdapOx/grtTyp.oa.mjs";
import { jwtReq } from "../LdapOx/jwtReq.oa.mjs";
import { nnc } from "../LdapOx/nnc.oa.mjs";
import { scp } from "../LdapOx/scp.oa.mjs";
import { tknCde } from "../LdapOx/tknCde.oa.mjs";
import { tknTyp } from "../LdapOx/tknTyp.oa.mjs";
import { oxAuthUserId } from "../LdapOx/oxAuthUserId.oa.mjs";
import { clnId } from "../LdapOx/clnId.oa.mjs";
import { acr } from "../LdapOx/acr.oa.mjs";
import { uuid } from "../LdapOx/uuid.oa.mjs";
import { chlng } from "../LdapOx/chlng.oa.mjs";
import { chlngMth } from "../LdapOx/chlngMth.oa.mjs";
import { clms } from "../LdapOx/clms.oa.mjs";
import { ssnId } from "../LdapOx/ssnId.oa.mjs";
import { attr } from "../LdapOx/attr.oa.mjs";
import { tknBndCnf } from "../LdapOx/tknBndCnf.oa.mjs";


/**
 * @summary token
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * token OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { authnTime
 *                               | authzCode
 *                               | iat
 *                               | exp
 *                               | del
 *                               | grtId
 *                               | grtTyp
 *                               | jwtReq
 *                               | nnc
 *                               | scp
 *                               | tknCde
 *                               | tknTyp
 *                               | oxAuthUserId
 *                               | clnId
 *                               | acr
 *                               | uuid
 *                               | chlng
 *                               | chlngMth
 *                               | clms
 *                               | ssnId
 *                               | attr
 *                               | tknBndCnf }
 *   LDAP-NAME                 {"token"}
 *   ID                        id-oc-token }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const token: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ authnTime, authzCode, iat, exp, del, grtId, grtTyp, jwtReq, nnc, scp, tknCde, tknTyp, oxAuthUserId, clnId, acr, uuid, chlng, chlngMth, clms, ssnId, attr, tknBndCnf, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "token" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_token /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

