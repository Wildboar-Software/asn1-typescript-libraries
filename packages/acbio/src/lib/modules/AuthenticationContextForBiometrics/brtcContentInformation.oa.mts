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
    BRTCContentInformation,
    _decode_BRTCContentInformation,
    _encode_BRTCContentInformation,
} from '../AuthenticationContextForBiometrics/BRTCContentInformation.ta.mjs';
import { id_brtcContentInformation } from '../AuthenticationContextForBiometrics/id-brtcContentInformation.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms";


/**
 * @summary brtcContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brtcContentInformation CONTENT-TYPE ::= {
 *     TYPE BRTCContentInformation
 *     IDENTIFIED BY id-brtcContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<BRTCContentInformation>}
 * @implements {CONTENT_TYPE<BRTCContentInformation>}
 */
export const brtcContentInformation: CONTENT_TYPE<BRTCContentInformation> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_BRTCContentInformation,
    },
    encoderFor: {
        '&Type': _encode_BRTCContentInformation,
    },
    '&id': id_brtcContentInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
