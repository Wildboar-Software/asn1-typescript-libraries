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
    VideotexParameters,
    _decode_VideotexParameters,
    _encode_VideotexParameters,
} from '../IPMSInformationObjects/VideotexParameters.ta.mjs';
import {
    VideotexData,
    _decode_VideotexData,
    _encode_VideotexData,
} from '../IPMSInformationObjects/VideotexData.ta.mjs';
/**
 * @summary VideotexBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexBodyPart ::= SEQUENCE {
 *   parameters  VideotexParameters,
 *   data        VideotexData
 * }
 * ```
 *
 * @class
 */
export class VideotexBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: VideotexParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: VideotexData
    ) {}

    /**
     * @summary Restructures an object into a VideotexBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `VideotexBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VideotexBodyPart`.
     * @returns {VideotexBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof VideotexBodyPart]: VideotexBodyPart[_K] }
    ): VideotexBodyPart {
        return new VideotexBodyPart(_o.parameters, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VideotexBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 21)
    ),
];

/**
 * @summary The Trailing Root Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VideotexBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VideotexBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_VideotexBodyPart: $.ASN1Decoder<VideotexBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VideotexBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexBodyPart} The decoded data structure.
 */
export function _decode_VideotexBodyPart(el: _Element) {
    if (!_cached_decoder_for_VideotexBodyPart) {
        _cached_decoder_for_VideotexBodyPart = function (
            el: _Element
        ): VideotexBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'VideotexBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: VideotexParameters;
            let data!: VideotexData;
            parameters = _decode_VideotexParameters(sequence[0]);
            data = _decode_VideotexData(sequence[1]);
            return new VideotexBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_VideotexBodyPart(el);
}

let _cached_encoder_for_VideotexBodyPart: $.ASN1Encoder<VideotexBodyPart> | null = null;

/**
 * @summary Encodes a(n) VideotexBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_VideotexBodyPart(
    value: VideotexBodyPart,
    elGetter: $.ASN1Encoder<VideotexBodyPart>
) {
    if (!_cached_encoder_for_VideotexBodyPart) {
        _cached_encoder_for_VideotexBodyPart = function (
            value: VideotexBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_VideotexParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_VideotexData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VideotexBodyPart(value, elGetter);
}


/* eslint-enable */
