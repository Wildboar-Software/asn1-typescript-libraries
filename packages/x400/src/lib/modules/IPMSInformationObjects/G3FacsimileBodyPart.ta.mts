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
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta.mjs';
import {
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.mjs';
/**
 * @summary G3FacsimileBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileBodyPart ::= SEQUENCE {
 *   parameters  G3FacsimileParameters,
 *   data        G3FacsimileData
 * }
 * ```
 *
 * @class
 */
export class G3FacsimileBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: G3FacsimileParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: G3FacsimileData
    ) {}

    /**
     * @summary Restructures an object into a G3FacsimileBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `G3FacsimileBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `G3FacsimileBodyPart`.
     * @returns {G3FacsimileBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof G3FacsimileBodyPart]: G3FacsimileBodyPart[_K] }
    ): G3FacsimileBodyPart {
        return new G3FacsimileBodyPart(_o.parameters, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_G3FacsimileBodyPart: $.ASN1Decoder<G3FacsimileBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileBodyPart} The decoded data structure.
 */
export function _decode_G3FacsimileBodyPart(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileBodyPart) {
        _cached_decoder_for_G3FacsimileBodyPart = function (
            el: _Element
        ): G3FacsimileBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'G3FacsimileBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: G3FacsimileParameters;
            let data!: G3FacsimileData;
            parameters = _decode_G3FacsimileParameters(sequence[0]);
            data = _decode_G3FacsimileData(sequence[1]);
            return new G3FacsimileBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_G3FacsimileBodyPart(el);
}

let _cached_encoder_for_G3FacsimileBodyPart: $.ASN1Encoder<G3FacsimileBodyPart> | null = null;

/**
 * @summary Encodes a(n) G3FacsimileBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileBodyPart(
    value: G3FacsimileBodyPart,
    elGetter: $.ASN1Encoder<G3FacsimileBodyPart>
) {
    if (!_cached_encoder_for_G3FacsimileBodyPart) {
        _cached_encoder_for_G3FacsimileBodyPart = function (
            value: G3FacsimileBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_G3FacsimileParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_G3FacsimileData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_G3FacsimileBodyPart(value, elGetter);
}


/* eslint-enable */
