/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { CONTENTS } from "../X9-84-CMS/CONTENTS.oca.mjs";

import { Contents_Union0_Intersection0_Element } from "../X9-84-CMS/Contents-Union0-Intersection0-Element.oa.mjs";



/**
 * @summary Contents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Contents CONTENTS ::= {
 *    { Data IDENTIFIED BY id-data }
 * }
 * ```
 * 
 * @constant
 * @type {CONTENTS[]}
 * 
 */
export
const Contents: (CONTENTS)[] = [ Contents_Union0_Intersection0_Element, ];

/* eslint-enable */
