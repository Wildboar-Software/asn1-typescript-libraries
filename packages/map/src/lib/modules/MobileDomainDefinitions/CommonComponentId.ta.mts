/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommonComponentId
 * @description
 *
 * INTEGER (0..9) used as an OID arc selector under `gsm-NetworkId` (`ac-Id`,
 * `as-Id`, `ase-Id`, `moduleId`, `er-Id`) in `MobileDomainDefinitions` (3GPP TS
 * 29.002 V19.1.0 clause 17.1.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonComponentId  ::=  INTEGER (0..9)
 * ```
 */
export
type CommonComponentId = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonComponentId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CommonComponentId = (el: _Element): CommonComponentId => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 9) {
        throw new ASN1OverflowError("CommonComponentId violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) CommonComponentId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonComponentId, encoded as an ASN.1 Element.
 */
export const _encode_CommonComponentId = $._encodeInteger;


/* eslint-enable */
