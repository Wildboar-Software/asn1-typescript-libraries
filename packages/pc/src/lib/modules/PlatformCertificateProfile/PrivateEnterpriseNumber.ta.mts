/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION PrivateEnterpriseNumber */
/**
 * @summary PrivateEnterpriseNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEnterpriseNumber  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type PrivateEnterpriseNumber = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION PrivateEnterpriseNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateEnterpriseNumber */
let _cached_decoder_for_PrivateEnterpriseNumber: $.ASN1Decoder<PrivateEnterpriseNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateEnterpriseNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateEnterpriseNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateEnterpriseNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateEnterpriseNumber} The decoded data structure.
 */
export
function _decode_PrivateEnterpriseNumber (el: _Element) {
    if (!_cached_decoder_for_PrivateEnterpriseNumber) { _cached_decoder_for_PrivateEnterpriseNumber = $._decodeObjectIdentifier; }
    return _cached_decoder_for_PrivateEnterpriseNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateEnterpriseNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateEnterpriseNumber */
let _cached_encoder_for_PrivateEnterpriseNumber: $.ASN1Encoder<PrivateEnterpriseNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateEnterpriseNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateEnterpriseNumber */
/**
 * @summary Encodes a(n) PrivateEnterpriseNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateEnterpriseNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateEnterpriseNumber (value: PrivateEnterpriseNumber, elGetter: $.ASN1Encoder<PrivateEnterpriseNumber>) {
    if (!_cached_encoder_for_PrivateEnterpriseNumber) { _cached_encoder_for_PrivateEnterpriseNumber = $._encodeObjectIdentifier; }
    return _cached_encoder_for_PrivateEnterpriseNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateEnterpriseNumber */

/* eslint-enable */
