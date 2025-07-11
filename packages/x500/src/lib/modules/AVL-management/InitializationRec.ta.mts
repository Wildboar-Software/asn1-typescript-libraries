/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta.mjs";
/**
 * @summary InitializationRec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRec ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 */
export class InitializationRec {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationRec
     * @description
     *
     * This takes an `object` and converts it to a `InitializationRec`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationRec`.
     * @returns {InitializationRec}
     */
    public static _from_object(
        _o: { [_K in keyof InitializationRec]: InitializationRec[_K] }
    ): InitializationRec {
        return new InitializationRec(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationRec: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationRec: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationRec: $.ComponentSpec[] = [];

let _cached_decoder_for_InitializationRec: $.ASN1Decoder<InitializationRec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRec
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRec} The decoded data structure.
 */
export function _decode_InitializationRec(el: _Element): InitializationRec {
    if (!_cached_decoder_for_InitializationRec) {
        _cached_decoder_for_InitializationRec = function (
            el: _Element
        ): InitializationRec {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationRec contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationRec(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationRec(el);
}

let _cached_encoder_for_InitializationRec: $.ASN1Encoder<InitializationRec> | null = null;

/**
 * @summary Encodes a(n) InitializationRec into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRec, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRec(
    value: InitializationRec,
    elGetter: $.ASN1Encoder<InitializationRec>
): _Element {
    if (!_cached_encoder_for_InitializationRec) {
        _cached_encoder_for_InitializationRec = function (
            value: InitializationRec        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
                                value.version,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_InitializationRec(value, elGetter);
}


/* eslint-enable */
