/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Curve, _decode_Curve, _encode_Curve } from "../ANSI-X9-62/Curve.ta.mjs";
import {
    ECParameters_version,
    _decode_ECParameters_version,
    _encode_ECParameters_version,
} from "../ANSI-X9-62/ECParameters-version.ta.mjs";
import {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "../ANSI-X9-62/ECPoint.ta.mjs";
import {
    FieldID,
    _decode_FieldID,
    _encode_FieldID,
} from "../ANSI-X9-62/FieldID.ta.mjs";
/**
 * @summary ECParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters ::= SEQUENCE { -- Elliptic curve parameters
 *     version         INTEGER { ecpVerl(1) } (ecpVerl),
 *     fieldID         FieldID {{FieldTypes}},
 *     curve           Curve,
 *     base            ECPoint, -- Base point G
 *     order           INTEGER, -- Order n of the base point
 *     cofactor        INTEGER OPTIONAL, -- The integer h = #E(Fq)/n
 *     ...
 * }
 * ```
 *
 */
export class ECParameters {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ECParameters_version,
        /**
         * @summary `fieldID`.
         * @public
         * @readonly
         */
        readonly fieldID: FieldID,
        /**
         * @summary `curve`.
         * @public
         * @readonly
         */
        readonly curve: Curve,
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: ECPoint,
        /**
         * @summary `order`.
         * @public
         * @readonly
         */
        readonly order: INTEGER,
        /**
         * @summary `cofactor`.
         * @public
         * @readonly
         */
        readonly cofactor: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ECParameters
     * @description
     *
     * This takes an `object` and converts it to a `ECParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECParameters`.
     * @returns {ECParameters}
     */
    public static _from_object(
        _o: { [_K in keyof ECParameters]: ECParameters[_K] }
    ): ECParameters {
        return new ECParameters(
            _o.version,
            _o.fieldID,
            _o.curve,
            _o.base,
            _o.order,
            _o.cofactor,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ECParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ECParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "fieldID",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "curve",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "base",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "order",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "cofactor",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ECParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ECParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ECParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ECParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_ECParameters: $.ASN1Decoder<ECParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters} The decoded data structure.
 */
export function _decode_ECParameters(el: _Element): ECParameters {
    if (!_cached_decoder_for_ECParameters) {
        _cached_decoder_for_ECParameters = function (
            el: _Element
        ): ECParameters {
            let version!: ECParameters_version;
            let fieldID!: FieldID;
            let curve!: Curve;
            let base!: ECPoint;
            let order!: INTEGER;
            let cofactor: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_ECParameters_version(_el);
                },
                fieldID: (_el: _Element): void => {
                    fieldID = _decode_FieldID(_el);
                },
                curve: (_el: _Element): void => {
                    curve = _decode_Curve(_el);
                },
                base: (_el: _Element): void => {
                    base = _decode_ECPoint(_el);
                },
                order: (_el: _Element): void => {
                    order = $._decodeInteger(_el);
                },
                cofactor: (_el: _Element): void => {
                    cofactor = $._decodeInteger(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ECParameters,
                _extension_additions_list_spec_for_ECParameters,
                _root_component_type_list_2_spec_for_ECParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ECParameters(
                version,
                fieldID,
                curve,
                base,
                order,
                cofactor,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ECParameters(el);
}

let _cached_encoder_for_ECParameters: $.ASN1Encoder<ECParameters> | null = null;

/**
 * @summary Encodes a(n) ECParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters, encoded as an ASN.1 Element.
 */
export function _encode_ECParameters(
    value: ECParameters,
    elGetter: $.ASN1Encoder<ECParameters>
): _Element {
    if (!_cached_encoder_for_ECParameters) {
        _cached_encoder_for_ECParameters = function (
            value: ECParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ECParameters_version(
                                value.version,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_FieldID(
                                value.fieldID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Curve(value.curve, $.DER),
                            /* REQUIRED   */ _encode_ECPoint(value.base, $.DER),
                            /* REQUIRED   */ $._encodeInteger(
                                value.order,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.cofactor === undefined
                                ? undefined
                                : $._encodeInteger(value.cofactor, $.DER),
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
    return _cached_encoder_for_ECParameters(value, elGetter);
}


/* eslint-enable */
