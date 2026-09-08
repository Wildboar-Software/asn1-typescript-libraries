/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    q821InformationModel,
} from "../Q821-ASN1Module/q821InformationModel.va.mjs";



/**
 * @summary q821Parameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821Parameter OBJECT IDENTIFIER ::= {q821InformationModel parameter(5)}
 * ```
 * 
 * @constant
 */
export
const q821Parameter: OBJECT_IDENTIFIER = _OID.fromParts([
    /* parameter */ 5,
], q821InformationModel);

/* eslint-enable */
