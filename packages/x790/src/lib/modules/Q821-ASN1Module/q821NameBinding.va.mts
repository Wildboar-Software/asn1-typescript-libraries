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
 * @summary q821NameBinding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821NameBinding OBJECT IDENTIFIER ::= {q821InformationModel namebinding(6)}
 * ```
 * 
 * @constant
 */
export
const q821NameBinding: OBJECT_IDENTIFIER = _OID.fromParts([
    /* namebinding */ 6,
], q821InformationModel);

/* eslint-enable */
