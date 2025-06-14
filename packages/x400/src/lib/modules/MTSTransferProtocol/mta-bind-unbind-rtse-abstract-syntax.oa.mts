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
} from '../MTSTransferProtocol/RTSE-apdus.ta.mjs';
import { id_as_mta_rtse } from '../MHSProtocolObjectIdentifiers/id-as-mta-rtse.va.mjs';
/* START_OF_SYMBOL_DEFINITION mta_bind_unbind_rtse_abstract_syntax */
/**
 * @summary mta_bind_unbind_rtse_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind-unbind-rtse-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   RTSE-apdus -- With MTA-bind and MTA-unbind --
 *   IDENTIFIED BY  id-as-mta-rtse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<RTSE_apdus>}
 * @implements {ABSTRACT_SYNTAX<RTSE_apdus>}
 */
export const mta_bind_unbind_rtse_abstract_syntax: ABSTRACT_SYNTAX<RTSE_apdus> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_RTSE_apdus,
    },
    encoderFor: {
        '&Type': _encode_RTSE_apdus,
    },
    '&id': id_as_mta_rtse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION mta_bind_unbind_rtse_abstract_syntax */

/* eslint-enable */
