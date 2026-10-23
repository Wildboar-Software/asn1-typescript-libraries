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
 * Defined in ITU-T X.411 (1999) (§8).
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

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDeliveryControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefaultDeliveryControls} The decoded data structure.
 */
export const _decode_DefaultDeliveryControls: $.ASN1Decoder<DefaultDeliveryControls> = _decode_Controls;

/**
 * @summary Encodes a(n) DefaultDeliveryControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDeliveryControls, encoded as an ASN.1 Element.
 */
export const _encode_DefaultDeliveryControls: $.ASN1Encoder<DefaultDeliveryControls> = _encode_Controls;


/* eslint-enable */
