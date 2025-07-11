/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DHParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHParameter ::= SEQUENCE {
 *     prime INTEGER, -- p
 *     base INTEGER, -- g
 *     privateValueLength INTEGER OPTIONAL
 * }
 * ```
 *
 */
export class DHParameter {
    constructor(
        /**
         * @summary `prime`.
         * @public
         * @readonly
         */
        readonly prime: OCTET_STRING,
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: OCTET_STRING,
        /**
         * @summary `privateValueLength`.
         * @public
         * @readonly
         */
        readonly privateValueLength: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DHParameter
     * @description
     *
     * This takes an `object` and converts it to a `DHParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DHParameter`.
     * @returns {DHParameter}
     */
    public static _from_object(
        _o: { [_K in keyof DHParameter]: DHParameter[_K] }
    ): DHParameter {
        return new DHParameter(_o.prime, _o.base, _o.privateValueLength);
    }
}


/**
 * @summary The Leading Root Component Types of DHParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DHParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "prime",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "base",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "privateValueLength",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of DHParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DHParameter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DHParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DHParameter: $.ComponentSpec[] = [];


let _cached_decoder_for_DHParameter: $.ASN1Decoder<DHParameter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DHParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHParameter} The decoded data structure.
 */
export function _decode_DHParameter(el: _Element): DHParameter {
    if (!_cached_decoder_for_DHParameter) {
        _cached_decoder_for_DHParameter = function (el: _Element): DHParameter {
            let prime!: OCTET_STRING;
            let base!: OCTET_STRING;
            let privateValueLength: OPTIONAL<INTEGER>;
            const callbacks: $.DecodingMap = {
                prime: (_el: _Element): void => {
                    prime = $._decodeBigInt(_el);
                },
                base: (_el: _Element): void => {
                    base = $._decodeBigInt(_el);
                },
                privateValueLength: (_el: _Element): void => {
                    privateValueLength = $._decodeInteger(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DHParameter,
                _extension_additions_list_spec_for_DHParameter,
                _root_component_type_list_2_spec_for_DHParameter,
                undefined
            );
            return new DHParameter(
                prime,
                base,
                privateValueLength
            );
        };
    }
    return _cached_decoder_for_DHParameter(el);
}


let _cached_encoder_for_DHParameter: $.ASN1Encoder<DHParameter> | null = null;


/**
 * @summary Encodes a(n) DHParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHParameter, encoded as an ASN.1 Element.
 */
export function _encode_DHParameter(
    value: DHParameter,
    elGetter: $.ASN1Encoder<DHParameter>
): _Element {
    if (!_cached_encoder_for_DHParameter) {
        _cached_encoder_for_DHParameter = function (
            value: DHParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBigInt(value.prime, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(value.base, $.BER),
                        /* IF_ABSENT  */ value.privateValueLength === undefined
                            ? undefined
                            : $._encodeInteger(value.privateValueLength, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DHParameter(value, elGetter);
}


/* eslint-enable */
