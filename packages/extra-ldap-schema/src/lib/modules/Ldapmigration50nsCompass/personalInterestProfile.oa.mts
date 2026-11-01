/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_personalInterestProfile } from "../Ldapmigration50nsCompass/id-oc-personalInterestProfile.va.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { pipuid } from "../Ldapmigration50nsCompass/pipuid.oa.mjs";
import { pipuniqueid } from "../Ldapmigration50nsCompass/pipuniqueid.oa.mjs";
import { pipstatus } from "../Ldapmigration50nsCompass/pipstatus.oa.mjs";
import { pipusertype } from "../Ldapmigration50nsCompass/pipusertype.oa.mjs";
import { pipfrequency } from "../Ldapmigration50nsCompass/pipfrequency.oa.mjs";
import { pipmedium } from "../Ldapmigration50nsCompass/pipmedium.oa.mjs";
import { pipformat } from "../Ldapmigration50nsCompass/pipformat.oa.mjs";
import { piphour } from "../Ldapmigration50nsCompass/piphour.oa.mjs";
import { pipmaxhits } from "../Ldapmigration50nsCompass/pipmaxhits.oa.mjs";
import { pipresultset } from "../Ldapmigration50nsCompass/pipresultset.oa.mjs";
import { pipsortorder } from "../Ldapmigration50nsCompass/pipsortorder.oa.mjs";
import { piptimestamp } from "../Ldapmigration50nsCompass/piptimestamp.oa.mjs";
import { pipirlist } from "../Ldapmigration50nsCompass/pipirlist.oa.mjs";
import { pipiroption } from "../Ldapmigration50nsCompass/pipiroption.oa.mjs";
import { pippwp } from "../Ldapmigration50nsCompass/pippwp.oa.mjs";
import { piplastcount } from "../Ldapmigration50nsCompass/piplastcount.oa.mjs";
import { piptotalcount } from "../Ldapmigration50nsCompass/piptotalcount.oa.mjs";
import { piptotalrun } from "../Ldapmigration50nsCompass/piptotalrun.oa.mjs";
import { pipnotify } from "../Ldapmigration50nsCompass/pipnotify.oa.mjs";
import { pipprivilege } from "../Ldapmigration50nsCompass/pipprivilege.oa.mjs";
import { pipgroup } from "../Ldapmigration50nsCompass/pipgroup.oa.mjs";
import { pipidstcount } from "../Ldapmigration50nsCompass/pipidstcount.oa.mjs";
import { pipstid } from "../Ldapmigration50nsCompass/pipstid.oa.mjs";
import { pipstname } from "../Ldapmigration50nsCompass/pipstname.oa.mjs";
import { pipstquery } from "../Ldapmigration50nsCompass/pipstquery.oa.mjs";
import { pipsttaxonomy } from "../Ldapmigration50nsCompass/pipsttaxonomy.oa.mjs";
import { pipstinterest } from "../Ldapmigration50nsCompass/pipstinterest.oa.mjs";
import { pipsttype } from "../Ldapmigration50nsCompass/pipsttype.oa.mjs";
import { pipstprivacy } from "../Ldapmigration50nsCompass/pipstprivacy.oa.mjs";
import { pipststatus } from "../Ldapmigration50nsCompass/pipststatus.oa.mjs";
import { pipstlastcount } from "../Ldapmigration50nsCompass/pipstlastcount.oa.mjs";
import { pipsttotalcount } from "../Ldapmigration50nsCompass/pipsttotalcount.oa.mjs";
import { pipsttotalrun } from "../Ldapmigration50nsCompass/pipsttotalrun.oa.mjs";
import { pipstcategory } from "../Ldapmigration50nsCompass/pipstcategory.oa.mjs";
import { pipstfrequency } from "../Ldapmigration50nsCompass/pipstfrequency.oa.mjs";
import { pipstmedium } from "../Ldapmigration50nsCompass/pipstmedium.oa.mjs";
import { pipstformat } from "../Ldapmigration50nsCompass/pipstformat.oa.mjs";
import { pipsthour } from "../Ldapmigration50nsCompass/pipsthour.oa.mjs";
import { pipstmaxhits } from "../Ldapmigration50nsCompass/pipstmaxhits.oa.mjs";
import { pipstresultset } from "../Ldapmigration50nsCompass/pipstresultset.oa.mjs";
import { pipstsortorder } from "../Ldapmigration50nsCompass/pipstsortorder.oa.mjs";
import { pipsttimestamp } from "../Ldapmigration50nsCompass/pipsttimestamp.oa.mjs";
import { pipstirlist } from "../Ldapmigration50nsCompass/pipstirlist.oa.mjs";
import { pipstiroption } from "../Ldapmigration50nsCompass/pipstiroption.oa.mjs";
import { pipreservedcis1 } from "../Ldapmigration50nsCompass/pipreservedcis1.oa.mjs";
import { pipreservedcis2 } from "../Ldapmigration50nsCompass/pipreservedcis2.oa.mjs";
import { pipreservedcis3 } from "../Ldapmigration50nsCompass/pipreservedcis3.oa.mjs";
import { pipreservedcis4 } from "../Ldapmigration50nsCompass/pipreservedcis4.oa.mjs";
import { pipreservedcis5 } from "../Ldapmigration50nsCompass/pipreservedcis5.oa.mjs";
import { pipreservedcis6 } from "../Ldapmigration50nsCompass/pipreservedcis6.oa.mjs";
import { pipreservedces1 } from "../Ldapmigration50nsCompass/pipreservedces1.oa.mjs";
import { pipreservedces2 } from "../Ldapmigration50nsCompass/pipreservedces2.oa.mjs";
import { pipreservedces3 } from "../Ldapmigration50nsCompass/pipreservedces3.oa.mjs";
// export { id_oc_personalInterestProfile } from "../Ldapmigration50nsCompass/id-oc-personalInterestProfile.va.mjs";


/**
 * @summary personalInterestProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personalInterestProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass
 *                               | pipuid }
 *   MAY CONTAIN               { pipuniqueid
 *                               | pipstatus
 *                               | pipusertype
 *                               | pipfrequency
 *                               | pipmedium
 *                               | pipformat
 *                               | piphour
 *                               | pipmaxhits
 *                               | pipresultset
 *                               | pipsortorder
 *                               | piptimestamp
 *                               | pipirlist
 *                               | pipiroption
 *                               | pippwp
 *                               | piplastcount
 *                               | piptotalcount
 *                               | piptotalrun
 *                               | pipnotify
 *                               | pipprivilege
 *                               | pipgroup
 *                               | pipidstcount
 *                               | pipstid
 *                               | pipstname
 *                               | pipstquery
 *                               | pipsttaxonomy
 *                               | pipstinterest
 *                               | pipsttype
 *                               | pipstprivacy
 *                               | pipststatus
 *                               | pipstlastcount
 *                               | pipsttotalcount
 *                               | pipsttotalrun
 *                               | pipstcategory
 *                               | pipstfrequency
 *                               | pipstmedium
 *                               | pipstformat
 *                               | pipsthour
 *                               | pipstmaxhits
 *                               | pipstresultset
 *                               | pipstsortorder
 *                               | pipsttimestamp
 *                               | pipstirlist
 *                               | pipstiroption
 *                               | pipreservedcis1
 *                               | pipreservedcis2
 *                               | pipreservedcis3
 *                               | pipreservedcis4
 *                               | pipreservedcis5
 *                               | pipreservedcis6
 *                               | pipreservedces1
 *                               | pipreservedces2
 *                               | pipreservedces3 }
 *   LDAP-NAME                 {"personalInterestProfile"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-personalInterestProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const personalInterestProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, pipuid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ pipuniqueid, pipstatus, pipusertype, pipfrequency, pipmedium, pipformat, piphour, pipmaxhits, pipresultset, pipsortorder, piptimestamp, pipirlist, pipiroption, pippwp, piplastcount, piptotalcount, piptotalrun, pipnotify, pipprivilege, pipgroup, pipidstcount, pipstid, pipstname, pipstquery, pipsttaxonomy, pipstinterest, pipsttype, pipstprivacy, pipststatus, pipstlastcount, pipsttotalcount, pipsttotalrun, pipstcategory, pipstfrequency, pipstmedium, pipstformat, pipsthour, pipstmaxhits, pipstresultset, pipstsortorder, pipsttimestamp, pipstirlist, pipstiroption, pipreservedcis1, pipreservedcis2, pipreservedcis3, pipreservedcis4, pipreservedcis5, pipreservedcis6, pipreservedces1, pipreservedces2, pipreservedces3, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "personalInterestProfile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_personalInterestProfile /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
