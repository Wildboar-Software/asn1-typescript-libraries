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
    Boolean,
    _decode_Boolean,
    _encode_Boolean,
} from '../AccessControl-ASN1Module/Boolean.ta.mjs';
/**
 * @summary false_
 * @description
 *
 * Named value `false` of `Boolean`. Default of
 * `initiatorACImandated`: initiator ACI is not required on
 * each request. ITU-T Rec. X.741 (04/95)
 * [§A.2.7](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.5.14.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * false Boolean ::= FALSE
 * ```
 *
 * @constant
 */
export const false_: Boolean = false;

/* eslint-enable */
