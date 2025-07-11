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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import { id_aae_edi_auto_forwarding_loop } from '../EDIMSObjectIdentifiers/id-aae-edi-auto-forwarding-loop.va.mjs';
import { type AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
/**
 * @summary auto_forwarding_loop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-forwarding-loop AUTO-ACTION-ERROR ::= {
 *   CODE  global:id-aae-edi-auto-forwarding-loop
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR}
 * @implements {AUTO_ACTION_ERROR}
 */
export const auto_forwarding_loop: AUTO_ACTION_ERROR = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': undefined,
    },
    encoderFor: {
        '&ParameterType': undefined,
    },
    '&errorCode': {
        global: id_aae_edi_auto_forwarding_loop,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
