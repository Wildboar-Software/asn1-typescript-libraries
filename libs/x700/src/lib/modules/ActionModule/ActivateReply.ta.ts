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
    OperationalState,
    _enum_for_OperationalState,
    OperationalState_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    OperationalState_enabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    enabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/OperationalState.ta';
export {
    OperationalState,
    _enum_for_OperationalState,
    OperationalState_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    OperationalState_enabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    enabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/OperationalState.ta';
import {
    ActivateReply_responseCode,
    ActivateReply_responseCode_successResponse /* IMPORTED_LONG_NAMED_INTEGER */,
    successResponse /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivateReply_responseCode_serviceProviderErrorResponse /* IMPORTED_LONG_NAMED_INTEGER */,
    serviceProviderErrorResponse /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ActivateReply_responseCode,
    _encode_ActivateReply_responseCode,
} from '../ActionModule/ActivateReply-responseCode.ta';
export {
    ActivateReply_responseCode,
    ActivateReply_responseCode_successResponse /* IMPORTED_LONG_NAMED_INTEGER */,
    successResponse /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivateReply_responseCode_serviceProviderErrorResponse /* IMPORTED_LONG_NAMED_INTEGER */,
    serviceProviderErrorResponse /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ActivateReply_responseCode,
    _encode_ActivateReply_responseCode,
} from '../ActionModule/ActivateReply-responseCode.ta';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION ActivateReply */
/**
 * @summary ActivateReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivateReply ::= SEQUENCE {
 *   operationalStatus  [0]  OperationalState,
 *   responseCode
 *     [1]  INTEGER {successResponse(0), serviceProviderErrorResponse(1)},
 *   responseParams     [2]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActivateReply {
    constructor(
        /**
         * @summary `operationalStatus`.
         * @public
         * @readonly
         */
        readonly operationalStatus: OperationalState,
        /**
         * @summary `responseCode`.
         * @public
         * @readonly
         */
        readonly responseCode: ActivateReply_responseCode,
        /**
         * @summary `responseParams`.
         * @public
         * @readonly
         */
        readonly responseParams: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a ActivateReply
     * @description
     *
     * This takes an `object` and converts it to a `ActivateReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateReply`.
     * @returns {ActivateReply}
     */
    public static _from_object(
        _o: { [_K in keyof ActivateReply]: ActivateReply[_K] }
    ): ActivateReply {
        return new ActivateReply(
            _o.operationalStatus,
            _o.responseCode,
            _o.responseParams
        );
    }

    /**
     * @summary The enum used as the type of the component `operationalStatus`
     * @public
     * @static
     */

    public static _enum_for_operationalStatus = _enum_for_OperationalState;
}
/* END_OF_SYMBOL_DEFINITION ActivateReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActivateReply */
/**
 * @summary The Leading Root Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActivateReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'operationalStatus',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'responseCode',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'responseParams',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActivateReply */
/**
 * @summary The Trailing Root Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActivateReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActivateReply */
/**
 * @summary The Extension Addition Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActivateReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivateReply */
let _cached_decoder_for_ActivateReply: $.ASN1Decoder<ActivateReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _decode_ActivateReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivateReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivateReply} The decoded data structure.
 */
export function _decode_ActivateReply(el: _Element) {
    if (!_cached_decoder_for_ActivateReply) {
        _cached_decoder_for_ActivateReply = function (
            el: _Element
        ): ActivateReply {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let operationalStatus!: OperationalState;
            let responseCode!: ActivateReply_responseCode;
            let responseParams: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                operationalStatus: (_el: _Element): void => {
                    operationalStatus = $._decode_explicit<OperationalState>(
                        () => _decode_OperationalState
                    )(_el);
                },
                responseCode: (_el: _Element): void => {
                    responseCode = $._decode_explicit<ActivateReply_responseCode>(
                        () => _decode_ActivateReply_responseCode
                    )(_el);
                },
                responseParams: (_el: _Element): void => {
                    responseParams = $._decode_explicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ActivateReply,
                _extension_additions_list_spec_for_ActivateReply,
                _root_component_type_list_2_spec_for_ActivateReply,
                undefined
            );
            return new ActivateReply /* SEQUENCE_CONSTRUCTOR_CALL */(
                operationalStatus,
                responseCode,
                responseParams
            );
        };
    }
    return _cached_decoder_for_ActivateReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivateReply */
let _cached_encoder_for_ActivateReply: $.ASN1Encoder<ActivateReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivateReply */

/* START_OF_SYMBOL_DEFINITION _encode_ActivateReply */
/**
 * @summary Encodes a(n) ActivateReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateReply, encoded as an ASN.1 Element.
 */
export function _encode_ActivateReply(
    value: ActivateReply,
    elGetter: $.ASN1Encoder<ActivateReply>
) {
    if (!_cached_encoder_for_ActivateReply) {
        _cached_encoder_for_ActivateReply = function (
            value: ActivateReply,
            elGetter: $.ASN1Encoder<ActivateReply>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OperationalState,
                            $.BER
                        )(value.operationalStatus, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ActivateReply_responseCode,
                            $.BER
                        )(value.responseCode, $.BER),
                        /* IF_ABSENT  */ value.responseParams === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.responseParams, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ActivateReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivateReply */

/* eslint-enable */
