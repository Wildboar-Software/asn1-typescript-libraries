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
    RTSE_apdus,
    _decode_RTSE_apdus,
    _encode_RTSE_apdus,
} from '../MTSAccessProtocol/RTSE-apdus.ta.mjs';
import { id_as_mts_rtse } from '../MHSProtocolObjectIdentifiers/id-as-mts-rtse.va.mjs';
/**
 * @summary mts_bind_unbind_rtse_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind-unbind-rtse-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   RTSE-apdus -- With MTS Bind and MTS Unbind --
 *   IDENTIFIED BY  id-as-mts-rtse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<RTSE_apdus>}
 * @implements {ABSTRACT_SYNTAX<RTSE_apdus>}
 */
export const mts_bind_unbind_rtse_abstract_syntax: ABSTRACT_SYNTAX<RTSE_apdus> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_RTSE_apdus,
    },
    encoderFor: {
        '&Type': _encode_RTSE_apdus,
    },
    '&id': id_as_mts_rtse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
