/* eslint-disable */
import {
    INTEGER,
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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';

/**
 * @summary Bundle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bundle ::= SEQUENCE {
 *   characteristicInfoType  CharacteristicInformation,
 *   bundlingFactor          INTEGER
 * }
 * ```
 *
 * @class
 */
export class Bundle {
    constructor(
        /**
         * @summary `characteristicInfoType`.
         * @public
         * @readonly
         */
        readonly characteristicInfoType: CharacteristicInformation,
        /**
         * @summary `bundlingFactor`.
         * @public
         * @readonly
         */
        readonly bundlingFactor: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Bundle
     * @description
     *
     * This takes an `object` and converts it to a `Bundle`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Bundle`.
     * @returns {Bundle}
     */
    public static _from_object(
        _o: { [_K in keyof Bundle]: Bundle[_K] }
    ): Bundle {
        return new Bundle(_o.characteristicInfoType, _o.bundlingFactor);
    }
}


/**
 * @summary The Leading Root Component Types of Bundle
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Bundle: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'characteristicInfoType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'bundlingFactor',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of Bundle
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Bundle: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Bundle
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Bundle: $.ComponentSpec[] = [];


let _cached_decoder_for_Bundle: $.ASN1Decoder<Bundle> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bundle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bundle} The decoded data structure.
 */
export function _decode_Bundle(el: _Element): Bundle {
    if (!_cached_decoder_for_Bundle) {
        _cached_decoder_for_Bundle = function (el: _Element): Bundle {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Bundle contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'characteristicInfoType';
            sequence[1].name = 'bundlingFactor';
            let characteristicInfoType!: CharacteristicInformation;
            let bundlingFactor!: INTEGER;
            characteristicInfoType = _decode_CharacteristicInformation(
                sequence[0]
            );
            bundlingFactor = $._decodeInteger(sequence[1]);
            return new Bundle(characteristicInfoType, bundlingFactor);
        };
    }
    return _cached_decoder_for_Bundle(el);
}


let _cached_encoder_for_Bundle: $.ASN1Encoder<Bundle> | null = null;


/**
 * @summary Encodes a(n) Bundle into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bundle, encoded as an ASN.1 Element.
 */
export function _encode_Bundle(value: Bundle, elGetter: $.ASN1Encoder<Bundle>): _Element {
    if (!_cached_encoder_for_Bundle) {
        _cached_encoder_for_Bundle = function (
            value: Bundle        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CharacteristicInformation(
                            value.characteristicInfoType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.bundlingFactor,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Bundle(value, elGetter);
}


/* eslint-enable */
