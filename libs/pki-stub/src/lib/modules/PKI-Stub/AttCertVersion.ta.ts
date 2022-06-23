/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION AttCertVersion */
/**
 * @summary AttCertVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertVersion  ::=  INTEGER {v2(1)}
 * ```
 */
export type AttCertVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION AttCertVersion */

/* START_OF_SYMBOL_DEFINITION AttCertVersion_v2 */
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttCertVersion_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const v2: AttCertVersion = AttCertVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION _decode_AttCertVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertVersion} The decoded data structure.
 */
export function _decode_AttCertVersion(el: _Element) {
    return $._decodeInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttCertVersion */

/* START_OF_SYMBOL_DEFINITION _encode_AttCertVersion */
/**
 * @summary Encodes a(n) AttCertVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertVersion, encoded as an ASN.1 Element.
 */
export function _encode_AttCertVersion(
    value: AttCertVersion,
    elGetter: $.ASN1Encoder<AttCertVersion>
) {
    return  $._encodeInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttCertVersion */

/* eslint-enable */
