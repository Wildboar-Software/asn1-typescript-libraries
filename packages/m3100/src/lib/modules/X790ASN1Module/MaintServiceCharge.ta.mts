/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary MaintServiceCharge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaintServiceCharge  ::=  BOOLEAN
 * ```
 */
export type MaintServiceCharge = BOOLEAN; // BooleanType




export const _decode_MaintServiceCharge = $._decodeBoolean;




export const _encode_MaintServiceCharge = $._encodeBoolean;


/* eslint-enable */
