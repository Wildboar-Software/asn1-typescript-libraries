/* eslint-disable */
import {
    OPTIONAL,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta.mjs';
import {
    ExpectedAttributeList,
    _decode_ExpectedAttributeList,
    _encode_ExpectedAttributeList,
} from '../ChangeOverASN1Productions/ExpectedAttributeList.ta.mjs';
/**
 * @summary ChangeOverInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeOverInfo ::= SEQUENCE {
 *   primary           [0]  ObjectInstance,
 *   secondary         [1]  OptionalObject DEFAULT noObject:NULL,
 *   primaryChanges    [2] IMPLICIT ExpectedAttributeList OPTIONAL,
 *   secondaryChanges  [3] IMPLICIT ExpectedAttributeList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ChangeOverInfo {
    constructor(
        /**
         * @summary `primary`.
         * @public
         * @readonly
         */
        readonly primary: ObjectInstance,
        /**
         * @summary `secondary`.
         * @public
         * @readonly
         */
        readonly secondary: OPTIONAL<OptionalObject>,
        /**
         * @summary `primaryChanges`.
         * @public
         * @readonly
         */
        readonly primaryChanges: OPTIONAL<ExpectedAttributeList>,
        /**
         * @summary `secondaryChanges`.
         * @public
         * @readonly
         */
        readonly secondaryChanges: OPTIONAL<ExpectedAttributeList>
    ) {}

    /**
     * @summary Restructures an object into a ChangeOverInfo
     * @description
     *
     * This takes an `object` and converts it to a `ChangeOverInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOverInfo`.
     * @returns {ChangeOverInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ChangeOverInfo]: ChangeOverInfo[_K] }
    ): ChangeOverInfo {
        return new ChangeOverInfo(
            _o.primary,
            _o.secondary,
            _o.primaryChanges,
            _o.secondaryChanges
        );
    }

    /**
     * @summary Getter that returns the default value for `secondary`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_secondary(): OptionalObject {
        return { noObject: null };
    }
}

/**
 * @summary The Leading Root Component Types of ChangeOverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangeOverInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'secondary',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'primaryChanges',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'secondaryChanges',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ChangeOverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangeOverInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ChangeOverInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangeOverInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ChangeOverInfo: $.ASN1Decoder<ChangeOverInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOverInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeOverInfo} The decoded data structure.
 */
export function _decode_ChangeOverInfo(el: _Element): ChangeOverInfo {
    if (!_cached_decoder_for_ChangeOverInfo) {
        _cached_decoder_for_ChangeOverInfo = function (
            el: _Element
        ): ChangeOverInfo {
            let primary!: ObjectInstance;
            let secondary: OPTIONAL<OptionalObject> =
                ChangeOverInfo._default_value_for_secondary;
            let primaryChanges: OPTIONAL<ExpectedAttributeList>;
            let secondaryChanges: OPTIONAL<ExpectedAttributeList>;
            const callbacks: $.DecodingMap = {
                primary: (_el: _Element): void => {
                    primary = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                secondary: (_el: _Element): void => {
                    secondary = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
                primaryChanges: (_el: _Element): void => {
                    primaryChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
                secondaryChanges: (_el: _Element): void => {
                    secondaryChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangeOverInfo,
                _extension_additions_list_spec_for_ChangeOverInfo,
                _root_component_type_list_2_spec_for_ChangeOverInfo,
                undefined
            );
            return new ChangeOverInfo (
                primary,
                secondary,
                primaryChanges,
                secondaryChanges
            );
        };
    }
    return _cached_decoder_for_ChangeOverInfo(el);
}

let _cached_encoder_for_ChangeOverInfo: $.ASN1Encoder<ChangeOverInfo> | null = null;

/**
 * @summary Encodes a(n) ChangeOverInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOverInfo, encoded as an ASN.1 Element.
 */
export function _encode_ChangeOverInfo(
    value: ChangeOverInfo,
    elGetter: $.ASN1Encoder<ChangeOverInfo>
): _Element {
    if (!_cached_encoder_for_ChangeOverInfo) {
        _cached_encoder_for_ChangeOverInfo = function (
            value: ChangeOverInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.primary, $.BER),
                        /* IF_DEFAULT */ value.secondary === undefined ||
                        $.deepEq(
                            value.secondary,
                            ChangeOverInfo._default_value_for_secondary
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.secondary, $.BER),
                        /* IF_ABSENT  */ value.primaryChanges === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.primaryChanges, $.BER),
                        /* IF_ABSENT  */ value.secondaryChanges === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.secondaryChanges, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ChangeOverInfo(value, elGetter);
}


/* eslint-enable */
