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
    MTSBindUnbindPDUs,
    _decode_MTSBindUnbindPDUs,
    _encode_MTSBindUnbindPDUs,
} from '../MTSAccessProtocol/MTSBindUnbindPDUs.ta.mjs';
import { id_as_mts } from '../MHSProtocolObjectIdentifiers/id-as-mts.va.mjs';
/* START_OF_SYMBOL_DEFINITION mts_bind_unbind_abstract_syntax */
/**
 * @summary mts_bind_unbind_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind-unbind-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MTSBindUnbindPDUs
 *   IDENTIFIED BY  id-as-mts
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MTSBindUnbindPDUs>}
 * @implements {ABSTRACT_SYNTAX<MTSBindUnbindPDUs>}
 */
export const mts_bind_unbind_abstract_syntax: ABSTRACT_SYNTAX<MTSBindUnbindPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MTSBindUnbindPDUs,
    },
    encoderFor: {
        '&Type': _encode_MTSBindUnbindPDUs,
    },
    '&id': id_as_mts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION mts_bind_unbind_abstract_syntax */

/* eslint-enable */
