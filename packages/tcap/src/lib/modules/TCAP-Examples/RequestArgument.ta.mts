/* eslint-disable */
import {
    OPTIONAL,
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
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta.mjs';
import {
    BasicServiceIndicator,
    _enum_for_BasicServiceIndicator,
    _decode_BasicServiceIndicator,
    _encode_BasicServiceIndicator,
} from '../TCAP-Examples/BasicServiceIndicator.ta.mjs';
/**
 * @summary RequestArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestArgument ::= SEQUENCE {
 *   calledNumber  IsdnNumber,
 *   basicService  BasicServiceIndicator OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RequestArgument {
    constructor(
        /**
         * @summary `calledNumber`.
         * @public
         * @readonly
         */
        readonly calledNumber: IsdnNumber,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceIndicator>
    ) {}

    /**
     * @summary Restructures an object into a RequestArgument
     * @description
     *
     * This takes an `object` and converts it to a `RequestArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestArgument`.
     * @returns {RequestArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RequestArgument]: RequestArgument[_K] }
    ): RequestArgument {
        return new RequestArgument(_o.calledNumber, _o.basicService);
    }

    /**
     * @summary The enum used as the type of the component `basicService`
     * @public
     * @static
     */

    public static _enum_for_basicService = _enum_for_BasicServiceIndicator;
}

/**
 * @summary The Leading Root Component Types of RequestArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'calledNumber',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'basicService',
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of RequestArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RequestArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_RequestArgument: $.ASN1Decoder<RequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestArgument} The decoded data structure.
 */
export function _decode_RequestArgument(el: _Element): RequestArgument {
    if (!_cached_decoder_for_RequestArgument) {
        _cached_decoder_for_RequestArgument = function (
            el: _Element
        ): RequestArgument {
            let calledNumber!: IsdnNumber;
            let basicService: OPTIONAL<BasicServiceIndicator>;
            const callbacks: $.DecodingMap = {
                calledNumber: (_el: _Element): void => {
                    calledNumber = _decode_IsdnNumber(_el);
                },
                basicService: (_el: _Element): void => {
                    basicService = _decode_BasicServiceIndicator(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestArgument,
                _extension_additions_list_spec_for_RequestArgument,
                _root_component_type_list_2_spec_for_RequestArgument,
                undefined
            );
            return new RequestArgument (
                calledNumber,
                basicService
            );
        };
    }
    return _cached_decoder_for_RequestArgument(el);
}

let _cached_encoder_for_RequestArgument: $.ASN1Encoder<RequestArgument> | null = null;

/**
 * @summary Encodes a(n) RequestArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestArgument, encoded as an ASN.1 Element.
 */
export function _encode_RequestArgument(
    value: RequestArgument,
    elGetter: $.ASN1Encoder<RequestArgument>
): _Element {
    if (!_cached_encoder_for_RequestArgument) {
        _cached_encoder_for_RequestArgument = function (
            value: RequestArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IsdnNumber(
                            value.calledNumber,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.basicService === undefined
                            ? undefined
                            : _encode_BasicServiceIndicator(
                                  value.basicService,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RequestArgument(value, elGetter);
}


/* eslint-enable */
