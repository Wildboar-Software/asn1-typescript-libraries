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
} from '@wildboar/asn1';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
/**
 * @summary err_recipient_improperly_specified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-recipient-improperly-specified Code ::= local:3
 * ```
 *
 * @constant
 */
export const err_recipient_improperly_specified: Code = { local: 3 };

/* eslint-enable */
