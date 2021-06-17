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
    RequestSource,
    _enum_for_RequestSource,
    RequestSource_local /* IMPORTED_LONG_ENUMERATION_ITEM */,
    local /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestSource_remote /* IMPORTED_LONG_ENUMERATION_ITEM */,
    remote /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestSource,
    _encode_RequestSource,
} from '../SDHProtASN1/RequestSource.ta';
export {
    RequestSource,
    _enum_for_RequestSource,
    RequestSource_local /* IMPORTED_LONG_ENUMERATION_ITEM */,
    local /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestSource_remote /* IMPORTED_LONG_ENUMERATION_ITEM */,
    remote /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestSource,
    _encode_RequestSource,
} from '../SDHProtASN1/RequestSource.ta';
import {
    SwitchStatus,
    _enum_for_SwitchStatus,
    SwitchStatus_pending /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pending /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SwitchStatus_completed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    completed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SwitchStatus_operateFailed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    operateFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SwitchStatus,
    _encode_SwitchStatus,
} from '../SDHProtASN1/SwitchStatus.ta';
export {
    SwitchStatus,
    _enum_for_SwitchStatus,
    SwitchStatus_pending /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pending /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SwitchStatus_completed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    completed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SwitchStatus_operateFailed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    operateFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SwitchStatus,
    _encode_SwitchStatus,
} from '../SDHProtASN1/SwitchStatus.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionStatus_Item_lockout */
/**
 * @summary ProtectionStatus_Item_lockout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatus-Item-lockout ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ProtectionStatus_Item_lockout {
    constructor(
        /**
         * @summary `requestSource`.
         * @public
         * @readonly
         */
        readonly requestSource: OPTIONAL<RequestSource>,
        /**
         * @summary `switchStatus`.
         * @public
         * @readonly
         */
        readonly switchStatus: SwitchStatus
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatus_Item_lockout
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatus_Item_lockout`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatus_Item_lockout`.
     * @returns {ProtectionStatus_Item_lockout}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatus_Item_lockout]: ProtectionStatus_Item_lockout[_K];
        }
    ): ProtectionStatus_Item_lockout {
        return new ProtectionStatus_Item_lockout(
            _o.requestSource,
            _o.switchStatus
        );
    }

    /**
     * @summary The enum used as the type of the component `requestSource`
     * @public
     * @static
     */

    public static _enum_for_requestSource = _enum_for_RequestSource;
    /**
     * @summary The enum used as the type of the component `switchStatus`
     * @public
     * @static
     */

    public static _enum_for_switchStatus = _enum_for_SwitchStatus;
}
/* END_OF_SYMBOL_DEFINITION ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatus_Item_lockout */
/**
 * @summary The Leading Root Component Types of ProtectionStatus_Item_lockout
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatus_Item_lockout: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'requestSource',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'switchStatus',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatus_Item_lockout */
/**
 * @summary The Trailing Root Component Types of ProtectionStatus_Item_lockout
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatus_Item_lockout: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatus_Item_lockout */
/**
 * @summary The Extension Addition Component Types of ProtectionStatus_Item_lockout
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatus_Item_lockout: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatus_Item_lockout */
let _cached_decoder_for_ProtectionStatus_Item_lockout: $.ASN1Decoder<ProtectionStatus_Item_lockout> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatus_Item_lockout */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatus_Item_lockout
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatus_Item_lockout} The decoded data structure.
 */
export function _decode_ProtectionStatus_Item_lockout(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatus_Item_lockout) {
        _cached_decoder_for_ProtectionStatus_Item_lockout = function (
            el: _Element
        ): ProtectionStatus_Item_lockout {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let requestSource: OPTIONAL<RequestSource>;
            let switchStatus!: SwitchStatus;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                requestSource: (_el: _Element): void => {
                    requestSource = $._decode_implicit<RequestSource>(
                        () => _decode_RequestSource
                    )(_el);
                },
                switchStatus: (_el: _Element): void => {
                    switchStatus = $._decode_implicit<SwitchStatus>(
                        () => _decode_SwitchStatus
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectionStatus_Item_lockout,
                _extension_additions_list_spec_for_ProtectionStatus_Item_lockout,
                _root_component_type_list_2_spec_for_ProtectionStatus_Item_lockout,
                undefined
            );
            return new ProtectionStatus_Item_lockout /* SEQUENCE_CONSTRUCTOR_CALL */(
                requestSource,
                switchStatus
            );
        };
    }
    return _cached_decoder_for_ProtectionStatus_Item_lockout(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatus_Item_lockout */
let _cached_encoder_for_ProtectionStatus_Item_lockout: $.ASN1Encoder<ProtectionStatus_Item_lockout> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatus_Item_lockout */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatus_Item_lockout */
/**
 * @summary Encodes a(n) ProtectionStatus_Item_lockout into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatus_Item_lockout, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatus_Item_lockout(
    value: ProtectionStatus_Item_lockout,
    elGetter: $.ASN1Encoder<ProtectionStatus_Item_lockout>
) {
    if (!_cached_encoder_for_ProtectionStatus_Item_lockout) {
        _cached_encoder_for_ProtectionStatus_Item_lockout = function (
            value: ProtectionStatus_Item_lockout,
            elGetter: $.ASN1Encoder<ProtectionStatus_Item_lockout>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.requestSource === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RequestSource,
                                  $.BER
                              )(value.requestSource, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_SwitchStatus,
                            $.BER
                        )(value.switchStatus, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatus_Item_lockout(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatus_Item_lockout */

/* eslint-enable */
