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
} from '@wildboar/cmip';
import {
    _decode_FilterItem,
    _encode_FilterItem,
} from '@wildboar/cmip';
/**
 * @summary scanningFilterDefault
 * @description
 *
 * DEFAULT VALUE of the `scanningFilter` attribute in
 * `scopedSelectionPackage`: empty AND, i.e. true — every
 * object in scope is selected unless a non-default
 * filter is set. Cor.1 writes the value as `and:{}`
 * (was `and {}`). ITU-T Rec. X.738 (11/93)
 * [§8.1.1.3](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.3; Cor.1 (06/98) A.9.
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
