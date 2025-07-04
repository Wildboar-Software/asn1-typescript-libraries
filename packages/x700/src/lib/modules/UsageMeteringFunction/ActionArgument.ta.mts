/* eslint-disable */
import {
    NULL,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary ActionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionArgument  ::=  CHOICE {
 *   selectedObjects  SET OF ObjectInstance,
 *   -- set of data objects, controlled by the control
 *   -- object for which the request is appropriate
 *   allObjects       NULL
 *   -- selects all data objects controlled by control
 *   -- object
 * }
 * ```
 */
export type ActionArgument =
    | { selectedObjects: ObjectInstance[] } /* CHOICE_ALT_ROOT */
    | { allObjects: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ActionArgument: $.ASN1Decoder<ActionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionArgument} The decoded data structure.
 */
export function _decode_ActionArgument(el: _Element): ActionArgument {
    if (!_cached_decoder_for_ActionArgument) {
        _cached_decoder_for_ActionArgument = $._decode_inextensible_choice<ActionArgument>(
            {
                'UNIVERSAL 17': [
                    'selectedObjects',
                    $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'UNIVERSAL 5': ['allObjects', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_ActionArgument(el);
}

let _cached_encoder_for_ActionArgument: $.ASN1Encoder<ActionArgument> | null = null;

/**
 * @summary Encodes a(n) ActionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionArgument, encoded as an ASN.1 Element.
 */
export function _encode_ActionArgument(
    value: ActionArgument,
    elGetter: $.ASN1Encoder<ActionArgument>
): _Element {
    if (!_cached_encoder_for_ActionArgument) {
        _cached_encoder_for_ActionArgument = $._encode_choice<ActionArgument>(
            {
                selectedObjects: $._encodeSetOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                allObjects: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActionArgument(value, elGetter);
}


/* eslint-enable */
