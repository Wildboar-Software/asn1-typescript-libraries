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
 * @summary q821StandardSpecificExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821StandardSpecificExtension OBJECT IDENTIFIER ::= {q821InformationModel standardSpecificExtension(0)}
 * ```
 * 
 * @constant
 */
export
const q821StandardSpecificExtension: OBJECT_IDENTIFIER = _OID.fromParts([
    /* standardSpecificExtension */ 0,
], q821InformationModel);

/* eslint-enable */
