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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    OriginatorRequestedAlternateRecipient,
    _decode_OriginatorRequestedAlternateRecipient,
    _encode_OriginatorRequestedAlternateRecipient,
} from '../MTAAbstractService/OriginatorRequestedAlternateRecipient.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary originator_requested_alternate_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-requested-alternate-recipient EXTENSION ::= {
 *   OriginatorRequestedAlternateRecipient,
 *   IDENTIFIED BY  standard-extension:2
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<OriginatorRequestedAlternateRecipient>}
 * @implements {EXTENSION<OriginatorRequestedAlternateRecipient>}
 */
export const originator_requested_alternate_recipient: EXTENSION<OriginatorRequestedAlternateRecipient> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_OriginatorRequestedAlternateRecipient,
    },
    encoderFor: {
        '&Type': _encode_OriginatorRequestedAlternateRecipient,
    },
    '&id': {
        standard_extension: 2,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
