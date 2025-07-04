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
} from '@wildboar/cmip';
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
 * @summary ChangeBackInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeBackInfo ::= SEQUENCE {
 *   backedUpObject         [0]  ObjectInstance,
 *   backUpObject           [1]  OptionalObject DEFAULT noObject:NULL,
 *   backedUpObjectChanges  [2] IMPLICIT ExpectedAttributeList OPTIONAL,
 *   backUpObjectChanges    [3] IMPLICIT ExpectedAttributeList OPTIONAL
 * }
 * ```
 *
 */
export class ChangeBackInfo {
    constructor(
        /**
         * @summary `backedUpObject`.
         * @public
         * @readonly
         */
        readonly backedUpObject: ObjectInstance,
        /**
         * @summary `backUpObject`.
         * @public
         * @readonly
         */
        readonly backUpObject: OPTIONAL<OptionalObject>,
        /**
         * @summary `backedUpObjectChanges`.
         * @public
         * @readonly
         */
        readonly backedUpObjectChanges: OPTIONAL<ExpectedAttributeList>,
        /**
         * @summary `backUpObjectChanges`.
         * @public
         * @readonly
         */
        readonly backUpObjectChanges: OPTIONAL<ExpectedAttributeList>
    ) {}

    /**
     * @summary Restructures an object into a ChangeBackInfo
     * @description
     *
     * This takes an `object` and converts it to a `ChangeBackInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeBackInfo`.
     * @returns {ChangeBackInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ChangeBackInfo]: ChangeBackInfo[_K] }
    ): ChangeBackInfo {
        return new ChangeBackInfo(
            _o.backedUpObject,
            _o.backUpObject,
            _o.backedUpObjectChanges,
            _o.backUpObjectChanges
        );
    }

    /**
     * @summary Getter that returns the default value for `backUpObject`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_backUpObject(): OptionalObject {
        return { noObject: null };
    }
}

/**
 * @summary The Leading Root Component Types of ChangeBackInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangeBackInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'backedUpObject',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'backUpObject',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'backedUpObjectChanges',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'backUpObjectChanges',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ChangeBackInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangeBackInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ChangeBackInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangeBackInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ChangeBackInfo: $.ASN1Decoder<ChangeBackInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeBackInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeBackInfo} The decoded data structure.
 */
export function _decode_ChangeBackInfo(el: _Element): ChangeBackInfo {
    if (!_cached_decoder_for_ChangeBackInfo) {
        _cached_decoder_for_ChangeBackInfo = function (
            el: _Element
        ): ChangeBackInfo {
            let backedUpObject!: ObjectInstance;
            let backUpObject: OPTIONAL<OptionalObject> =
                ChangeBackInfo._default_value_for_backUpObject;
            let backedUpObjectChanges: OPTIONAL<ExpectedAttributeList>;
            let backUpObjectChanges: OPTIONAL<ExpectedAttributeList>;
            const callbacks: $.DecodingMap = {
                backedUpObject: (_el: _Element): void => {
                    backedUpObject = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                backUpObject: (_el: _Element): void => {
                    backUpObject = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
                backedUpObjectChanges: (_el: _Element): void => {
                    backedUpObjectChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
                backUpObjectChanges: (_el: _Element): void => {
                    backUpObjectChanges = $._decode_implicit<ExpectedAttributeList>(
                        () => _decode_ExpectedAttributeList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangeBackInfo,
                _extension_additions_list_spec_for_ChangeBackInfo,
                _root_component_type_list_2_spec_for_ChangeBackInfo,
                undefined
            );
            return new ChangeBackInfo (
                backedUpObject,
                backUpObject,
                backedUpObjectChanges,
                backUpObjectChanges
            );
        };
    }
    return _cached_decoder_for_ChangeBackInfo(el);
}

let _cached_encoder_for_ChangeBackInfo: $.ASN1Encoder<ChangeBackInfo> | null = null;

/**
 * @summary Encodes a(n) ChangeBackInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeBackInfo, encoded as an ASN.1 Element.
 */
export function _encode_ChangeBackInfo(
    value: ChangeBackInfo,
    elGetter: $.ASN1Encoder<ChangeBackInfo>
): _Element {
    if (!_cached_encoder_for_ChangeBackInfo) {
        _cached_encoder_for_ChangeBackInfo = function (
            value: ChangeBackInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.backedUpObject, $.BER),
                        /* IF_DEFAULT */ value.backUpObject === undefined ||
                        $.deepEq(
                            value.backUpObject,
                            ChangeBackInfo._default_value_for_backUpObject
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.backUpObject, $.BER),
                        /* IF_ABSENT  */ value.backedUpObjectChanges ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.backedUpObjectChanges, $.BER),
                        /* IF_ABSENT  */ value.backUpObjectChanges === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ExpectedAttributeList,
                                  $.BER
                              )(value.backUpObjectChanges, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ChangeBackInfo(value, elGetter);
}


/* eslint-enable */
