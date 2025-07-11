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
 * @summary RC2_CBC_Parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC2-CBC-Parameter ::= SEQUENCE {
 *     rc2ParameterVersion INTEGER OPTIONAL,
 *     iv OCTET STRING (SIZE(8))
 * }
 * ```
 *
 */
export class RC2_CBC_Parameter {
    constructor(
        /**
         * @summary `rc2ParameterVersion`.
         * @public
         * @readonly
         */
        readonly rc2ParameterVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `iv`.
         * @public
         * @readonly
         */
        readonly iv: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a RC2_CBC_Parameter
     * @description
     *
     * This takes an `object` and converts it to a `RC2_CBC_Parameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RC2_CBC_Parameter`.
     * @returns {RC2_CBC_Parameter}
     */
    public static _from_object(
        _o: { [_K in keyof RC2_CBC_Parameter]: RC2_CBC_Parameter[_K] }
    ): RC2_CBC_Parameter {
        return new RC2_CBC_Parameter(_o.rc2ParameterVersion, _o.iv);
    }
}


/**
 * @summary The Leading Root Component Types of RC2_CBC_Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RC2_CBC_Parameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rc2ParameterVersion",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "iv",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of RC2_CBC_Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RC2_CBC_Parameter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RC2_CBC_Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RC2_CBC_Parameter: $.ComponentSpec[] = [];


let _cached_decoder_for_RC2_CBC_Parameter: $.ASN1Decoder<RC2_CBC_Parameter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RC2_CBC_Parameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RC2_CBC_Parameter} The decoded data structure.
 */
export function _decode_RC2_CBC_Parameter(el: _Element): RC2_CBC_Parameter {
    if (!_cached_decoder_for_RC2_CBC_Parameter) {
        _cached_decoder_for_RC2_CBC_Parameter = function (
            el: _Element
        ): RC2_CBC_Parameter {
            let rc2ParameterVersion: OPTIONAL<INTEGER>;
            let iv!: OCTET_STRING;
            const callbacks: $.DecodingMap = {
                rc2ParameterVersion: (_el: _Element): void => {
                    rc2ParameterVersion = $._decodeInteger(_el);
                },
                iv: (_el: _Element): void => {
                    iv = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RC2_CBC_Parameter,
                _extension_additions_list_spec_for_RC2_CBC_Parameter,
                _root_component_type_list_2_spec_for_RC2_CBC_Parameter,
                undefined
            );
            return new RC2_CBC_Parameter(
                rc2ParameterVersion,
                iv
            );
        };
    }
    return _cached_decoder_for_RC2_CBC_Parameter(el);
}


let _cached_encoder_for_RC2_CBC_Parameter: $.ASN1Encoder<RC2_CBC_Parameter> | null = null;


/**
 * @summary Encodes a(n) RC2_CBC_Parameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC2_CBC_Parameter, encoded as an ASN.1 Element.
 */
export function _encode_RC2_CBC_Parameter(
    value: RC2_CBC_Parameter,
    elGetter: $.ASN1Encoder<RC2_CBC_Parameter>
): _Element {
    if (!_cached_encoder_for_RC2_CBC_Parameter) {
        _cached_encoder_for_RC2_CBC_Parameter = function (
            value: RC2_CBC_Parameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.rc2ParameterVersion === undefined
                            ? undefined
                            : $._encodeInteger(
                                  value.rc2ParameterVersion,
                                  $.BER
                              ),
                        /* REQUIRED   */ $._encodeOctetString(value.iv, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RC2_CBC_Parameter(value, elGetter);
}


/* eslint-enable */
