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
    SettlementPolicy,
    _decode_SettlementPolicy,
    _encode_SettlementPolicy,
} from '../MhsAcctAsn1Module/SettlementPolicy.ta.mjs';
/**
 * @summary d36
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * d36 SettlementPolicy ::= localForm:0
 * ```
 *
 * @constant
 */
export const d36: SettlementPolicy = { localForm: 0 };

/* eslint-enable */
