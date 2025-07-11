/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta.mjs";
/**
 * @summary UpdateWindow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateWindow ::= SEQUENCE {
 *   start  Time,
 *   stop   Time,
 *   ...}
 * ```
 *
 */
export class UpdateWindow {
    constructor(
        /**
         * @summary `start`.
         * @public
         * @readonly
         */
        readonly start: Time,
        /**
         * @summary `stop`.
         * @public
         * @readonly
         */
        readonly stop: Time,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateWindow
     * @description
     *
     * This takes an `object` and converts it to a `UpdateWindow`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateWindow`.
     * @returns {UpdateWindow}
     */
    public static _from_object(
        _o: { [_K in keyof UpdateWindow]: UpdateWindow[_K] }
    ): UpdateWindow {
        return new UpdateWindow(
            _o.start,
            _o.stop,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateWindow: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "start",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "stop",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateWindow: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateWindow: $.ComponentSpec[] = [];

let _cached_decoder_for_UpdateWindow: $.ASN1Decoder<UpdateWindow> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateWindow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateWindow} The decoded data structure.
 */
export function _decode_UpdateWindow(el: _Element): UpdateWindow {
    if (!_cached_decoder_for_UpdateWindow) {
        _cached_decoder_for_UpdateWindow = function (
            el: _Element
        ): UpdateWindow {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UpdateWindow contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "start";
            sequence[1].name = "stop";
            let start!: Time;
            let stop!: Time;
            start = _decode_Time(sequence[0]);
            stop = _decode_Time(sequence[1]);
            return new UpdateWindow(start, stop, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UpdateWindow(el);
}

let _cached_encoder_for_UpdateWindow: $.ASN1Encoder<UpdateWindow> | null = null;

/**
 * @summary Encodes a(n) UpdateWindow into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateWindow, encoded as an ASN.1 Element.
 */
export function _encode_UpdateWindow(
    value: UpdateWindow,
    elGetter: $.ASN1Encoder<UpdateWindow>
): _Element {
    if (!_cached_encoder_for_UpdateWindow) {
        _cached_encoder_for_UpdateWindow = function (
            value: UpdateWindow        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(value.start, $.DER),
                            /* REQUIRED   */ _encode_Time(value.stop, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UpdateWindow(value, elGetter);
}


/* eslint-enable */
