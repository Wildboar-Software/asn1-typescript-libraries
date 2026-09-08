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
 * @summary q821Attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821Attribute OBJECT IDENTIFIER ::= {q821InformationModel attribute(7)}
 * ```
 * 
 * @constant
 */
export
const q821Attribute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* attribute */ 7,
], q821InformationModel);

/* eslint-enable */
