/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_personalInterestProfile } from "../Ldapmigration50nsCompass/id-oc-personalInterestProfile.va.mjs";
import { pipformat } from "./pipformat.oa.mjs";
import { pipfrequency } from "./pipfrequency.oa.mjs";
import { pipgroup } from "./pipgroup.oa.mjs";
import { piphour } from "./piphour.oa.mjs";
import { pipidstcount } from "./pipidstcount.oa.mjs";
import { pipirlist } from "./pipirlist.oa.mjs";
import { pipiroption } from "./pipiroption.oa.mjs";
import { piplastcount } from "./piplastcount.oa.mjs";
import { pipmaxhits } from "./pipmaxhits.oa.mjs";
import { pipmedium } from "./pipmedium.oa.mjs";
import { pipnotify } from "./pipnotify.oa.mjs";
import { pipprivilege } from "./pipprivilege.oa.mjs";
import { pippwp } from "./pippwp.oa.mjs";
import { pipreservedces1 } from "./pipreservedces1.oa.mjs";
import { pipreservedces2 } from "./pipreservedces2.oa.mjs";
import { pipreservedces3 } from "./pipreservedces3.oa.mjs";
import { pipreservedcis1 } from "./pipreservedcis1.oa.mjs";
import { pipreservedcis2 } from "./pipreservedcis2.oa.mjs";
import { pipreservedcis3 } from "./pipreservedcis3.oa.mjs";
import { pipreservedcis4 } from "./pipreservedcis4.oa.mjs";
import { pipreservedcis5 } from "./pipreservedcis5.oa.mjs";
import { pipreservedcis6 } from "./pipreservedcis6.oa.mjs";
import { pipresultset } from "./pipresultset.oa.mjs";
import { pipsortorder } from "./pipsortorder.oa.mjs";
import { pipstatus } from "./pipstatus.oa.mjs";
import { pipstcategory } from "./pipstcategory.oa.mjs";
import { pipstformat } from "./pipstformat.oa.mjs";
import { pipstfrequency } from "./pipstfrequency.oa.mjs";
import { pipsthour } from "./pipsthour.oa.mjs";
import { pipstid } from "./pipstid.oa.mjs";
import { pipstinterest } from "./pipstinterest.oa.mjs";
import { pipstirlist } from "./pipstirlist.oa.mjs";
import { pipstiroption } from "./pipstiroption.oa.mjs";
import { pipstlastcount } from "./pipstlastcount.oa.mjs";
import { pipstmaxhits } from "./pipstmaxhits.oa.mjs";
import { pipstmedium } from "./pipstmedium.oa.mjs";
import { pipstname } from "./pipstname.oa.mjs";
import { pipstprivacy } from "./pipstprivacy.oa.mjs";
import { pipstquery } from "./pipstquery.oa.mjs";
import { pipstresultset } from "./pipstresultset.oa.mjs";
import { pipstsortorder } from "./pipstsortorder.oa.mjs";
import { pipststatus } from "./pipststatus.oa.mjs";
import { pipsttaxonomy } from "./pipsttaxonomy.oa.mjs";
import { pipsttimestamp } from "./pipsttimestamp.oa.mjs";
import { pipsttotalcount } from "./pipsttotalcount.oa.mjs";
import { pipsttotalrun } from "./pipsttotalrun.oa.mjs";
import { pipsttype } from "./pipsttype.oa.mjs";
import { piptimestamp } from "./piptimestamp.oa.mjs";
import { piptotalcount } from "./piptotalcount.oa.mjs";
import { piptotalrun } from "./piptotalrun.oa.mjs";
import { pipuid } from "./pipuid.oa.mjs";
import { pipuniqueid } from "./pipuniqueid.oa.mjs";
import { pipusertype } from "./pipusertype.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass, pipuid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [pipuniqueid, pipstatus, pipusertype, pipfrequency, pipmedium, pipformat, piphour, pipmaxhits, pipresultset, pipsortorder, piptimestamp, pipirlist, pipiroption, pippwp, piplastcount, piptotalcount, piptotalrun, pipnotify, pipprivilege, pipgroup, pipidstcount, pipstid, pipstname, pipstquery, pipsttaxonomy, pipstinterest, pipsttype, pipstprivacy, pipststatus, pipstlastcount, pipsttotalcount, pipsttotalrun, pipstcategory, pipstfrequency, pipstmedium, pipstformat, pipsthour, pipstmaxhits, pipstresultset, pipstsortorder, pipsttimestamp, pipstirlist, pipstiroption, pipreservedcis1, pipreservedcis2, pipreservedcis3, pipreservedcis4, pipreservedcis5, pipreservedcis6, pipreservedces1, pipreservedces2, pipreservedces3] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["personalInterestProfile"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_personalInterestProfile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
