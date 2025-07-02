/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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


/**
 * @summary CompareOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareOK ::= SEQUENCE {
 *   matched        [0] BOOLEAN,
 *   matchedSubtype [1] BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class CompareOK {
    constructor(
        /**
         * @summary `matched`.
         * @public
         * @readonly
         */
        readonly matched: BOOLEAN,
        /**
         * @summary `matchedSubtype`.
         * @public
         * @readonly
         */
        readonly matchedSubtype: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CompareOK
     * @description
     *
     * This takes an `object` and converts it to a `CompareOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareOK`.
     * @returns {CompareOK}
     */
    public static _from_object(
        _o: { [_K in keyof CompareOK]: CompareOK[_K] }
    ): CompareOK {
        return new CompareOK(
            _o.matched,
            _o.matchedSubtype,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `matchedSubtype`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_matchedSubtype() {
        return false;
    }
}


/**
 * @summary The Leading Root Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'matched',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'matchedSubtype',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareOK: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CompareOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareOK: $.ComponentSpec[] = [];


let _cached_decoder_for_CompareOK: $.ASN1Decoder<CompareOK> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CompareOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareOK} The decoded data structure.
 */
export function _decode_CompareOK(el: _Element): CompareOK {
    if (!_cached_decoder_for_CompareOK) {
        _cached_decoder_for_CompareOK = function (el: _Element): CompareOK {
            let matched!: BOOLEAN;
            let matchedSubtype: OPTIONAL<BOOLEAN> =
                CompareOK._default_value_for_matchedSubtype;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                matched: (_el: _Element): void => {
                    matched = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                matchedSubtype: (_el: _Element): void => {
                    matchedSubtype = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CompareOK,
                _extension_additions_list_spec_for_CompareOK,
                _root_component_type_list_2_spec_for_CompareOK,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareOK (
                matched,
                matchedSubtype,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CompareOK(el);
}


let _cached_encoder_for_CompareOK: $.ASN1Encoder<CompareOK> | null = null;


/**
 * @summary Encodes a(n) CompareOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareOK, encoded as an ASN.1 Element.
 */
export function _encode_CompareOK(
    value: CompareOK,
    elGetter: $.ASN1Encoder<CompareOK>
): _Element {
    if (!_cached_encoder_for_CompareOK) {
        _cached_encoder_for_CompareOK = function (
            value: CompareOK        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeBoolean,
                                $.BER
                            )(value.matched, $.BER),
                            /* IF_DEFAULT */ value.matchedSubtype ===
                                undefined ||
                            $.deepEq(
                                value.matchedSubtype,
                                CompareOK._default_value_for_matchedSubtype
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.matchedSubtype, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CompareOK(value, elGetter);
}


/* eslint-enable */
