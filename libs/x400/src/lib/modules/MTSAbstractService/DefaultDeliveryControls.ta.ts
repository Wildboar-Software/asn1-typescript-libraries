/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';
export {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';

/* START_OF_SYMBOL_DEFINITION DefaultDeliveryControls */
/**
 * @summary DefaultDeliveryControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultDeliveryControls  ::=
 *   Controls
 *     (WITH COMPONENTS {
 *        ...,
 *
 *        -- The 'restrict' component shall always be defaulted.
 *        -- restrict ABSENT,
 *        -- A component with a DEFAULT clause cannot be ABSENT
 *        permissible-security-context  ABSENT
 *      })
 * ```
 */
export type DefaultDeliveryControls = Controls; // DefinedType
/* END_OF_SYMBOL_DEFINITION DefaultDeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DefaultDeliveryControls */
let _cached_decoder_for_DefaultDeliveryControls: $.ASN1Decoder<DefaultDeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DefaultDeliveryControls */

/* START_OF_SYMBOL_DEFINITION _decode_DefaultDeliveryControls */
/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDeliveryControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefaultDeliveryControls} The decoded data structure.
 */
export function _decode_DefaultDeliveryControls(el: _Element) {
    if (!_cached_decoder_for_DefaultDeliveryControls) {
        _cached_decoder_for_DefaultDeliveryControls = _decode_Controls;
    }
    return _cached_decoder_for_DefaultDeliveryControls(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DefaultDeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DefaultDeliveryControls */
let _cached_encoder_for_DefaultDeliveryControls: $.ASN1Encoder<DefaultDeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DefaultDeliveryControls */

/* START_OF_SYMBOL_DEFINITION _encode_DefaultDeliveryControls */
/**
 * @summary Encodes a(n) DefaultDeliveryControls into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDeliveryControls, encoded as an ASN.1 Element.
 */
export function _encode_DefaultDeliveryControls(
    value: DefaultDeliveryControls,
    elGetter: $.ASN1Encoder<DefaultDeliveryControls>
) {
    if (!_cached_encoder_for_DefaultDeliveryControls) {
        _cached_encoder_for_DefaultDeliveryControls = _encode_Controls;
    }
    return _cached_encoder_for_DefaultDeliveryControls(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DefaultDeliveryControls */

/* eslint-enable */
