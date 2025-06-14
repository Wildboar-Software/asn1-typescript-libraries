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
} from 'asn1-ts';
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION delivery_control */
/**
 * @summary delivery_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-control EventTypeId ::= localForm:6
 * ```
 *
 * @constant
 */
export const delivery_control: EventTypeId = { localForm: 6 };
/* END_OF_SYMBOL_DEFINITION delivery_control */

/* eslint-enable */
