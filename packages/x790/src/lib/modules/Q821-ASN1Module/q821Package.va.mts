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
 * @summary q821Package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821Package OBJECT IDENTIFIER ::= {q821InformationModel package(4)}
 * ```
 * 
 * @constant
 */
export
const q821Package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* package */ 4,
], q821InformationModel);

/* eslint-enable */
