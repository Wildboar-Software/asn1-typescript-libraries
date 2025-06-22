/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    FingerPrint_finger,
    _decode_FingerPrint_finger,
    _encode_FingerPrint_finger,
    _enum_for_FingerPrint_finger,
} from "../PKCS-15/FingerPrint-finger.ta.mjs";
import {
    FingerPrint_hand,
    _decode_FingerPrint_hand,
    _encode_FingerPrint_hand,
    _enum_for_FingerPrint_hand,
} from "../PKCS-15/FingerPrint-hand.ta.mjs";

/**
 * @summary FingerPrint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint ::= SEQUENCE {
 *     hand ENUMERATED {left, right},
 *     finger ENUMERATED {thumb, pointerFinger, middleFinger, ringFinger, littleFinger},
 *     ...
 * }
 * ```
 *
 * @class
 */
export class FingerPrint {
    constructor(
        /**
         * @summary `hand`.
         * @public
         * @readonly
         */
        readonly hand: FingerPrint_hand,
        /**
         * @summary `finger`.
         * @public
         * @readonly
         */
        readonly finger: FingerPrint_finger,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FingerPrint
     * @description
     *
     * This takes an `object` and converts it to a `FingerPrint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FingerPrint`.
     * @returns {FingerPrint}
     */
    public static _from_object(
        _o: { [_K in keyof FingerPrint]: FingerPrint[_K] }
    ): FingerPrint {
        return new FingerPrint(
            _o.hand,
            _o.finger,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `hand`
     * @public
     * @static
     */

    public static _enum_for_hand = _enum_for_FingerPrint_hand;
    /**
     * @summary The enum used as the type of the component `finger`
     * @public
     * @static
     */

    public static _enum_for_finger = _enum_for_FingerPrint_finger;
}


/**
 * @summary The Leading Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FingerPrint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hand",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "finger",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];


/**
 * @summary The Trailing Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FingerPrint: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FingerPrint: $.ComponentSpec[] = [];


let _cached_decoder_for_FingerPrint: $.ASN1Decoder<FingerPrint> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FingerPrint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FingerPrint} The decoded data structure.
 */
export function _decode_FingerPrint(el: _Element) {
    if (!_cached_decoder_for_FingerPrint) {
        _cached_decoder_for_FingerPrint = function (el: _Element): FingerPrint {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "FingerPrint contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "hand";
            sequence[1].name = "finger";
            let hand!: FingerPrint_hand;
            let finger!: FingerPrint_finger;
            hand = _decode_FingerPrint_hand(sequence[0]);
            finger = _decode_FingerPrint_finger(sequence[1]);
            return new FingerPrint(hand, finger, sequence.slice(2));
        };
    }
    return _cached_decoder_for_FingerPrint(el);
}


let _cached_encoder_for_FingerPrint: $.ASN1Encoder<FingerPrint> | null = null;


/**
 * @summary Encodes a(n) FingerPrint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FingerPrint, encoded as an ASN.1 Element.
 */
export function _encode_FingerPrint(
    value: FingerPrint,
    elGetter: $.ASN1Encoder<FingerPrint>
) {
    if (!_cached_encoder_for_FingerPrint) {
        _cached_encoder_for_FingerPrint = function (
            value: FingerPrint        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_FingerPrint_hand(
                                value.hand,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_FingerPrint_finger(
                                value.finger,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FingerPrint(value, elGetter);
}


/* eslint-enable */
