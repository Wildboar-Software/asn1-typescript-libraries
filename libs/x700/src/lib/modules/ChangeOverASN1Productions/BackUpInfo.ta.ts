/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta';
export {
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta';

/* START_OF_SYMBOL_DEFINITION BackUpInfo */
/**
 * @summary BackUpInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackUpInfo ::= SEQUENCE {
 *   backedUpObjectSpecified  [0]  OptionalObject DEFAULT noObject:NULL,
 *   backUpObjectSpecified    [1]  OptionalObject DEFAULT noObject:NULL,
 *   backedUpObjectExisting   [2]  OptionalObject DEFAULT noObject:NULL,
 *   backUpObjectExisting     [3]  OptionalObject DEFAULT noObject:NULL
 * }
 * ```
 *
 * @class
 */
export class BackUpInfo {
    constructor(
        /**
         * @summary `backedUpObjectSpecified`.
         * @public
         * @readonly
         */
        readonly backedUpObjectSpecified: OPTIONAL<OptionalObject>,
        /**
         * @summary `backUpObjectSpecified`.
         * @public
         * @readonly
         */
        readonly backUpObjectSpecified: OPTIONAL<OptionalObject>,
        /**
         * @summary `backedUpObjectExisting`.
         * @public
         * @readonly
         */
        readonly backedUpObjectExisting: OPTIONAL<OptionalObject>,
        /**
         * @summary `backUpObjectExisting`.
         * @public
         * @readonly
         */
        readonly backUpObjectExisting: OPTIONAL<OptionalObject>
    ) {}

    /**
     * @summary Restructures an object into a BackUpInfo
     * @description
     *
     * This takes an `object` and converts it to a `BackUpInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackUpInfo`.
     * @returns {BackUpInfo}
     */
    public static _from_object(
        _o: { [_K in keyof BackUpInfo]: BackUpInfo[_K] }
    ): BackUpInfo {
        return new BackUpInfo(
            _o.backedUpObjectSpecified,
            _o.backUpObjectSpecified,
            _o.backedUpObjectExisting,
            _o.backUpObjectExisting
        );
    }

    /**
     * @summary Getter that returns the default value for `backedUpObjectSpecified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_backedUpObjectSpecified() {
        return { noObject: null };
    }
    /**
     * @summary Getter that returns the default value for `backUpObjectSpecified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_backUpObjectSpecified() {
        return { noObject: null };
    }
    /**
     * @summary Getter that returns the default value for `backedUpObjectExisting`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_backedUpObjectExisting() {
        return { noObject: null };
    }
    /**
     * @summary Getter that returns the default value for `backUpObjectExisting`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_backUpObjectExisting() {
        return { noObject: null };
    }
}
/* END_OF_SYMBOL_DEFINITION BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackUpInfo */
/**
 * @summary The Leading Root Component Types of BackUpInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackUpInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'backedUpObjectSpecified',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backUpObjectSpecified',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backedUpObjectExisting',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backUpObjectExisting',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackUpInfo */
/**
 * @summary The Trailing Root Component Types of BackUpInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackUpInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackUpInfo */
/**
 * @summary The Extension Addition Component Types of BackUpInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackUpInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpInfo */
let _cached_decoder_for_BackUpInfo: $.ASN1Decoder<BackUpInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _decode_BackUpInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) BackUpInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackUpInfo} The decoded data structure.
 */
export function _decode_BackUpInfo(el: _Element) {
    if (!_cached_decoder_for_BackUpInfo) {
        _cached_decoder_for_BackUpInfo = function (el: _Element): BackUpInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let backedUpObjectSpecified: OPTIONAL<OptionalObject> =
                BackUpInfo._default_value_for_backedUpObjectSpecified;
            let backUpObjectSpecified: OPTIONAL<OptionalObject> =
                BackUpInfo._default_value_for_backUpObjectSpecified;
            let backedUpObjectExisting: OPTIONAL<OptionalObject> =
                BackUpInfo._default_value_for_backedUpObjectExisting;
            let backUpObjectExisting: OPTIONAL<OptionalObject> =
                BackUpInfo._default_value_for_backUpObjectExisting;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                backedUpObjectSpecified: (_el: _Element): void => {
                    backedUpObjectSpecified = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
                backUpObjectSpecified: (_el: _Element): void => {
                    backUpObjectSpecified = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
                backedUpObjectExisting: (_el: _Element): void => {
                    backedUpObjectExisting = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
                backUpObjectExisting: (_el: _Element): void => {
                    backUpObjectExisting = $._decode_explicit<OptionalObject>(
                        () => _decode_OptionalObject
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BackUpInfo,
                _extension_additions_list_spec_for_BackUpInfo,
                _root_component_type_list_2_spec_for_BackUpInfo,
                undefined
            );
            return new BackUpInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                backedUpObjectSpecified,
                backUpObjectSpecified,
                backedUpObjectExisting,
                backUpObjectExisting
            );
        };
    }
    return _cached_decoder_for_BackUpInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpInfo */
let _cached_encoder_for_BackUpInfo: $.ASN1Encoder<BackUpInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpInfo */

/* START_OF_SYMBOL_DEFINITION _encode_BackUpInfo */
/**
 * @summary Encodes a(n) BackUpInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackUpInfo, encoded as an ASN.1 Element.
 */
export function _encode_BackUpInfo(
    value: BackUpInfo,
    elGetter: $.ASN1Encoder<BackUpInfo>
) {
    if (!_cached_encoder_for_BackUpInfo) {
        _cached_encoder_for_BackUpInfo = function (
            value: BackUpInfo,
            elGetter: $.ASN1Encoder<BackUpInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.backedUpObjectSpecified ===
                            undefined ||
                        $.deepEq(
                            value.backedUpObjectSpecified,
                            BackUpInfo._default_value_for_backedUpObjectSpecified
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.backedUpObjectSpecified, $.BER),
                        /* IF_DEFAULT */ value.backUpObjectSpecified ===
                            undefined ||
                        $.deepEq(
                            value.backUpObjectSpecified,
                            BackUpInfo._default_value_for_backUpObjectSpecified
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.backUpObjectSpecified, $.BER),
                        /* IF_DEFAULT */ value.backedUpObjectExisting ===
                            undefined ||
                        $.deepEq(
                            value.backedUpObjectExisting,
                            BackUpInfo._default_value_for_backedUpObjectExisting
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.backedUpObjectExisting, $.BER),
                        /* IF_DEFAULT */ value.backUpObjectExisting ===
                            undefined ||
                        $.deepEq(
                            value.backUpObjectExisting,
                            BackUpInfo._default_value_for_backUpObjectExisting
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OptionalObject,
                                  $.BER
                              )(value.backUpObjectExisting, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BackUpInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackUpInfo */

/* eslint-enable */
