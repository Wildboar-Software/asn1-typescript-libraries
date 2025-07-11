/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ValidationParms,
    _decode_ValidationParms,
    _encode_ValidationParms,
} from "../AlgorithmObjectIdentifiers/ValidationParms.ta.mjs";
/**
 * @summary DomainParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainParameters ::= SEQUENCE {
 *   p               INTEGER, -- odd prime, p=jq+1
 *   g               INTEGER, -- generator, g
 *   q               INTEGER, -- factor of p-1
 *   j               INTEGER  OPTIONAL, -- subgroup factor
 *   validationParms ValidationParms OPTIONAL,
 *   ... }
 * ```
 *
 */
export class DomainParameters {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `j`.
         * @public
         * @readonly
         */
        readonly j: OPTIONAL<INTEGER>,
        /**
         * @summary `validationParms`.
         * @public
         * @readonly
         */
        readonly validationParms: OPTIONAL<ValidationParms>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DomainParameters
     * @description
     *
     * This takes an `object` and converts it to a `DomainParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainParameters`.
     * @returns {DomainParameters}
     */
    public static _from_object(
        _o: { [_K in keyof DomainParameters]: DomainParameters[_K] }
    ): DomainParameters {
        return new DomainParameters(
            _o.p,
            _o.g,
            _o.q,
            _o.j,
            _o.validationParms,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DomainParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "j",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "validationParms",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DomainParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DomainParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_DomainParameters: $.ASN1Decoder<DomainParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainParameters} The decoded data structure.
 */
export function _decode_DomainParameters(el: _Element): DomainParameters {
    if (!_cached_decoder_for_DomainParameters) {
        _cached_decoder_for_DomainParameters = function (
            el: _Element
        ): DomainParameters {
            let p!: INTEGER;
            let g!: INTEGER;
            let q!: INTEGER;
            let j: OPTIONAL<INTEGER>;
            let validationParms: OPTIONAL<ValidationParms>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                p: (_el: _Element): void => {
                    p = $._decodeInteger(_el);
                },
                g: (_el: _Element): void => {
                    g = $._decodeInteger(_el);
                },
                q: (_el: _Element): void => {
                    q = $._decodeInteger(_el);
                },
                j: (_el: _Element): void => {
                    j = $._decodeInteger(_el);
                },
                validationParms: (_el: _Element): void => {
                    validationParms = _decode_ValidationParms(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DomainParameters,
                _extension_additions_list_spec_for_DomainParameters,
                _root_component_type_list_2_spec_for_DomainParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DomainParameters(
                p,
                g,
                q,
                j,
                validationParms,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DomainParameters(el);
}

let _cached_encoder_for_DomainParameters: $.ASN1Encoder<DomainParameters> | null = null;

/**
 * @summary Encodes a(n) DomainParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainParameters, encoded as an ASN.1 Element.
 */
export function _encode_DomainParameters(
    value: DomainParameters,
    elGetter: $.ASN1Encoder<DomainParameters>
): _Element {
    if (!_cached_encoder_for_DomainParameters) {
        _cached_encoder_for_DomainParameters = function (
            value: DomainParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.p, $.DER),
                            /* REQUIRED   */ $._encodeInteger(value.g, $.DER),
                            /* REQUIRED   */ $._encodeInteger(value.q, $.DER),
                            /* IF_ABSENT  */ value.j === undefined
                                ? undefined
                                : $._encodeInteger(value.j, $.DER),
                            /* IF_ABSENT  */ value.validationParms === undefined
                                ? undefined
                                : _encode_ValidationParms(
                                      value.validationParms,
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
    return _cached_encoder_for_DomainParameters(value, elGetter);
}


/* eslint-enable */
