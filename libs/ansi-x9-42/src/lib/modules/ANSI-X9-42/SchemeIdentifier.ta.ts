/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca";
export { Schemes } from "../ANSI-X9-42/Schemes.osa";

/* START_OF_SYMBOL_DEFINITION SchemeIdentifier */
/**
 * @summary SchemeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeIdentifier ::= SEQUENCE {
 * scheme    KEY-AGREEMENT.&id({Schemes}),
 * parameters     KEY-AGREEMENT.&Type({Schemes}{@scheme}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SchemeIdentifier {
    constructor(
        /**
         * @summary `scheme`.
         * @public
         * @readonly
         */
        readonly scheme: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a SchemeIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `SchemeIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchemeIdentifier`.
     * @returns {SchemeIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof SchemeIdentifier]: SchemeIdentifier[_K] }
    ): SchemeIdentifier {
        return new SchemeIdentifier(_o.scheme, _o.parameters);
    }
}
/* END_OF_SYMBOL_DEFINITION SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchemeIdentifier */
/**
 * @summary The Leading Root Component Types of SchemeIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchemeIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "scheme",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchemeIdentifier */
/**
 * @summary The Trailing Root Component Types of SchemeIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchemeIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchemeIdentifier */
/**
 * @summary The Extension Addition Component Types of SchemeIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchemeIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeIdentifier */
let _cached_decoder_for_SchemeIdentifier: $.ASN1Decoder<SchemeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeIdentifier} The decoded data structure.
 */
export function _decode_SchemeIdentifier(el: _Element) {
    if (!_cached_decoder_for_SchemeIdentifier) {
        _cached_decoder_for_SchemeIdentifier = function (
            el: _Element
        ): SchemeIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchemeIdentifier,
                _extension_additions_list_spec_for_SchemeIdentifier,
                _root_component_type_list_2_spec_for_SchemeIdentifier,
                undefined
            );
            return new SchemeIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                parameters
            );
        };
    }
    return _cached_decoder_for_SchemeIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeIdentifier */
let _cached_encoder_for_SchemeIdentifier: $.ASN1Encoder<SchemeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeIdentifier */
/**
 * @summary Encodes a(n) SchemeIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SchemeIdentifier(
    value: SchemeIdentifier,
    elGetter: $.ASN1Encoder<SchemeIdentifier>
) {
    if (!_cached_encoder_for_SchemeIdentifier) {
        _cached_encoder_for_SchemeIdentifier = function (
            value: SchemeIdentifier,
            elGetter: $.ASN1Encoder<SchemeIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.scheme,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encodeAny(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SchemeIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeIdentifier */

/* eslint-enable */
