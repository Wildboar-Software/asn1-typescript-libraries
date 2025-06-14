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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    OriginatorReturnAddress,
    _decode_OriginatorReturnAddress,
    _encode_OriginatorReturnAddress,
} from '../MTSAbstractService/OriginatorReturnAddress.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION originator_return_address */
/**
 * @summary originator_return_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-return-address EXTENSION ::= {
 *   OriginatorReturnAddress,
 *   IDENTIFIED BY  standard-extension:13
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<OriginatorReturnAddress>}
 * @implements {EXTENSION<OriginatorReturnAddress>}
 */
export const originator_return_address: EXTENSION<OriginatorReturnAddress> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_OriginatorReturnAddress,
    },
    encoderFor: {
        '&Type': _encode_OriginatorReturnAddress,
    },
    '&id': {
        standard_extension: 13,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION originator_return_address */

/* eslint-enable */
