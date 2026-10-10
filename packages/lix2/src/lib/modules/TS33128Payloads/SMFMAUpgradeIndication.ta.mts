/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAUpgradeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAUpgradeIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAUpgradeIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAUpgradeIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMFMAUpgradeIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) SMFMAUpgradeIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAUpgradeIndication, encoded as an ASN.1 Element.
 */
export const _encode_SMFMAUpgradeIndication = $._encodeBoolean;


/* eslint-enable */
