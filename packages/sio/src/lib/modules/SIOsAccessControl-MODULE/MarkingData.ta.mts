/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MarkingCodes,
    _decode_MarkingCodes,
    _encode_MarkingCodes,
} from "../SIOsAccessControl-MODULE/MarkingCodes.ta.mjs";
import {
    MarkingPhrase,
    _decode_MarkingPhrase,
    _encode_MarkingPhrase,
} from "../SIOsAccessControl-MODULE/MarkingPhrase.ta.mjs";

/**
 * @summary MarkingData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingData ::= SEQUENCE {
 *   markingPhrase  MarkingPhrase OPTIONAL,
 *   markingCodes   MarkingCodes OPTIONAL
 * }(ALL EXCEPT ({ -- none; at least one component shall be present --}))
 * ```
 *
 */
export class MarkingData {
    constructor(
        /**
         * @summary `markingPhrase`.
         * @public
         * @readonly
         */
        readonly markingPhrase: OPTIONAL<MarkingPhrase>,
        /**
         * @summary `markingCodes`.
         * @public
         * @readonly
         */
        readonly markingCodes: OPTIONAL<MarkingCodes>
    ) {}

    /**
     * @summary Restructures an object into a MarkingData
     * @description
     *
     * This takes an `object` and converts it to a `MarkingData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MarkingData`.
     * @returns {MarkingData}
     */
    public static _from_object(
        _o: { [_K in keyof MarkingData]: MarkingData[_K] }
    ): MarkingData {
        return new MarkingData(_o.markingPhrase, _o.markingCodes);
    }
}


/**
 * @summary The Leading Root Component Types of MarkingData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MarkingData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "markingPhrase",
        true,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "markingCodes",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of MarkingData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MarkingData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MarkingData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MarkingData: $.ComponentSpec[] = [];


let _cached_decoder_for_MarkingData: $.ASN1Decoder<MarkingData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MarkingData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingData} The decoded data structure.
 */
export function _decode_MarkingData(el: _Element): MarkingData {
    if (!_cached_decoder_for_MarkingData) {
        _cached_decoder_for_MarkingData = function (el: _Element): MarkingData {
            let markingPhrase: OPTIONAL<MarkingPhrase>;
            let markingCodes: OPTIONAL<MarkingCodes>;
            const callbacks: $.DecodingMap = {
                markingPhrase: (_el: _Element): void => {
                    markingPhrase = _decode_MarkingPhrase(_el);
                },
                markingCodes: (_el: _Element): void => {
                    markingCodes = _decode_MarkingCodes(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MarkingData,
                _extension_additions_list_spec_for_MarkingData,
                _root_component_type_list_2_spec_for_MarkingData,
                undefined
            );
            return new MarkingData (
                markingPhrase,
                markingCodes
            );
        };
    }
    return _cached_decoder_for_MarkingData(el);
}


let _cached_encoder_for_MarkingData: $.ASN1Encoder<MarkingData> | null = null;


/**
 * @summary Encodes a(n) MarkingData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingData, encoded as an ASN.1 Element.
 */
export function _encode_MarkingData(
    value: MarkingData,
    elGetter: $.ASN1Encoder<MarkingData>
): _Element {
    if (!_cached_encoder_for_MarkingData) {
        _cached_encoder_for_MarkingData = function (
            value: MarkingData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.markingPhrase === undefined
                            ? undefined
                            : _encode_MarkingPhrase(value.markingPhrase, $.BER),
                        /* IF_ABSENT  */ value.markingCodes === undefined
                            ? undefined
                            : _encode_MarkingCodes(value.markingCodes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MarkingData(value, elGetter);
}


/* eslint-enable */
