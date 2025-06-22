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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    TeletexParameters,
    _decode_TeletexParameters,
    _encode_TeletexParameters,
} from '../IPMSInformationObjects/TeletexParameters.ta.mjs';
import {
    TeletexData,
    _decode_TeletexData,
    _encode_TeletexData,
} from '../IPMSInformationObjects/TeletexData.ta.mjs';
/**
 * @summary TeletexBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexBodyPart ::= SEQUENCE {
 *   parameters  TeletexParameters,
 *   data        TeletexData
 * }
 * ```
 *
 * @class
 */
export class TeletexBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: TeletexParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: TeletexData
    ) {}

    /**
     * @summary Restructures an object into a TeletexBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `TeletexBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexBodyPart`.
     * @returns {TeletexBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof TeletexBodyPart]: TeletexBodyPart[_K] }
    ): TeletexBodyPart {
        return new TeletexBodyPart(_o.parameters, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of TeletexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexBodyPart: $.ASN1Decoder<TeletexBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexBodyPart} The decoded data structure.
 */
export function _decode_TeletexBodyPart(el: _Element) {
    if (!_cached_decoder_for_TeletexBodyPart) {
        _cached_decoder_for_TeletexBodyPart = function (
            el: _Element
        ): TeletexBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TeletexBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: TeletexParameters;
            let data!: TeletexData;
            parameters = _decode_TeletexParameters(sequence[0]);
            data = _decode_TeletexData(sequence[1]);
            return new TeletexBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_TeletexBodyPart(el);
}

let _cached_encoder_for_TeletexBodyPart: $.ASN1Encoder<TeletexBodyPart> | null = null;

/**
 * @summary Encodes a(n) TeletexBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_TeletexBodyPart(
    value: TeletexBodyPart,
    elGetter: $.ASN1Encoder<TeletexBodyPart>
) {
    if (!_cached_encoder_for_TeletexBodyPart) {
        _cached_encoder_for_TeletexBodyPart = function (
            value: TeletexBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TeletexParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TeletexData(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TeletexBodyPart(value, elGetter);
}


/* eslint-enable */
