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
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.mjs';
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from '../IPMSInformationObjects/EncryptedData.ta.mjs';
/**
 * @summary EncryptedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedBodyPart ::= SEQUENCE {
 *   parameters  EncryptedParameters,
 *   data        EncryptedData
 * }
 * ```
 *
 * @class
 */
export class EncryptedBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: EncryptedParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: EncryptedData
    ) {}

    /**
     * @summary Restructures an object into a EncryptedBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedBodyPart`.
     * @returns {EncryptedBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedBodyPart]: EncryptedBodyPart[_K] }
    ): EncryptedBodyPart {
        return new EncryptedBodyPart(_o.parameters, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_EncryptedBodyPart: $.ASN1Decoder<EncryptedBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedBodyPart} The decoded data structure.
 */
export function _decode_EncryptedBodyPart(el: _Element): EncryptedBodyPart {
    if (!_cached_decoder_for_EncryptedBodyPart) {
        _cached_decoder_for_EncryptedBodyPart = function (
            el: _Element
        ): EncryptedBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncryptedBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: EncryptedParameters;
            let data!: EncryptedData;
            parameters = _decode_EncryptedParameters(sequence[0]);
            data = _decode_EncryptedData(sequence[1]);
            return new EncryptedBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_EncryptedBodyPart(el);
}

let _cached_encoder_for_EncryptedBodyPart: $.ASN1Encoder<EncryptedBodyPart> | null = null;

/**
 * @summary Encodes a(n) EncryptedBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedBodyPart(
    value: EncryptedBodyPart,
    elGetter: $.ASN1Encoder<EncryptedBodyPart>
): _Element {
    if (!_cached_encoder_for_EncryptedBodyPart) {
        _cached_encoder_for_EncryptedBodyPart = function (
            value: EncryptedBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptedParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedBodyPart(value, elGetter);
}


/* eslint-enable */
