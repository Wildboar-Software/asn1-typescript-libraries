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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Abstract_syntax_name
 * @description
 *
 * OBJECT IDENTIFIER of an abstract syntax in a presentation
 * context. See ITU-T Rec. X.216 | ISO/IEC 8822. Used here in
 * `Default-P-context` (X.237 bis (1998) §7.1.4.14, §9.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abstract-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Abstract_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

/**
 * @summary Decode an `Abstract_syntax_name` value
 * @param el The ASN.1 element to decode
 * @returns The decoded `Abstract_syntax_name` value
 * @function
 */
export const _decode_Abstract_syntax_name = $._decodeObjectIdentifier;

/**
 * @summary Encode an `Abstract_syntax_name` value
 * @param value The `Abstract_syntax_name` value to encode
 * @param elGetter The function to get the ASN.1 element to encode
 * @returns The encoded ASN.1 element
 * @function
 */
export const _encode_Abstract_syntax_name = $._encodeObjectIdentifier;

/* eslint-enable */
