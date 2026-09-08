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
 * @summary q821ObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821ObjectClass OBJECT IDENTIFIER ::= {q821InformationModel managedObjectClass(3)}
 * ```
 * 
 * @constant
 */
export
const q821ObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* managedObjectClass */ 3,
], q821InformationModel);

/* eslint-enable */
