/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_token } from "../LdapOx/id-oc-token.va.mjs";
import { acr } from "./acr.oa.mjs";
import { attr } from "./attr.oa.mjs";
import { authnTime } from "./authnTime.oa.mjs";
import { authzCode } from "./authzCode.oa.mjs";
import { chlng } from "./chlng.oa.mjs";
import { chlngMth } from "./chlngMth.oa.mjs";
import { clms } from "./clms.oa.mjs";
import { clnId } from "./clnId.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { grtId } from "./grtId.oa.mjs";
import { grtTyp } from "./grtTyp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { jwtReq } from "./jwtReq.oa.mjs";
import { nnc } from "./nnc.oa.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { scp } from "./scp.oa.mjs";
import { ssnId } from "./ssnId.oa.mjs";
import { tknBndCnf } from "./tknBndCnf.oa.mjs";
import { tknCde } from "./tknCde.oa.mjs";
import { tknTyp } from "./tknTyp.oa.mjs";
import { uuid } from "./uuid.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [authnTime, authzCode, iat, exp, del, grtId, grtTyp, jwtReq, nnc, scp, tknCde, tknTyp, oxAuthUserId, clnId, acr, uuid, chlng, chlngMth, clms, ssnId, attr, tknBndCnf] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["token"],
    "&id": id_oc_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
