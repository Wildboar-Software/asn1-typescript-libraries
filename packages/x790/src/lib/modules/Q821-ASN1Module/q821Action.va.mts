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
 * @summary q821Action
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821Action OBJECT IDENTIFIER ::= {q821InformationModel action(9)}
 * ```
 * 
 * @constant
 */
export
const q821Action: OBJECT_IDENTIFIER = _OID.fromParts([
    /* action */ 9,
], q821InformationModel);

/* eslint-enable */
