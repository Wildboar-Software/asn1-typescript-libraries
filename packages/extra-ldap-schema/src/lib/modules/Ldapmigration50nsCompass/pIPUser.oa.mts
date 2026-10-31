/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pIPUser } from "../Ldapmigration50nsCompass/id-oc-pIPUser.va.mjs";
import { pipcompassservers } from "./pipcompassservers.oa.mjs";
import { pipreservedces1 } from "./pipreservedces1.oa.mjs";
import { pipreservedces2 } from "./pipreservedces2.oa.mjs";
import { pipreservedces3 } from "./pipreservedces3.oa.mjs";
import { pipreservedcis1 } from "./pipreservedcis1.oa.mjs";
import { pipreservedcis2 } from "./pipreservedcis2.oa.mjs";
import { pipreservedcis3 } from "./pipreservedcis3.oa.mjs";
import { pipreservedcis4 } from "./pipreservedcis4.oa.mjs";
import { pipreservedcis5 } from "./pipreservedcis5.oa.mjs";
import { pipreservedcis6 } from "./pipreservedcis6.oa.mjs";
import { pipuniqueid } from "./pipuniqueid.oa.mjs";

/**
 * @summary pIPUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pIPUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { pipuniqueid
 *                               | pipcompassservers
 *                               | pipreservedcis1
 *                               | pipreservedcis2
 *                               | pipreservedcis3
 *                               | pipreservedcis4
 *                               | pipreservedcis5
 *                               | pipreservedcis6
 *                               | pipreservedces1
 *                               | pipreservedces2
 *                               | pipreservedces3 }
 *   LDAP-NAME                 {"PIPUser"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-pIPUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pIPUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [pipuniqueid, pipcompassservers, pipreservedcis1, pipreservedcis2, pipreservedcis3, pipreservedcis4, pipreservedcis5, pipreservedcis6, pipreservedces1, pipreservedces2, pipreservedces3] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["PIPUser"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pIPUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
