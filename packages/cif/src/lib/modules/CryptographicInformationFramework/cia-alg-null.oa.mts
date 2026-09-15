/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";
// export { Operations, Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */, compute_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */, compute_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */, verify_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */, verify_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_hash /* IMPORTED_LONG_NAMED_BIT */, hash /* IMPORTED_SHORT_NAMED_BIT */, Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */, generate_key /* IMPORTED_SHORT_NAMED_BIT */, Operations_derive_key /* IMPORTED_LONG_NAMED_BIT */, derive_key /* IMPORTED_SHORT_NAMED_BIT */, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";
import { type CIO_ALGORITHM } from "../CryptographicInformationFramework/CIO-ALGORITHM.oca.mjs";


/**
 * @summary cia_alg_null
 * @description
 * 
 * Placeholder algorithm: NULL parameters, generate-key only, `&id` -1. ISO/IEC
 * 7816-15:2016 Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cia-alg-null CIO-ALGORITHM ::= {
 *     PARAMETERS NULL OPERATIONS {{generate-key}} ID -1}
 * ```
 * 
 * @constant
 * @type {CIO_ALGORITHM<NULL>}
 * @implements {CIO_ALGORITHM<NULL>}
 */
export
const cia_alg_null: CIO_ALGORITHM<NULL> = {
    class: "CIO-ALGORITHM",
    decoderFor: {
        "&Parameters": $._decodeNull,
    },
    encoderFor: {
        "&Parameters": $._encodeNull,
    },
    "&id": -1 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Parameters": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Operations": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
