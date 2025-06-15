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
    MSBindUnbindPDUs94,
    _decode_MSBindUnbindPDUs94,
    _encode_MSBindUnbindPDUs94,
} from '../MSAccessProtocol/MSBindUnbindPDUs94.ta.mjs';
import { id_as_ms_94 } from '../MHSProtocolObjectIdentifiers/id-as-ms-94.va.mjs';
/**
 * @summary ms_bind_unbind_abstract_syntax_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-unbind-abstract-syntax-94 ABSTRACT-SYNTAX ::= {
 *   MSBindUnbindPDUs94
 *   IDENTIFIED BY  id-as-ms-94
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MSBindUnbindPDUs94>}
 * @implements {ABSTRACT_SYNTAX<MSBindUnbindPDUs94>}
 */
export const ms_bind_unbind_abstract_syntax_94: ABSTRACT_SYNTAX<MSBindUnbindPDUs94> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MSBindUnbindPDUs94,
    },
    encoderFor: {
        '&Type': _encode_MSBindUnbindPDUs94,
    },
    '&id': id_as_ms_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
