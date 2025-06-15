/* eslint-disable */
import {
    TRUE_BIT,
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
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    OriginatorRequestedAlternateRecipient,
    _decode_OriginatorRequestedAlternateRecipient,
    _encode_OriginatorRequestedAlternateRecipient,
} from '../MTSAbstractService/OriginatorRequestedAlternateRecipient.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary originator_requested_alternate_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-requested-alternate-recipient EXTENSION ::= {
 *   OriginatorRequestedAlternateRecipient,
 *   RECOMMENDED CRITICALITY  {for-submission},
 *   IDENTIFIED BY            standard-extension:2
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
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_submission] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 2,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
