/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NullableBitString, _decode_NullableBitString, _encode_NullableBitString } from "../MMS-SCI-Module-1/NullableBitString.ta.mjs";


/**
 * @summary NullableAdditionalSupportOptions
 * @description
 * 
 * AdditionalSupportOptions
 * or NULL (unsupported csr/cspi). SCI configuration/initialization encoding
 * (ISO 9506-2:2003 Annex B), not a runtime MMS PDU. ISO 9506-2:2003 Annex B.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NullableAdditionalSupportOptions  ::=  NullableBitString
 * ```
 */
export
type NullableAdditionalSupportOptions = NullableBitString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NullableAdditionalSupportOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NullableAdditionalSupportOptions: $.ASN1Decoder<NullableAdditionalSupportOptions> = _decode_NullableBitString;

/**
 * @summary Encodes a(n) NullableAdditionalSupportOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NullableAdditionalSupportOptions, encoded as an ASN.1 Element.
 */
export const _encode_NullableAdditionalSupportOptions: $.ASN1Encoder<NullableAdditionalSupportOptions> = _encode_NullableBitString;


/* eslint-enable */
