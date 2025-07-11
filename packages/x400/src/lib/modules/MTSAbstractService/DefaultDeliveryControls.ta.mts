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
import * as $ from '@wildboar/asn1/functional';
import {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.mjs';
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

let _cached_decoder_for_DefaultDeliveryControls: $.ASN1Decoder<DefaultDeliveryControls> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDeliveryControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefaultDeliveryControls} The decoded data structure.
 */
export function _decode_DefaultDeliveryControls(el: _Element): DefaultDeliveryControls {
    if (!_cached_decoder_for_DefaultDeliveryControls) {
        _cached_decoder_for_DefaultDeliveryControls = _decode_Controls;
    }
    return _cached_decoder_for_DefaultDeliveryControls(el);
}

let _cached_encoder_for_DefaultDeliveryControls: $.ASN1Encoder<DefaultDeliveryControls> | null = null;

/**
 * @summary Encodes a(n) DefaultDeliveryControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDeliveryControls, encoded as an ASN.1 Element.
 */
export function _encode_DefaultDeliveryControls(
    value: DefaultDeliveryControls,
    elGetter: $.ASN1Encoder<DefaultDeliveryControls>
): _Element {
    if (!_cached_encoder_for_DefaultDeliveryControls) {
        _cached_encoder_for_DefaultDeliveryControls = _encode_Controls;
    }
    return _cached_encoder_for_DefaultDeliveryControls(value, elGetter);
}


/* eslint-enable */
