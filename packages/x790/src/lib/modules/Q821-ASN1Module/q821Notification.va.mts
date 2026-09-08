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
 * @summary q821Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * q821Notification OBJECT IDENTIFIER ::= {q821InformationModel notification(10)}
 * ```
 * 
 * @constant
 */
export
const q821Notification: OBJECT_IDENTIFIER = _OID.fromParts([
    /* notification */ 10,
], q821InformationModel);

/* eslint-enable */
