/* eslint-disable */
import {
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
import { SimpleNameType, _decode_SimpleNameType, _encode_SimpleNameType } from "../Attribute-ASN1Module/SimpleNameType.ta.mjs";
/**
 * @summary LogRecordId
 * @description
 * 
 * Naming attribute of log-record instances: `SimpleNameType` constrained to the
 * `number` alternative. MATCHES FOR EQUALITY, ORDERING. `{smi2AttributeID 3}`.
 * ITU-T Rec. X.721 (02/92) §10.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRecordId  ::= 
 *   SimpleNameType(WITH COMPONENTS {
 *                    number  PRESENT,
 *                    string  ABSENT
 *                  })
 * ```
 */
export
type LogRecordId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LogRecordId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogRecordId} The decoded data structure.
 */
export const _decode_LogRecordId: $.ASN1Decoder<LogRecordId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) LogRecordId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRecordId, encoded as an ASN.1 Element.
 */
export const _encode_LogRecordId: $.ASN1Encoder<LogRecordId> = _encode_SimpleNameType;


/* eslint-enable */
