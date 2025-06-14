/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
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
    MSBindUnbindPDUs88,
    _decode_MSBindUnbindPDUs88,
    _encode_MSBindUnbindPDUs88,
} from '../MSAccessProtocol/MSBindUnbindPDUs88.ta.mjs';
import { id_as_ms_88 } from '../MHSProtocolObjectIdentifiers/id-as-ms-88.va.mjs';
/* START_OF_SYMBOL_DEFINITION ms_bind_unbind_abstract_syntax_88 */
/**
 * @summary ms_bind_unbind_abstract_syntax_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-unbind-abstract-syntax-88 ABSTRACT-SYNTAX ::= {
 *   MSBindUnbindPDUs88
 *   IDENTIFIED BY  id-as-ms-88
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MSBindUnbindPDUs88>}
 * @implements {ABSTRACT_SYNTAX<MSBindUnbindPDUs88>}
 */
export const ms_bind_unbind_abstract_syntax_88: ABSTRACT_SYNTAX<MSBindUnbindPDUs88> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MSBindUnbindPDUs88,
    },
    encoderFor: {
        '&Type': _encode_MSBindUnbindPDUs88,
    },
    '&id': id_as_ms_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION ms_bind_unbind_abstract_syntax_88 */

/* eslint-enable */
