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
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';
export {
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';

/* START_OF_SYMBOL_DEFINITION RedirectionProcessingInfo */
/**
 * @summary RedirectionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionProcessingInfo ::= SET {
 *   redirection-reason  [0]  RedirectionReason,
 *   original            [1]  ORName OPTIONAL,
 *   redirected-to       [2]  ORName OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RedirectionProcessingInfo {
    constructor(
        /**
         * @summary `redirection_reason`.
         * @public
         * @readonly
         */
        readonly redirection_reason: RedirectionReason,
        /**
         * @summary `original`.
         * @public
         * @readonly
         */
        readonly original: OPTIONAL<ORName>,
        /**
         * @summary `redirected_to`.
         * @public
         * @readonly
         */
        readonly redirected_to: OPTIONAL<ORName>
    ) {}

    /**
     * @summary Restructures an object into a RedirectionProcessingInfo
     * @description
     *
     * This takes an `object` and converts it to a `RedirectionProcessingInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RedirectionProcessingInfo`.
     * @returns {RedirectionProcessingInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof RedirectionProcessingInfo]: RedirectionProcessingInfo[_K];
        }
    ): RedirectionProcessingInfo {
        return new RedirectionProcessingInfo(
            _o.redirection_reason,
            _o.original,
            _o.redirected_to
        );
    }

    /**
     * @summary The enum used as the type of the component `redirection_reason`
     * @public
     * @static
     */

    public static _enum_for_redirection_reason = _enum_for_RedirectionReason;
}
/* END_OF_SYMBOL_DEFINITION RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RedirectionProcessingInfo */
/**
 * @summary The Leading Root Component Types of RedirectionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RedirectionProcessingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'redirection-reason',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'redirected-to',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RedirectionProcessingInfo */
/**
 * @summary The Trailing Root Component Types of RedirectionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RedirectionProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RedirectionProcessingInfo */
/**
 * @summary The Extension Addition Component Types of RedirectionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RedirectionProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionProcessingInfo */
let _cached_decoder_for_RedirectionProcessingInfo: $.ASN1Decoder<RedirectionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectionProcessingInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionProcessingInfo} The decoded data structure.
 */
export function _decode_RedirectionProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_RedirectionProcessingInfo) {
        _cached_decoder_for_RedirectionProcessingInfo = function (
            el: _Element
        ): RedirectionProcessingInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let redirection_reason!: RedirectionReason;
            let original: OPTIONAL<ORName>;
            let redirected_to: OPTIONAL<ORName>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'redirection-reason': (_el: _Element): void => {
                    redirection_reason = $._decode_implicit<RedirectionReason>(
                        () => _decode_RedirectionReason
                    )(_el);
                },
                original: (_el: _Element): void => {
                    original = $._decode_implicit<ORName>(() => _decode_ORName)(
                        _el
                    );
                },
                'redirected-to': (_el: _Element): void => {
                    redirected_to = $._decode_implicit<ORName>(
                        () => _decode_ORName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RedirectionProcessingInfo,
                _extension_additions_list_spec_for_RedirectionProcessingInfo,
                _root_component_type_list_2_spec_for_RedirectionProcessingInfo,
                undefined
            );
            return new RedirectionProcessingInfo /* SET_CONSTRUCTOR_CALL */(
                redirection_reason,
                original,
                redirected_to
            );
        };
    }
    return _cached_decoder_for_RedirectionProcessingInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionProcessingInfo */
let _cached_encoder_for_RedirectionProcessingInfo: $.ASN1Encoder<RedirectionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectionProcessingInfo */
/**
 * @summary Encodes a(n) RedirectionProcessingInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionProcessingInfo(
    value: RedirectionProcessingInfo,
    elGetter: $.ASN1Encoder<RedirectionProcessingInfo>
) {
    if (!_cached_encoder_for_RedirectionProcessingInfo) {
        _cached_encoder_for_RedirectionProcessingInfo = function (
            value: RedirectionProcessingInfo,
            elGetter: $.ASN1Encoder<RedirectionProcessingInfo>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RedirectionReason,
                            $.BER
                        )(value.redirection_reason, $.BER),
                        /* IF_ABSENT  */ value.original === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ORName,
                                  $.BER
                              )(value.original, $.BER),
                        /* IF_ABSENT  */ value.redirected_to === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ORName,
                                  $.BER
                              )(value.redirected_to, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RedirectionProcessingInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectionProcessingInfo */

/* eslint-enable */
