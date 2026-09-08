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
 * @summary q821AttributeGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821AttributeGroup OBJECT IDENTIFIER ::= {q821InformationModel attributeGroup(8)}
 * ```
 * 
 * @constant
 */
export
const q821AttributeGroup: OBJECT_IDENTIFIER = _OID.fromParts([
    /* attributeGroup */ 8,
], q821InformationModel);

/* eslint-enable */
