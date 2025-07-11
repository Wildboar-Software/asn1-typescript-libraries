/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../CMSProfileAttributes/TimeStamp.ta.mjs";
import { URI, _decode_URI, _encode_URI } from "../CMSProfileAttributes/URI.ta.mjs";

/**
 * @summary TimeStamped
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStamped ::= SEQUENCE {
 * timeStampValue    TimeStamp,
 * timeStampService    URI OPTIONAL
 * }
 * ```
 *
 */
export class TimeStamped {
    constructor(
        /**
         * @summary `timeStampValue`.
         * @public
         * @readonly
         */
        readonly timeStampValue: TimeStamp,
        /**
         * @summary `timeStampService`.
         * @public
         * @readonly
         */
        readonly timeStampService: OPTIONAL<URI>
    ) {}

    /**
     * @summary Restructures an object into a TimeStamped
     * @description
     *
     * This takes an `object` and converts it to a `TimeStamped`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeStamped`.
     * @returns {TimeStamped}
     */
    public static _from_object(
        _o: { [_K in keyof TimeStamped]: TimeStamped[_K] }
    ): TimeStamped {
        return new TimeStamped(_o.timeStampValue, _o.timeStampService);
    }
}


/**
 * @summary The Leading Root Component Types of TimeStamped
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeStamped: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "timeStampValue",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "timeStampService",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of TimeStamped
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeStamped: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TimeStamped
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeStamped: $.ComponentSpec[] = [];


let _cached_decoder_for_TimeStamped: $.ASN1Decoder<TimeStamped> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TimeStamped
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStamped} The decoded data structure.
 */
export function _decode_TimeStamped(el: _Element): TimeStamped {
    if (!_cached_decoder_for_TimeStamped) {
        _cached_decoder_for_TimeStamped = function (el: _Element): TimeStamped {
            let timeStampValue!: TimeStamp;
            let timeStampService: OPTIONAL<URI>;
            const callbacks: $.DecodingMap = {
                timeStampValue: (_el: _Element): void => {
                    timeStampValue = _decode_TimeStamp(_el);
                },
                timeStampService: (_el: _Element): void => {
                    timeStampService = _decode_URI(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStamped,
                _extension_additions_list_spec_for_TimeStamped,
                _root_component_type_list_2_spec_for_TimeStamped,
                undefined
            );
            return new TimeStamped (
                timeStampValue,
                timeStampService
            );
        };
    }
    return _cached_decoder_for_TimeStamped(el);
}


let _cached_encoder_for_TimeStamped: $.ASN1Encoder<TimeStamped> | null = null;


/**
 * @summary Encodes a(n) TimeStamped into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStamped, encoded as an ASN.1 Element.
 */
export function _encode_TimeStamped(
    value: TimeStamped,
    elGetter: $.ASN1Encoder<TimeStamped>
): _Element {
    if (!_cached_encoder_for_TimeStamped) {
        _cached_encoder_for_TimeStamped = function (
            value: TimeStamped        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeStamp(
                            value.timeStampValue,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.timeStampService === undefined
                            ? undefined
                            : _encode_URI(value.timeStampService, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TimeStamped(value, elGetter);
}


/* eslint-enable */
