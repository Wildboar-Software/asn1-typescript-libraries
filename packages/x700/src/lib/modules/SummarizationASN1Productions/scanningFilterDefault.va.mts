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
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs';
import {
    _decode_FilterItem,
    _encode_FilterItem,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/FilterItem.ta.mjs';
/**
 * @summary scanningFilterDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scanningFilterDefault CMISFilter ::= and:{}
 * ```
 *
 * @constant
 */
export const scanningFilterDefault: CMISFilter = {
    and: [],
};

/* eslint-enable */
